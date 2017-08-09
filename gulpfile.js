var gulp = require('gulp'),
    watch = require('gulp-watch');
    sass = require('gulp-sass');
    notify = require('gulp-notify');
    browserSync = require('browser-sync');
    reload      = browserSync.reload;

gulp.task('html', function(){
    gulp.src('index.html')
        .pipe(reload({stream:true}))
        .pipe(notify('HTML Reload.'));
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });
});

gulp.task('sass', function(){
    return gulp.src('sass/style.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('_css/'))
        .pipe(notify('Sass compile.'))
});

gulp.task('autoprefixer', function () {
    var postcss      = require('gulp-postcss');
    var sourcemaps   = require('gulp-sourcemaps');
    var autoprefixer = require('autoprefixer');

    return gulp.src('./_css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'))
        .pipe(notify('Autoprefixer complete.'));
});

gulp.watch('sass/style.scss', ['sass','html']);
gulp.watch('index.html', ['html']);
gulp.watch('./_css/*.*', ['autoprefixer']);
gulp.watch('./css/style.css', ['html']);
gulp.watch('./scripts/script.js', ['html']);

gulp.task('default', ['sass', 'browserSync', 'autoprefixer']);

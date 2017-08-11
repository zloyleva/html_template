(function($){
    $(function(){

        var positionRightSidebar;
        var rightSidebar;
        var rightSidebarMove;
        var mainContent;
        var mainContentPosition;
        var headerMenu;
        var menuHeight;

        $(document).ready(function() {
            rightSidebar = $('.right_sidebar');
            rightSidebarMove = $('.right_sidebar .move_part');
            positionRightSidebar = rightSidebar.position();

            mainContent = $('.main_content');
            headerMenu = $('.navigation_section');
            mainContentPosition = mainContent.position();
            menuHeight = $('.navigation_section').height()
        });

        window.onscroll = function() {
            if(window.pageYOffset > menuHeight){
                $(headerMenu).addClass('fixed_scroll_menu');
            }else{
                $(headerMenu).removeClass('fixed_scroll_menu');
            }

            if(window.pageYOffset > $('header').height()){
                $(headerMenu).addClass('fixed_header')
            }else{
                $(headerMenu).removeClass('fixed_header');
            }

            if(window.pageYOffset > positionRightSidebar.top){
                $(rightSidebarMove).addClass('fixed_bar');
            }else {
                $(rightSidebarMove).removeClass('fixed_bar');
            }
        };

        $(document).on('click', 'a.show_search_button', function (event) {
            event.preventDefault();
            $('.search_section').addClass('show_search');
            $('body').addClass('dont_scroll');
        });

        $(document).on('click', 'a.search_close_button', function (event) {
            event.preventDefault();
            $('.search_section').removeClass('show_search');
            $('body').removeClass('dont_scroll');
            clearSearch();
        });

        $('input.blog-search-input').on('input keyup', function(e) {
            var inputString = $('input.blog-search-input').prop('value');
            if(inputString.length > 0){
                $('input.blog-search-input').css('opacity', '0.8');
                $('.search_result_posts').show();
            }else {
                clearSearch();
                $('input.blog-search-input').css('opacity', '0.3');
            }
        });

        function clearSearch(){
            $('input.blog-search-input').prop('value', '');
            $('.search_result_posts').hide();
        }

    });
})(jQuery);
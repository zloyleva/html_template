(function($){
    $(function(){

        var positionRightSidebar;
        var rightSidebar;
        var rightSidebarMove;
        var mainContent;
        var mainContentPosition;
        var headerMenu;

        $(document).ready(function() {
            rightSidebar = $('.right_sidebar');
            rightSidebarMove = $('.right_sidebar .move_part');
            positionRightSidebar = rightSidebar.position();

            mainContent = $('.main_content');
            headerMenu = $('.fixed_scroll_menu');
            mainContentPosition = mainContent.position();

            console.log(mainContentPosition);
        });

        window.onscroll = function() {
            if(window.pageYOffset > mainContentPosition.top){
                console.log(window.pageYOffset);
                $(headerMenu).addClass('fixed_header');
            }else{
                $(headerMenu).removeClass('fixed_header');
            }

            if(window.pageYOffset > positionRightSidebar.top){
                $(rightSidebarMove).addClass('fixed_bar');
            }else {
                $(rightSidebarMove).removeClass('fixed_bar');
            }
        }

        $(document).on('click', 'a.show_search_button', function (event) {
            event.preventDefault();
            console.log('SHOW SEARCH');
            $('.search_section').addClass('show_search');
        })

        $(document).on('click', 'a.search_close_button', function (event) {
            event.preventDefault();
            console.log('HIDE SEARCH');
            $('.search_section').removeClass('show_search');
        })

    });
})(jQuery)
(document).on('turbolinks:load', function () {
    if ($(".single-project-card").length) {
        if (mode == 1) {
            $(".single-project-card").each(function () {
                $(this).addClass("solid-color-mode");
                $(this).css('background-color', randomColor());
            });
        }
        else {
            $(".single-project-card").each(function () {
                $(this).addClass("border-color-mode");
                $(this).css('border', '5px solid ' + randomColor());
            });
        }
    }


    $('#feed').on('mouseenter', '.single-project-list', function () {
        $(this).css('border-color', randomColor());
    });

    $('#feed').on('mouseleave', '.single-project-list', function () {
        $(this).css('border-color', 'rgba(0, 0 , 0, 0.05)');
    });

});

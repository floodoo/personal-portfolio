$(function () {
    var includes = $("[data-include]");
    $.each(includes, function () {
        var file = $(this).data("include");
        $(this).load(file);
    });
});

function loadHtmlFile(fileName) {
    var includes = $("[data-include]");
    $.each(includes, function () {
        if ($(this).data("include") == fileName) {
            var file = $(this).data("include");
            $(this).load(file);
        }
    });
}

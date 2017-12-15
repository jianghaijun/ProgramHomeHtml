loadPage();

function loadPage() {
    $("#login").click(function () {
        if ($("#userName").val() == '') {
            alert(1);
        }
    });
}
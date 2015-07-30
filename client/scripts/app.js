$(document).ready(function(){

    $("#resumeButton").prepend('<button id="resumeButton">Click for resume!</button>');
    $("#resumeButton").on("click", function() {
        $("#resumeButton").hide();
        $("#bodyContainer").slideDown('slow', function () {
            $.ajax({
                url: '/data-request',
                success: function (data) {
                    console.log(data);
                }
            });
        });
        $("body").on("click", "#bodyContainer", function () {
            $("#bodyContainer").slideUp();
            $("#resumeButton").slideDown();
        });
    });
});
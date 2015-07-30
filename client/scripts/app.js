$(document).ready(function(){
//    $("#slideToggle").click(function(){
//        $('.slideTogglebox').slideToggle();
//    });
//});
    $('#resumeButton').prepend("<button id='resumeButton'>Click for resume!</button>");
//
    $('#resumeButton').click(function(){
        $('#bodyContainer').toggle('slow', function() {
            $.ajax({
                url: "/data-request",
                success: function (data) {
                    console.log(data);
                }
            });
        });
    });
});
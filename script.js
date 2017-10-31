$(document).ready(function(){
    $('#input-button').click(function() {
        //var para = document.createElement("P"); 
        var comment = $('#input-box').val();
        $("#comments").append("<p>" + comment + "</p>");
        $("#comments").append("<hr>");
        $('#input-box').val("");
    });
});
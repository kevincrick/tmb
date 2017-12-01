$(document).ready(function(){
    // Initializes tooltips
    $('[title]').tooltip({container: 'body'});

    //Apply img-thumbnail class to body-content images
    $('.body-content img').addClass("img-thumbnail");
});

// Space above internal link# to allow for navbar
var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
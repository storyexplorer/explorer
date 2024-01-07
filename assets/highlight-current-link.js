// Based this solution from here: http://www.eznetu.com/current-link.html
// Just have to add an a.current class in stylesheet where it should apply
// It just doesn't work though, so moving on and saving for later

$(function(){ $('a').each(function() {
    if ($(this).prop('href') == window.location.href) {$(this).addClass('current');} }); });
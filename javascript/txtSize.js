$(document).ready(function(){
    $('#txtSize button').on('click',changeTxtSize);
});
function changeTxtSize(evt){
    let clicked = $(evt.target);
    let newSize = clicked.data('size');
    $('#pageContent').animate({fontSize:`${newSize}em`}, function(){
        $('#txtSize button.active').removeClass('active');
        clicked.addClass('active');
    });
}
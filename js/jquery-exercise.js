// alert('DOM has finished loading');
//
// $("p").click(function(){
//     alert("The paragraph was clicked.");
// });
//
//
// var contents = $('#main-title').html();
// alert(contents);
//
//
// $("p").css({"border-color": "blue",
//     "border-width":"1px",
//     "border-style":"solid"});
//
// $('#firstParagraph').css({'font-size': '14px'
//
// });
//
$( function() {
    $( "#draggable" ).draggable();
} );
//
$('#draggable').css({
    "border-color":"blue",
    "border-width": "1px",
    "border-style": "solid",
    'color': "#fff",
    "width": "7em",
    "padding": "0",
    "text-align": "center",
    "margin-bottom": "0"
});
//
// $("button").click(function(){
//     $("p").fadeIn();
// });

//================Mouse events exercise=====================


$('h1').click(function () {
    $('h1').css('background-color', 'orange');
});

$('p').dblclick(function () {
    $(this).css('font-size', '18px');
});

$('li').hover(function () {
    $(this).css('color','red');
    },
    function () {
        $(this).css('color','');
    }
);
$(".addItem").click(function (e) {
    e.preventDefault();
    var todotext = $("#elTexto").val();

    $("ul").append("<li> <div class= listdiv >" + todotext + " </div><button type=submit class=checkedItem> Check</button> <button type=submit class=delitem>Delete</button>");
});

$(document).on("click", "button.checkedItem", function(e){
    e.preventDefault();
    $(this).parent().children(":first").addClass("lineCheck");
});

$(document).on("click", "button.delitem", function(e){
    e.preventDefault();
    $(this).parent().remove();
});








// check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on x to delete
$('ul').on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation(); 
});

$("input[type='text']").keypress(function(e){
	// check if enter key was pressed
	if(e.which === 13){
		// grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// create new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});


$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(1000);
})
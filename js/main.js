$('.part').hover (
	function() {
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn();
	},
	function() {
		$('.description').fadeOut(50);
	}
)


$("#quest-1").on("mouseover",function(){
    $("#quest-2").css({
        opacity: 1,
	transition : 'opacity 0.25s ease-in-out'
    })
    $("#quest-3").css({
        opacity: 1,
	transition : 'opacity 0.25s ease-in-out'
    })
    $(".quest-path-1").css({
        opacity: 1,
	transition : 'opacity 0.25s ease-in-out'
    })
    $(".quest-path-2").css({
        opacity: 1,
	transition : 'opacity 0.25s ease-in-out'
    })
});


$("#quest-1").on("mouseout",function(){
    $("#quest-2").css({
        opacity: 0
    })
    $("#quest-3").css({
        opacity: 0
    })
    $(".quest-path-1").css({
        opacity: 0
    })
    $(".quest-path-2").css({
        opacity: 0
    })
});




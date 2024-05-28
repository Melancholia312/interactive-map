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
    $(".quest-path-1").css({
        opacity: 1,
	transition : 'opacity 0.25s ease-in-out'
    })
});


$("#quest-1").on("mouseout",function(){
    $(".quest-path-1").css({
        opacity: 0
    })
});


$("#quest-2").on("mouseover",function(){
    $(".quest-path-2").css({
        opacity: 1,
	transition : 'opacity 0.25s ease-in-out'
    })
});


$("#quest-2").on("mouseout",function(){
    $(".quest-path-2").css({
        opacity: 0
    })
});

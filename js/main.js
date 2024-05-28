$('.part').hover (
	function() {
		$('.description').html($(this).attr('description-data'));
		$('.description').fadeIn();
	},
	function() {
		$('.description').fadeOut(50);
	}
)


$(".part").on("mouseover",function(){
    $(".quest-path").css({
        opacity: 1,
	transition : 'opacity 0.25s ease-in-out'
    })
});


$(".part").on("mouseout",function(){
    $(".quest-path").css({
        opacity: 0
    })
});

$("input:radio[name=type]").change(function () {
    if ($(this).val() == 0) {
	$("#camp-map").hide();
	$("#activity-map").show();
    } else {
	$("#activity-map").hide();
	$("#camp-map").show();
    }
});


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


$("#quest-4").on("mouseover",function(){
    $(".quest-path-3").css({
        opacity: 1,
	transition : 'opacity 0.25s ease-in-out'
    })
});


$("#quest-4").on("mouseout",function(){
    $(".quest-path-3").css({
        opacity: 0
    })
});

$("#quest-5").on("mouseover",function(){
    $(".quest-path-5").css({
        opacity: 1,
	transition : 'opacity 0.25s ease-in-out'
    })
});


$("#quest-5").on("mouseout",function(){
    $(".quest-path-5").css({
        opacity: 0
    })
});


$("#quest-shino").on("mouseover",function(){
    $("#quest-shino-1").css({
        opacity: 1,
	transition : 'opacity 0.25s ease-in-out'
    })
    $(".quest-path-shino").css({
        opacity: 1,
	transition : 'opacity 0.25s ease-in-out'
    })
});


$("#quest-shino").on("mouseout",function(){
    $("#quest-shino-1").css({
        opacity: 0
    })
    $(".quest-path-shino").css({
        opacity: 0
    })
});



$("#quest-giant").on("mouseover",function(){
    $(".quest-giant").css({
        opacity: 1,
	transition : 'opacity 0.25s ease-in-out'
    })
});


$("#quest-giant").on("mouseout",function(){
    $(".quest-giant").css({
        opacity: 0
    })
});


$("#quest-salli").on("mouseover",function(){
    $(".quest-salli").css({
        opacity: 1,
	transition : 'opacity 0.25s ease-in-out'
    })
});


$("#quest-salli").on("mouseout",function(){
    $(".quest-salli").css({
        opacity: 0
    })
});

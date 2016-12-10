$(document).ready(function(){

	$(".close").click(function() {
		var id = $(this).parent().attr('id');
		$('#' + id).remove();
		$('#alert-count').html(parseInt($('#alert-count').html(), 10) - 1);
	});

});
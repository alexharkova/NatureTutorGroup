$(function(){
	var $form = $('.feedback-box');

	$form.on('submit', sendForm);

	function switchFormState(){
		$form.parent().addClass('is-form-sent');
	}

	function sendForm(e){
		e.preventDefault();
		$.ajax({
			url: "https://docs.google.com/forms/d/1owsT84AGRmTtAPpW0IaGybbBPTI3Yzd8KEkT-ysOF9o/formResponse",
			data: {
				"entry.1181419068": $form.find('#email').val(),
				"entry.600496606": $form.find('#topic').val(),
				"entry.1027780061": $form.find('#message').val()
			},
			type: "POST",
			dataType: "xml",
			success: switchFormState,
			error: switchFormState
		});
	}
});
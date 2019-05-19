$(document).ready(function() {

	$("#happyforms-form-56").submit(function() {
		$.ajax({
			type: "POST",
			url: "rest.php",
			data: $(this).serialize()
		}).done(function() {
			console.log("Form was sent");
		});
		return false;
	});

});

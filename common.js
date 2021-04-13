let i=0;
$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");

			// alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
					swal({
						title: "Good job!",
						text: "Твоя відповідь була відправлена!",
						icon: "success",
						// button: "Aww yiss!",
						});
			$("#form").trigger("reset");
			// document.location.href = "map.html";
			$("html").click(function() {
				let but = document.getElementById('submit')
				let href = but.getAttribute('data-href')
				document.location.href = href;
				// console.log(href)
			})
		});
		return false;
	});

});

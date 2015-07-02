$(document).ready(function(){
		
	$('#submit').click(function(){
		var first = $("#firstname").val();
		var last = $("#lastname").val();
		var address = $("#address").val();
		var birthdate = $("#birthdate").val();


		if($("#firstname").val() === ""){
			alert("please fill in your first name");
		} else if($("#lastname").val() === ""){
			alert("please fill in your last name");
		} else if($("#address").val() === ""){
			alert("please fil in your address");
		} else if($("#birthdate").val() === ""){
			alert("please fill in your birthdate");
		} else {
			
			$(".firstClass").append(first);
			$(".lastClass").append(last);
			$(".addressClass").append(address);
			$(".birthdateClass").append(birthdate);
			// alert("complete");
		}

		return false;
	});

});



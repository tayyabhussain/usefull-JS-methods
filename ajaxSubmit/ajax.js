$(document).ready(function(){
	$('#submit').click(function(){
		var data = $('#form').serialize();
		console.log(data);
		submitForm(data);
	});
});
function submitForm(data){
	$.ajax({
		type	: 'POST',
		url   	: 'back.php',
		data	: data,
		dataType: 'json',
		success : function(data){ console.log(data); },
		error 	: function(XMLHttpRequest, textStatus, errorThrown){ 
			console.log(errorThrown); 
		},
		complete: function(XMLHttpRequest, status){ console.log(status); },

	});
}
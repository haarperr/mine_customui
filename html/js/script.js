$(function(){
	window.addEventListener("message", function(event) {
		if (event.data.action == "setValue")
			setValue(event.data.key, event.data.value)
		else if (event.data.action == "setTalking")
			setTalking(event.data.value)
		else if (event.data.action == "updateStatus")
			updateStatus(event.data.status);
	});
});

//Functions
function setValue(key, value) {
	$('#' + key).html(value)
}//setValue

function setTalking(value) {
	if (value)
		$("#voice").html("Stai parlando")
	else
		$("#voice").html("Voce")
}//setTalking

function updateStatus(status) {
	var hunger = status[0]
	var thirst = status[1]
	$("#hunger").html(hunger.percent + "%")
	$("#water").html(thirst.percent + "%")
}//updateStatus
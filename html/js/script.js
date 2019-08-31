$(function(){
	window.addEventListener("message", function(event) {
		if (event.data.action == "setValue") {
			if (event.data.key == "job")
				setJobIcon(event.data.icon)
			setValue(event.data.key, event.data.value)
		} else if (event.data.action == "setTalking")
			setTalking(event.data.value)
		else if (event.data.action == "updateStatus")
			updateStatus(event.data.status);
	});
});

//Functions
function setValue(key, value) {
	$('#' + key+ " span").html(value)
}//setValue

function setJobIcon(icon) {
	$("#job img").attr("src", "./img/jobs/" + icon + ".png")
}//setJobIcon

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
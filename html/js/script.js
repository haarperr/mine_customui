$(function(){
	window.addEventListener("message", function(event) {
		switch (event.data.action) {
			case "show":
				$("#stats").show()
			break;
			case "setValue":
				if (event.data.key == "job")
					setJobIcon(event.data.icon)
				setValue(event.data.key, event.data.value)
			break;
			case "setTalking":
				setTalking(event.data.value)
			break;
			case "updateStatus":
				updateStatus(event.data.status);
			break;
		}
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
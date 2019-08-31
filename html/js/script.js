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
		}
	});
});

//Functions
function setValue(key, value) {
	$('#' + key+ " span").html(value)
}//setValue

function setJobIcon(icon) {
	if (icon.search("off") != -1) icon = icon.substr(3)
	$("#job img").attr("src", "./img/jobs/" + icon + ".png")
}//setJobIcon

function setTalking(value) {
	if (value)
		$("#voice").html("Stai parlando")
	else
		$("#voice").html("Voce")
}//setTalking
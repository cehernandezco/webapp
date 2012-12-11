$(document).bind('pageinit',init)

function init(){
	log("pageinit");
	
	$("#register").click(register);
	$("#access").click(access);

	$.mobile.defaultPageTransition = 'slide';
	$.mobile.phonegapNavigationEnabled = "true";
	$.mobile.page.prototype.options.backBtnText = "Back";
}

function loadJson()
{
	$.ajax({
		url: "./assets/data/location.json"
	}).done(function(data){
		log(data)

	});
}

function access(){
	log($("#user").val());
	if ($("#user").val() != null && $("#user").val() != "")
	{
		log("valid");
		$.mobile.changePage("./dashboard.html");
	}else{
		log("invalid");
	}


	$( "#popupBasic" ).popup( "open" )
	
}
function onOk(){
	$( "#popupBasic" ).popup( "close" )
	log("ok");
}
function onCancel(){
	$( "#popupBasic" ).popup( "close" )
	log("cancelled");
}

function log(message)
{
	console.log(message);
	//alert(message);
}
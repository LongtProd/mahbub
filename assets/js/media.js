
document.getElementById("form-submit").addEventListener("click", function() {
	formcare();
});
createCaptcha()
var code;
function createCaptcha() {
    var ramno = Math.floor(Math.random() * 6) + 5; //random 5-10
    //clear the contents of captcha div first
    document.getElementById('captcha').innerHTML = "";
    var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*+=-";
    var lengthOtp = ramno;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
        captcha.push(charsArray[index]);
    else i--;
    }
    var canv = document.createElement("canvas");
    canv.id = "captcha";
    canv.width = 200;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.font = "25px Georgia";
    ctx.strokeText(captcha.join(""), 0, 30);
    //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}
    
function formcare(){
    var firstname  = document.getElementById("firstname").value;	
	var lastname  = document.getElementById("lastname").value;	
	var company  = document.getElementById("company").value;	
	var designation  = document.getElementById("designation").value;	
	var email  = document.getElementById("email").value;	
	var phone  = document.getElementById("phone").value;	
	var message  = document.getElementById("message").value;	
	var pin  = document.getElementById("pin").value;
    if (myTrim(firstname).length > 2  && myTrim(lastname).length > 2  && myTrim(company).length > 2  && myTrim(designation).length > 2  && myTrim(email).length > 2  && myTrim(phone).length > 2  && myTrim(message).length > 2  && myTrim(pin).length > 2){ 
	 
        if (document.getElementById("pin").value == code) {
			//sendformon();
			testfunc();
		  }else{
			alert("Invalid Captcha");
				createCaptcha();
		  }
    }else{
        alert("Please Check your form and fill all neccessary fields.")
    }
}

function testfunc() {
    console.log("HURRAY, FORM SUBMITED")
}

function sendformon(){
		
	var firstname  = document.getElementById("firstname").value;	
	var lastname  = document.getElementById("lastname").value;	
	var company  = document.getElementById("company").value;	
	var designation  = document.getElementById("designation").value;	
	var email  = document.getElementById("email").value;	
	var phone  = document.getElementById("phone").value;	
	var message  = document.getElementById("message").value;	
	var pin  = document.getElementById("pin").value;
	
	var sendM = document.getElementById("sendM");
	var sendL = document.getElementById("sendL");
	var sendS = document.getElementById("sendS");
	sendM.style.display = 'none';	
	sendL.style.display = 'block';	
	

	
	$.ajax({
		type: "POST",
		url: "members/createm/", 
		//dataType: "json",
		data: {firstname: firstname, lastname: lastname, company: company, designation: designation, email: email, phone: phone, message: message, pin: pin, },
		success: function(data){
			$("#rufusLohn").html(data);
			
		//FOR PHP
		//$NotMes = array("notification"=>"0", "message"=>"0", "cart"=>"0");
					//echo json_encode($NotMes);
		//var slf = JSON.parse(data); //if json datatype is not available
		var slf = data; //if json is datatype is available
		if(slf.ErrorNote == "none"){
			document.getElementById("sendL").style.display = 'none';	
			document.getElementById("sendS").style.display = 'block';
			document.getElementById("mMsg1").classList.add("text-success");
			document.getElementById("mMsg1").innerHTML = 'Your SMTP has been uploaded';
			$("#MsgModLi").modal('show');
        }else{
			document.getElementById("sendL").style.display = 'block';	
			document.getElementById("sendS").style.display = 'none';
			document.getElementById("mMsg1").classList.add("text-danger");
			document.getElementById("mMsg1").innerHTML = 'Error!<br>Check Your Form or Refresh the page';
			$("#MsgModLi").modal('show');
        }
			/*
			setTimeout(upup, 3000);
			function upup() {
			$("#rufusLohn").load("members/create/");
			}
			document.getElementById("<?php echo $balista; ?>").innerHTML = question.nl2br(); 
			document.getElementById("<?php echo $uamista; ?>").innerHTML = "Your Change has been Saved"; 
			*/
		}
		 
	});

}


function myTrim(x) {
return x.replace(/^\s+|\s+$/gm,'');
}

String.prototype.nl2br = function(){
    return this.replace(/\n/g, "<br />");
}
function printError(elemId, hintMsg) {
document.getElementById(elemId).innerHTML = hintMsg;
} 
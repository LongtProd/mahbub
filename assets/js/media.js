var getcoolloc = window.location.href
var currento = getcoolloc.substr(getcoolloc.lastIndexOf('/') + 1);
var myModal = '';

var teammail = ''
var teamexec = ''
var teamonTw = ''
var teamonLk = ''
var boardexname = '';
var code;

createCaptcha();


function createCaptcha() {
    var ramno = Math.floor(Math.random() * 6) + 5; 
    document.getElementById('captcha').innerHTML = "";
    var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*+=-";
    var lengthOtp = ramno;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
    var index = Math.floor(Math.random() * charsArray.length + 1); 
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
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canv);
}

teamexecutives();
function teamexecutives() {
	if(currento == "team.html" || currento.includes("team")){
		myModal = new bootstrap.Modal(document.getElementById('myModal'))
		teammail = document.querySelectorAll('.emailTeam')
		teamexec = document.querySelectorAll('.custom-mah-item-nm')
		teamonTw = document.querySelectorAll('.fa-twitter')
		teamonLk = document.querySelectorAll('.fa-linkedin')

		teammail.forEach(function (item, index, array) { 
			item.addEventListener("click", function(e) { 
				e.preventDefault();
				let modalTitle = document.getElementById('modalTitle');
				
				modalTitle.innerHTML = `Contact ${teamexec[index].innerHTML}`;
				boardexname = teamexec[index].innerHTML;
				myModal.show()
			});
		});		
	}
}



document.getElementById("form-submit").addEventListener("click", function() {
	formcare();
});
    
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
			sendformon();
		  }else{
			alert("Invalid Captcha");
				createCaptcha();
		  }
    }else{
        alert("Please Check your form and fill all neccessary fields.")
    }
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

if(currento == "team.html" || currento.includes("team")){
message = `This Message is directed to ${boardexname}


${message}`;
}
	
	var sumitter = document.getElementById("form-submit");
	sumitter.classList.remove("orange-button");
	sumitter.classList.add("green-button");
	sumitter.setAttribute("disabled", "");
	sumitter.innerHTML = 'Loading...';
	

	
	$.ajax({
		type: "POST",
		url: "https://bastestquest.000webhostapp.com/zee/", 
		dataType: "json",
		data: {firstname: firstname, lastname: lastname, company: company, designation: designation, email: email, phone: phone, message: message, pin: pin, },
		success: function(data){
			$("#rufusLohn").html(data);
			
		
		var slf = data; //if json is datatype is available
		if(slf.ErrorNote == "none"){
			alert(slf.TentMessage)
			document.getElementById("contact").reset();
			sumitter.innerHTML = 'Message Has Been Delivered.';
			
			window.location.reload();
        }else{
			alert(slf.TentMessage)
			sumitter.classList.remove("green-button");
			sumitter.classList.add("orange-button");
			sumitter.removeAttribute("disabled", "");
			sumitter.innerHTML = 'Send Message';
        }
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

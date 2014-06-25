//Bootstrap Carousel

$(document).ready(function(){
	  
	
	
	
	var inputName=	$('#firstname');
	var inputEmail= $('#Email');
	var inputPhone= $('#Phone');
	var msg= $('#area');
	
	
	inputName.blur(validateName);
	inputEmail.blur(validateEmail);
	inputPhone.blur(validatePhone);
	msg.blur(validateMsg);
	
	function validateName() { 
		var name = inputName.val();
		var regex = /^[a-zA-Z ]*$/;
		  	if (name.length === 0) {
			    alert("Please enter your Name.");
			    return ;
			} else if (!regex.test(name)) {
			    alert("Name can only contain alphabets");
			    return;
			} else if(name.length > 30) {
			  	alert("Characters beyond length");
				return ; 
			} else {
			    return;
			}
		}
	
	
	
	function validateEmail() { 
		var email = inputEmail.val();
		var regex = /^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		  	if (email.length === 0) {
			    alert("Please enter your Email-id.");
			    return ;
			} else if (!regex.test(email)) {
			    alert("Email-id cannot contain special characters except -, _, @, .");
			    return;
			} else {
			    return;
			}
		}
	
	function validatePhone() { 
		var number = inputPhone.val();
		var regex = /^(\+[0-9]{1,2}\-|\(\+[0-9]{1,2}\)|\+[0-9]{1,2}|[0-9]{2}\-|)[0-9]+$/;
		  	if (number.length === 0) {
			    alert("Please enter your Contact Number.");
			    return ;
			} else if (!regex.test(number)) {
			    alert("Name can only have digits and special characters like (, ), +, -");
			    return;
			} else if(name.length > 10) {
			  	alert("Number beyond length - 10 digits");
				return ; 
			} else {
			    return;
			}
		}

	
	
	function validateMsg(){
		   
		  var message=msg.val();
		 
		  if(message.length===0){
			  
			  alert("Input the message");
		  }
		  else if(message.length>500){
			  
			  alert("Message length Exceeded");
			  return false;
		  } 
			   
		  else {
			  return true;
		  }
	   }
	
	   
		  
	});


    
    
  	
    
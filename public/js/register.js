//only letters ,length between 3 to 10
const fnPattern=new RegExp("^[a-zA-Z]{3,10}$");
const lnPattern=new RegExp("^[a-zA-Z]{3,10}$");
const emailPattern=new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");

//wrong eg:john_doe,john,john22
const usernamePattern=new RegExp("^[a-zA-Z]+([_]?[a-zA-Z0-9])*$");
let fn,ln,username,email,password,dob,dob_formatted;

function fnValidate(){
fn.removeClass('invalid');
fn.next().removeAttr('data-error');

	if(!fnPattern.test(fn.val())){
		fn.addClass('invalid');
		fn.next().attr('data-error','Only letters allowed ,length 3-10');	
		return false;
	}
return true;
}
function lnValidate(){
ln.removeClass('invalid');
ln.next().removeAttr('data-error');
	if(!lnPattern.test(ln.val())){
		ln.addClass('invalid');
		// alert("lol");
		ln.next().attr('data-error','Only letters allowed ,length 3-10');	
		return false;
	}
return true;
}
const usernameError=' Wrong format ,Example => john_doe , john , john22 etc';
const usernameTaken='The username is already taken';

function usernameValidate(){
username.removeClass('invalid');
username.next().removeAttr('data-error');
if(!usernamePattern.test(username.val())){
	username.addClass('invalid');
	username.next().attr('data-error',usernameError);
	return false;
}
return true;
}
function passwordValidate(){
	password.removeClass('invalid');
	password.next().removeAttr('data-error');
	if(password.val().length<6||password.val().length>20){
		password.addClass('invalid');
		password.next().attr('data-error','length should between 6 to 20 ');
		return false;
	}
	return true;
}
function dobValidate(){
	dob.removeClass('invalid');
	dob.next().removeAttr('data-error');
	if(dob_formatted.val().length<10){
	dob.addClass('invalid');
	return false;
	}
	return true;
}
function emailValidate(){
	email.removeClass('invalid');
	email.next().removeAttr('data-error');
	if(!emailPattern.test(email.val())){
		email.addClass('invalid');
		email.next().attr('data-error','Please enter proper email id');
		return false;
	}
return true;
}
$(()=>{
     $('.button-collapse').sideNav({
      menuWidth: 200, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    });
    
    $('.datepicker').pickadate({
      selectMonths:true,
      selectYears:50,
      formatSubmit:'dd/mm/yyyy',
      min:[1970,00,01],
      max: [2000,11,31],
      hiddenSuffix: '_formatted',
      today: '',
      clear: 'Clear',
      close: 'Ok',
  	});

 fn=$('#reg-form input[name=first_name]');
 fn.characterCounter();
 fn.on('change',()=>{fnValidate()});

 ln=$('#reg-form input[name=last_name]');
 ln.characterCounter();
  ln.on('change',()=>{lnValidate()});

 username=$('#reg-form input[name=user_name]');
 username.on('change',()=>{usernameValidate()});

 email=$('#reg-form input[name=email_id]');
 email.on('change',()=>{emailValidate()});
password=$('#reg-form input[name=password]');
password.characterCounter();
password.on('change',()=>{passwordValidate()});
 dob=$('#reg-form input[name=dob]');
 dob_formatted=$('#reg-form input[name=dob_formatted]');


$('button#submitbtn').on('click',(e)=>{
e.preventDefault();
	 if(fnValidate()&&lnValidate()&&usernameValidate()&&emailValidate()&&passwordValidate()&&dobValidate()){			
			$.ajax({
			url:'/users/'+username.val(),
			success:(user,status,xhr)=>{
				username.addClass('invalid');
				username.next().attr('data-error',usernameTaken);
				},
			error:(xhr,status,err)=>{

				$('#reg-form').submit();
			}
			});
	 }
});

});




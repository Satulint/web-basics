'use strict';
const requiredElements= document.querySelectorAll('input[required]');
const phone=document.getElementById('phone');
const postal=document.getElementById('postal_code');
console.log(requiredElements);
function check (evt){
				evt.preventDefault();

	requiredElements.forEach( (a )=> {
			if(a.value===''){
				evt.preventDefault();
				console.log(a.name +' is empty');
			}
			const pattern=new RegExp('@');
			console.log(a.type);
			if(a.type==='email' && !pattern.test(a.value)){
				evt.preventDefault();
				console.log(a.name +' is filled incorrectly');

			} 
		}
	);
	
}
function phoneCheck(evt){
	const pattern=new RegExp(/^\+358[0-9]{5,10}$/);
	if( !pattern.test(phone.value)){
		evt.preventDefault();
		console.log(phone.name +' is filled incorrectly')
	}
}
function postalCheck(evt){
	if( postal.value!=='' && postal.value.length!=5){
		evt.preventDefault();
		console.log(postal.name +' is filled incorrectly')
	}
}
document.querySelector('form').addEventListener('submit',check);
document.querySelector('form').addEventListener('submit',phoneCheck);
document.querySelector('form').addEventListener('submit',postalCheck);



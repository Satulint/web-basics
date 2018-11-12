'use strict';

// HTML contains element 'message'. This is used to show the server's response
// Select it and save it as a variable/object
const message= document.querySelector('#message');
// make function 'upload' which
// - prevents the form from sending
// - writes 'Upload in progress...' into 'message' element
// - selects the file input field
// - makes FormData -object and adds the file selected byt the user into the object
// - send the file to the same url as in task a by using fetch -method
// - when file upload is complete, writes server response to 'message' element
// function ends
function upload(evt){
	evt.preventDefault();
	message.innerHTML('Upload in progress...');
	const file=document.querySelector('input[type="file"]');
	const data = new FormData();
	data.append('fileToUpload', input.files[0]);
	const settings = {
            method: 'POST',
            // credentials: 'same-origin', 
            body: data
        };
	fetch('http://10.114.32.95/node/upload/', settings).then((response) => {
        return response;
    }).then((response) => {
        message.innerHTML(response);
    });
}
const submitEvent=querySelector('input[type="submit"]');
submitEvent.addEventListener("click",upload);
// make an event listener which calls upload function when the form is submitted

// Create function 'showImages' which
// adds the loaded HTML content to <ul> element
fetch('images.html')
	.then(function(response) {console.log(response); return response.text();})
	.then(function(elem){ showImages(elem);
	console.log(elem);});

	function showImages(a){
	const myUl= document.querySelector('ul');
	myUl.innerHTML=a;
}
/*
const showImage = (html) => {
	document.querySelector('ul').innerHTML(html);
};

fetch('images.html').then((response)=>{
	return response.text();
}).then((html) => {
	showImages(html);
});

*/
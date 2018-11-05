// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// After the loop print the HTML into <ul> element using innerHTML.
/*let myArr= new Array();
function showImage(){
	fetch('ímages.json')
	.then(function (resp){
		return resp.json();
	})
	.then(function(a){
		let myText='';i
		a.forEach{i => console.log(1);}
	})
}
*/

const showImages = (images) => {
	console.log(images);
	images.forEach((image) => {
	document.querySelector('ul').innerHTML += `<li>
    <figure>
        <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
        <figcaption>
            <h3>${image.mediaTitle}</h3>
        </figcaption>
    </figure>
</li>`;
	});
	/*for(let i = 0; i < images.lenght; i= ++){
		console.log(images[i]);
	}
	// OR:
	document.querySelector('ul').innerHTML = images.map((image) => {
		return `something....`;
	}*/
};

fetch('images.json').then((response)=>{
	return response.json();
}).then((json) => {
	showImages(json);
});

/*
const showImages = (images) => {
	document.querySelector('ul').innerHTML = images.map((image) => {
	return `<li>
			<figure>
				<a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
				<figcaption>
					<h3>${image.mediaTitle}</h3>
				</figcaption>
			</figure>
		</li>`;
	
	}
}

*/

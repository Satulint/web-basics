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
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

fetch('images.json').then((response)=>{
	return response.json();
}).then((json) => {
	showImages(json);
});

const showImages = (images) => {
	console.log(images);
	images.forEach((image) => {
		const title= document.createElement('h3');
		title.innerHTML = image.mediaTitle;
		const figcaption= document.createElement('figcaption');
		figcaption.appendChild(title);
		const a= document.createElement('a');
		const img= document.createElement('img');
		img.setAttribute('src',`img/thumbs/${image.mediaThumb}`);
		a.setAttribute('href',`img/original/${image.mediaUrl}`);
		a.appendChild(img);
		const figure= document.createElement('figure');
		const li= document.createElement('li');
		figure.appendChild(a);
		figure.appendChild(figcaption);
		li.appendChild(figure);
		const ul= document.querySelector('ul');
		ul.appendChild(li);
	});
}
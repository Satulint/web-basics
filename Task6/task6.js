const strawberry= document.getElementById('berry');
console.log(strawberry);
console.log('I found the berry: '+strawberry.innerHTML);
strawberry.style.backgroundColor= "red";

const orange= document.querySelector('li[data-foodtype="squishy"]');
console.log(orange);
console.log('I found the fruit: '+orange.innerHTML);
orange.style.backgroundColor= "orange";

const collection= document.getElementsByTagName('li');
console.log(collection);

console.log('Using the for loop here: ');
for(i=0; i<collection.length;i++){
	const el=collection[i];
	console.log(el.innerHTML);
	if(el.innerHTML=="Pear"){
		el.style.backgroundColor="Green";
	}
	el.style.width="100px";
	
}
const ul=document.querySelector('.fruits');
ul.style.listStyleType="none";

const nodelist= document.querySelectorAll('li');
console.log(nodelist);

console.log('Using forEach here: ');
nodelist.forEach(li =>{
	console.log(li.innerHTML);
	li.style.border="solid black";
});
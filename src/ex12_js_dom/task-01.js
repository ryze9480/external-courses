const btnLeft= document.querySelector(".left-button");
const btnRight= document.querySelector(".right-button");
let images= ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg']
let i=0;
let image=document.querySelector("img");
image.setAttribute("src",images[i]);

btnLeft.onclick= function(){
	i--;
	if(i<0){	
		i=images.length-1;
	}
	image.setAttribute("src",images[i]);
};
btnRight.onclick= function(){
	i++;
	if(i>=images.length){
		i=0;
	}
	image.setAttribute("src",images[i]);
}

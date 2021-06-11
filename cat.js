function genCat(){
  var images = document.getElementById('images');
  var image=document.createElement('img');
  image.style.margin ="20px 20px";
  image.style.width = "200px";
  image.style.height="200px";
  image.src="https://cdn2.thecatapi.com/images/114.jpg";
  images.appendChild(image);
  console.log(image);

}
function buy(){
  images.lastElementChild.remove();
}
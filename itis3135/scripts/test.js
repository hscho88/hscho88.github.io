function loadImage(){
    var image =document.getElementById('introImage').files[0];
    var imageUrl=URL.createObjectURL(image);

    var text="<img src=\""+imageUrl +"\">";

    document.getElementById('loadImage').innerHTML=text;
}
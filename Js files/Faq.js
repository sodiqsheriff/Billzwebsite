function toggleContent(){
    var content= document.getElementById('content');
    var icon = document.getElementById('icon');

    if (content.style.display === 'none'){
        content.style.display = 'block';
        icon.src = './images/vector2.png';
    }
    else{
        content.style.display = 'none';
        icon.src = './images/vector.png';
    }
}
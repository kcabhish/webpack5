import Goku from './image/goku.jpg';

function addImage() {
    const img = document.createElement('img');
    img.alt = "goku";
    img.width = 300;
    img.src = Goku;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;
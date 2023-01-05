import Goku from './image/goku.jpg';
import altText from './image/altTextGoku.txt';

function addImage() {
    const img = document.createElement('img');
    img.alt = altText;
    img.width = 300;
    img.src = Goku;
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;
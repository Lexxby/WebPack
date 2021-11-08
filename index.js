import './index.css';
import JS_IMAGE from './assets/js-img.jpg';

console.log(`Hello World!`);
const jsImage = document.createElement('img');
jsImage.className = 'firstImage';
jsImage.src = JS_IMAGE;

const h1 = document.createElement('h1');
h1.textContent = 'I Love JS';

document.body.append(h1);
document.body.append(jsImage);

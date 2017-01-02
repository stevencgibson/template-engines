const main = document.querySelector('main');
const h1 = document.querySelector('h1');
const p = document.createElement('p');
p.innerText = `${data.length} athletes found`;
main.insertBefore(p, h1.nextSibling);

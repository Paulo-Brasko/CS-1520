let myString = `<h1> Some text here </h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptates quisquam, excepturi quia unde minima quos quibusdam! Fugit accusantium, iure temporibus voluptatibus sunt possimus dolorum atque sed iste eligendi<p>
               <img src="https://source.unsplash.com/random/400x400" /> `;

let btnText = document.getElementById("btnText");
let btnHtml = document.getElementById("btnHtml");
let content = document.getElementsByClassName("content");

console.log(typeof btnText);
console.log(typeof content);

btnText.addEventListener('click', () => content[0].innerText = myString);
btnHtml.addEventListener('click', () => content[0].innerHTML = myString);

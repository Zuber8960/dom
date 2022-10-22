// console.dir(document.title);
document.title = 123;
console.dir(document.title)
// console.log(document.head);
console.log(document.all[10]);
document.all[10].textContent="Hello";
console.log(document.forms[0])




// console.log(document.getElementById("header-title"))
console.log(document.getElementById('header-title'));
document.getElementById('header-title').textContent="Hi";
var headerMain=document.getElementById('main-header');

console.log(document.getElementById('header-title'));
var headerTital=document.getElementById('header-title');
headerTital.innerHTML='<h4>hello zuber</h4>';
 //Q-3) Make the title have a black border as the youtuber does
headerMain.style.borderBottom='solid 3px #000'

//Q-3) Now make ADD ITEM bold and chage the font color to greeen
let items=document.getElementsByClassName('list-group-item');
console.log(items);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight="bold";
// items[1].style.backgroundColor='green';


items[2].style.backgroundColor="green";
for(let i=0; i<items.length; i++){
    items[i].style.fontWeight="bold";
}

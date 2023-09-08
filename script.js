let Hellobtn = document.querySelector('button');
Hellobtn.addEventListener('click', inputmsg);

let p = document.querySelector('p');

function inputmsg() {
    let name = prompt('Enter Name of Student');
    Hellobtn.textContent = 'Roll No. 1:' + name; 
    
    p.textContent = name; 
}

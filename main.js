let button = document.querySelector('button')
let table = document.querySelector('table')
const fetchtodo = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
   data.forEach((todo) => {
//   console.log(todo);
let tr = document.createElement('tr')
let td1 = document.createElement('td')
let td2 = document.createElement('td')
let td3 = document.createElement('td')

td1.innerText= todo.name
td2.innerText= todo.email
td3.innerText= todo.phone

tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
    
table.appendChild(tr);

});
};

// fetchtodo();

button.addEventListener('click', fetchtodo);


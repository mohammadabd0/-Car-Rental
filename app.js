'use strict'
let formEl = document.getElementById('formId')
let tableEl = document.getElementById('table')

let orders =[];
function Cars(image,custmoer,price, model){
    this.image= image;
    this.custmoer = custmoer;
    this.price =getRandomInt(1000,10000)
    this.model = model;
    orders.push(this);

}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }


function makeorder(event){
event.preventDefault();
let image = event.target.image.value;
let custmoer = event.target.custmoer.value;

let obj = new Cars(image,custmoer)
saveTolocalStorge();
obj.render();
console.log(orders);

}
formEl.addEventListener('submit',makeorder)


function createTableHeader(){
    let row = document.createElement('tr');
    tableEl.appendChild(row)

    let thEl1 = document.createElement('th')
    row.appendChild(thEl1);
    thEl1.textContent = `order image`

    let thEl2 = document.createElement('th')
    row.appendChild(thEl2);
    thEl2.textContent = `order details`

}
createTableHeader();

Cars.prototype.render = function(){
    let row = document.createElement('tr');
    tableEl.appendChild(row);
    
    let tdEl2 = document.createElement('td');
    let imag = document.createElement('img');
    imag.setAttribute("style","width: 200px")
    imag.setAttribute('src',this.image);
    tdEl2.appendChild(imag);
    row.appendChild(tdEl2);

    let tdEl1 = document.createElement('td');
    row.appendChild(tdEl1);
    tdEl1.textContent=this.custmoer;

  

}

function saveTolocalStorge(){
    let data = JSON.stringify(orders);
    localStorage.setItem('allcar',data)
}

function  getFromLocalStorge(){
    let read = localStorage.getItem('allcar')
    let normalobj = JSON.parse(read);
    if(normalobj){
        for(let i=0; i<normalobj.length;i++){
            new Cars(normalobj[i].image,normalobj[i].custmoer)
            orders[i].render();
            console.log(normalobj);
        }
    }

}
getFromLocalStorge();
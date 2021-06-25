'use strict'

let hoursOfOpp = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

const seattle = {
  name: 'seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  hourSales: [],
}
 

const tokyo = {
  name: 'tokyo',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  hourSales: [],
}

const dubai = { 
  name: 'dubai',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  hourSales: [],
}

const paris = {
  name: 'paris',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  hourSales: [],
}

const lima = {
  name: 'lima',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  hourSales: [],
}

// --------Global Function
function getRandomCust(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}

function hourSales(avgSale, randomCust) {
  return Math.floor(avgSale * randomCust)
}

function eachHour(object) {
  for (let i = 0; i < hoursOfOpp.length; i++) {
    let randomNum = getRandomCust(object.minCust, object.maxCust);
    let sales = hourSales(object.avgSale, randomNum);
    object.hourSales.push(sales);
  
    
  }

}

let stores = [seattle, tokyo, dubai, paris, lima];


let dataElem = document.getElementById("data");



function dataChart(thisStore) {
  let sectionElem = document.createElement("section");
  dataElem.appendChild(sectionElem);


  let h2Elem = document.createElement("h2");
  h2Elem.textContent = thisStore.name;
  sectionElem.appendChild(h2Elem);

  let ulElem = document.createElement("ul");
  sectionElem.appendChild(ulElem);


  for (let i = 0; i < hoursOfOpp.length; i++) {
    let liElem = document.createElement("li");
    liElem.textContent = hoursOfOpp[i] + ":  " + thisStore.hourSales[i];
    ulElem.appendChild(liElem);
  }

}

for (let i = 0; i < stores.length; i++) {
  let thisStore = stores[i];
  eachHour(thisStore);
  dataChart(thisStore);

}
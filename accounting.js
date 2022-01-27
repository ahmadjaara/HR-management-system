let mysection =document.getElementById('table');
let divele1=document.createElement('div');
mysection.appendChild(divele1);

let table =document.createElement('table');
divele1.appendChild(table);
let trEle1 =document.createElement('tr');
table.appendChild(trEle1);

let thEle1 =document.createElement('th');
trEle1.appendChild(thEle1);
thEle1.textContent= "Department" ;

let thEle2 =document.createElement('th');
trEle1.appendChild(thEle2);
thEle2.textContent= "#no of employee" ;

let thEle3 =document.createElement('th');
trEle1.appendChild(thEle3);
thEle3.textContent= "Total Salary" ;

let thEle4 =document.createElement('th');
trEle1.appendChild(thEle4);
thEle4.textContent= "Average" ;


let trEle2 =document.createElement('tr');
table.appendChild(trEle2);

let tdEle1 =document.createElement('td');
trEle2.appendChild(tdEle1);
tdEle1.textContent= "Administration" ;

let trEle3 =document.createElement('tr');
table.appendChild(trEle3);

let tdEle2 =document.createElement('td');
trEle3.appendChild(tdEle2);
tdEle2.textContent= "Marketing" ;

let trEle4 =document.createElement('tr');
table.appendChild(trEle4);

let tdEle3 =document.createElement('td');
trEle4.appendChild(tdEle3);
tdEle3.textContent= "Development" ;

let trEle5 =document.createElement('tr');
table.appendChild(trEle5);

let tdEle4 =document.createElement('td');
trEle5.appendChild(tdEle4);
tdEle4.textContent= "Finance" ;











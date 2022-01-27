function HrMangment (id,fullName,img,department,level){
    this.id=id;
    this.fullName=fullName;
    this.img= img;
    this.department=department;
    this.level=level;
    
    //push to external array 
    HrMangment.exMemory.push(this);//this mean any property 

    // console.log(this)
};

//initialization of array memory 
HrMangment.exMemory=[];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  };
//"/home/ahmad/HR-management-system/imgs"
//picture name shouldnt have a space in side it 
const employ0 = new HrMangment(1000,"Ghazi Samer",`./imgs/Ghazi.jpg`,["Administration"],["Senior"]);
const employ1 = new HrMangment(1001,"Lana Ali",`./imgs/Lana.jpg`,["Finance"],["Senior"]);
const employ2 = new HrMangment(1002,"Tamara Ayoub",`./imgs/Lana.jpg`,["Marketing"],["Senior"]);
const employ3 = new HrMangment(1003,"Safi Walid",`./imgs/Safi.jpg`,["Administration"],["Mid-Senior"]);
const employ4 = new HrMangment(1004,"Omar Zaid",`./imgs/Omar.jpg`,["Development"],["Senior"]);
const employ5 = new HrMangment(1005,"Rana Saleh",`./imgs/Rana.jpg`,["Development"],["Junior"]);
const employ6 = new HrMangment(1006,"Hadi Ahmad",`./imgs/Hadi.jpg`,["Finance"],["Mid-Senior"]);

HrMangment.prototype.Salary=function(){

    let salary =0;
    let net=0;
    let tax=0;
    switch(true){
       case (this.level =="Senior"):
           salary= getRandomInt(1500,2000);
           
           break;
       
       case(this.level =="Mid-Senior"):
       salary= getRandomInt(1000,1500);
      
       break;
       
       case(this.level =="Junior"):
       salary= getRandomInt(500,1000);
       
       break;
   }

//    return salary; no need for return inside the prototype just put the property after this
this.salary= salary -salary*0.075;//here i tell the constructer to put a salary property inside each object "this.property"
}

// HrMangment.prototype.net=function(){

// tax =this.Salary()*.075;
// net=this.Salary() - tax;
// return net ;
// }

employ0.Salary();
employ1.Salary();
employ2.Salary();
employ3.Salary();
employ4.Salary();
employ5.Salary();
employ6.Salary();

let noEmpAdministaration=0;
let noEmpMarketing=0;
let noEmpDevelopment=0;
let noEmpFinance=0;
let AdtotalSalary=0;
let MrtotalSalary=0;
let DetotalSalary=0;
let FntotalSalary=0;

    for (let i=0;i<HrMangment.exMemory.length;i++){
   let obj=HrMangment.exMemory[i]
    if(obj.department=="Administration"){
        noEmpAdministaration+=1;
        AdtotalSalary+=Math.round(obj.salary);
    }
    else if(obj.department=="Finance"){
        noEmpFinance+=1;
        FntotalSalary+=Math.round(obj.salary);
    }
    else if (obj.department=="Marketing"){
        noEmpMarketing+=1;
        MrtotalSalary+=Math.round(obj.salary);        
    }
    else if(obj.department=="Development"){
        noEmpDevelopment+=1;
        DetotalSalary+=Math.round(obj.salary);
    }
}

let avgDe =Math.round(DetotalSalary/noEmpDevelopment);
let avgMr=Math.round(MrtotalSalary/noEmpMarketing);
let avgFn=Math.round(FntotalSalary/noEmpFinance);
let avgAd=Math.round(AdtotalSalary/noEmpAdministaration);

if(noEmpDevelopment==0){
    avgDe=0;
}
else if(noEmpAdministaration==0){
    avgAd=0;
}
else if(noEmpFinance==0){
    avgFn=0;
}
else if(noEmpMarketing==0){
    avgMr=0;
}

let totalnoEmployee =noEmpFinance+noEmpMarketing+noEmpDevelopment+noEmpAdministaration;
let totalsalary =DetotalSalary+MrtotalSalary+AdtotalSalary+FntotalSalary;
let averageTotalSalary=Math.round(totalsalary/totalnoEmployee);


let mysection =document.getElementById('table');
//div element container 
let divele1=document.createElement('div');
mysection.appendChild(divele1);

let table =document.createElement('table');
divele1.appendChild(table);

//first row heade content 
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

///second row adminstration
let trEle2 =document.createElement('tr');
table.appendChild(trEle2);

let tdEle1 =document.createElement('td');
trEle2.appendChild(tdEle1);
tdEle1.textContent= "Administration" ;

///total number
let tdEle2tr2 =document.createElement('td');
trEle2.appendChild(tdEle2tr2);
tdEle2tr2.innerHTML= noEmpAdministaration;
///total salary
let tdEle3tr2 =document.createElement('td');
trEle2.appendChild(tdEle3tr2);
tdEle3tr2.textContent=AdtotalSalary;
///average
let tdEle4tr2 =document.createElement('td');
trEle2.appendChild(tdEle4tr2);
tdEle4tr2.textContent= avgAd ;

///third row marketing 
let trEle3 =document.createElement('tr');
table.appendChild(trEle3);

let tdEle2 =document.createElement('td');
trEle3.appendChild(tdEle2);
tdEle2.textContent= "Marketing" ;

///total number
let tdEle2tr3 =document.createElement('td');
trEle3.appendChild(tdEle2tr3);
tdEle2tr3.innerHTML= noEmpMarketing;
///total salary
let tdEle3tr3 =document.createElement('td');
trEle3.appendChild(tdEle3tr3);
tdEle3tr3.innerHTML= MrtotalSalary;
///average
let tdEle4tr3 =document.createElement('td');
trEle3.appendChild(tdEle4tr3);
tdEle4tr3.innerHTML= avgMr;



///forth row development 
let trEle4 =document.createElement('tr');
table.appendChild(trEle4);

let tdEle3 =document.createElement('td');
trEle4.appendChild(tdEle3);
tdEle3.textContent= "Development" ;


 //total number
let tdEle2tr4 =document.createElement('td');
trEle4.appendChild(tdEle2tr4);
tdEle2tr4.innerHTML= noEmpDevelopment;
///total salary
let tdEle3tr4 =document.createElement('td');
trEle4.appendChild(tdEle3tr4);
tdEle3tr4.innerHTML=DetotalSalary;

///average
let tdEle4tr4 =document.createElement('td');
trEle4.appendChild(tdEle4tr4);
tdEle4tr4.innerHTML= avgDe;
 






//5th row finance 
let trEle5 =document.createElement('tr');
table.appendChild(trEle5);

let tdEle4 =document.createElement('td');
trEle5.appendChild(tdEle4);
tdEle4.textContent= "Finance" ;

 //total number
let tdEle2tr5 =document.createElement('td');
trEle5.appendChild(tdEle2tr5);
tdEle2tr5.innerHTML= noEmpFinance;
///total salary
let tdEle3tr5 =document.createElement('td');
trEle5.appendChild(tdEle3tr5);
tdEle3tr5.innerHTML=FntotalSalary;

///average
let tdEle4tr5 =document.createElement('td');
trEle5.appendChild(tdEle4tr5);
tdEle4tr5.innerHTML= avgFn;
 



//footer row 
let trEle6 =document.createElement('tr');
table.appendChild(trEle6);

let tdEle5 =document.createElement('td');
trEle6.appendChild(tdEle5);
tdEle5.textContent= "Total" ;

let tdEle6 =document.createElement('td');
trEle6.appendChild(tdEle6);
tdEle6.textContent= "Total number of employees" 

let tdEle7 =document.createElement('td');
trEle6.appendChild(tdEle7);
tdEle7.textContent= "Total salary for all departments" ;

let tdEle8 =document.createElement('td');
trEle6.appendChild(tdEle8);
tdEle8.textContent= "Average salary for all departments" ;
///output of footer 
let trEle7=document.createElement('tr')
table.appendChild(trEle7);

let reslt0 =document.createElement('td');
trEle7.appendChild(reslt0);
reslt0.textContent= "";


let reslt1 =document.createElement('td');
trEle7.appendChild(reslt1);
reslt1.textContent= totalnoEmployee;

let reslt2 =document.createElement('td');
trEle7.appendChild(reslt2);
reslt2.textContent=totalsalary;

let reslt3 =document.createElement('td');
trEle7.appendChild(reslt3);
reslt3.textContent= averageTotalSalary;



















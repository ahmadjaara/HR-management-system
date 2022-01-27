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


 function render(){
    //document.write(`<p><h2>"${this.fullName}" is an employee in our companey and its salary is : ${this.Salary()} $$</h2> </p>`)
//    let div=document.createElement('div');
//mysection.appendChild(div);
//   let ele =document.createElement('p') ; 
//   div.appendChild(ele);
//   ele.textContent=`${this.fullName} ${this.id} ${this.level} ${this.salary} ${this.department}`;


let mysection =document.getElementById("hi");

for(let i =0;i<HrMangment.exMemory.length;i++){
    
    let memory = HrMangment.exMemory[i];
 let divElem1 = document.createElement('div');
  
 mysection.appendChild(divElem1);

 let img =document.createElement('img');
   divElem1.appendChild(img);
   img.setAttribute('src',memory.img);


   let pEle =document.createElement('p');
   divElem1.append(pEle);
   pEle.textContent=`name:${memory.fullName} -ID:${memory.id}`;

   let pEle2=document.createElement('p')
   divElem1.append(pEle2);
   pEle2.textContent=`Department:${memory.department}-Level:${memory.level}`;

   let pEle3=document.createElement('p');
   divElem1.appendChild(pEle3);
   pEle3.textContent=`${memory.salary}`;
//    console.log("render")
}
  
}
render();

// employ0.render();
// employ1.render();
// employ2.render();
// employ3.render();
// employ4.render();
// employ5.render();
// employ6.render();
/**
HrMangment.prototype.render =function(){
    //document.write(`<p><h2>"${this.fullName}" is an employee in our companey and its salary is : ${this.Salary()} $$</h2> </p>`)
//    let div=document.createElement('div');
let mysection =document.getElementById("hi");

//mysection.appendChild(div);
//   let ele =document.createElement('p') ; 
//   div.appendChild(ele);
//   ele.textContent=`${this.fullName} ${this.id} ${this.level} ${this.salary} ${this.department}`;

  let divElem1 = document.createElement('div');
  
 mysection.appendChild(divElem1);

 let img =document.createElement('img');
   divElem1.appendChild(img);
   img.setAttribute('src',this.img);


   let pEle =document.createElement('p');
   divElem1.append(pEle);
   pEle.textContent=`name:${this.fullName} -ID:${this.id}`;

   let pEle2=document.createElement('p')
   divElem1.append(pEle2);
   pEle2.textContent=`Department:${this.department}-Level:${this.level}`;

   let pEle3=document.createElement('p');
   divElem1.appendChild(pEle3);
   pEle3.textContent=`${this.salary}`;
//    console.log("render")

}
 */ 


////html event 
function func(){
    let d =new Date().getTime().toString();
    let id = d.slice(d.length-4);
    return id;
}
let addEmploy = document.getElementById("addEmploy");

addEmploy.addEventListener('submit',addEmployInfo);

function addEmployInfo (event){
    event.preventDefault();
    let FullName =event.target.fullName.value;
    let Department=event.target.select.value;
    let Image=event.target.Imageurl.value ;
    let level =event.target.selectLe.value;
    console.log(FullName,Department,Image);


    const employee = new HrMangment(func(),FullName,Image,Department,level);
    employee.Salary();
    render();
    settimgItem();
    console.log(employee);
}

//local storage 
function settimgItem(){
    let data= JSON.stringify(HrMangment.exMemory);//convert obj to json 
    localStorage.setItem('employee',data);
};
//settimgItem();//inside the event
//get data
function gettingInfo(){
let stringObj =localStorage.getItem('employee');
let parsObj =JSON.parse(stringObj);//CONVERT json to obj

if (parsObj!== null){
    HrMangment.exMemory =parsObj;
}
render();

}

gettingInfo();

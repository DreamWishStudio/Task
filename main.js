const inputbox1 = document.getElementById("input-box1")
const listcontainer1 = document.getElementById("list-container1")
const inputbox2 = document.getElementById("input-box2")
const listcontainer2 = document.getElementById("list-container2")
const inputbox3 = document.getElementById("input-box3")
const listcontainer3 = document.getElementById("list-container3")
const btn = document.querySelector("span");

function addtask1(){
    if(inputbox1.value === ''){
        alert('write somthing.');
    }
    else{
        let li = document.createElement("div");
        li.innerHTML = inputbox1.value;
        li.className = "task";
        listcontainer1.appendChild(li);
        let span = document.createElement('span');
        span.className = "material-symbols-outlined";
        span.innerHTML = 'close';
        li.appendChild(span);
    }
    inputbox1.value = "";
    savedata1();
}

function addtask2(){
    if(inputbox2.value === ''){
        alert('write somthing.');
    }
    else{
        let li = document.createElement("div");
        li.innerHTML = inputbox2.value;
        li.className = "task";
        listcontainer2.appendChild(li);
        let span = document.createElement('span');
        span.className = "material-symbols-outlined";
        span.innerHTML = 'close';
        li.appendChild(span);
    }
    inputbox2.value = "";
    savedata2();
}

function addtask3(){
    if(inputbox3.value === ''){
        alert('write somthing.');
    }
    else{
        let li = document.createElement("div");
        li.innerHTML = inputbox3.value;
        li.className = "task";
        listcontainer3.appendChild(li);
        let span = document.createElement('span');
        span.className = "material-symbols-outlined";
        span.innerHTML = 'close';
        li.appendChild(span);
    }
    inputbox3.value = "";
    savedata3();
}
//this will remove the div tags
listcontainer1.addEventListener('click',function(e){
if(e.target.tagName === "DIV"){
    e.target.classList.toggle("checked");
    savedata1();
}
else if(e.target.tagName === "SPAN"){

e.target.parentElement.remove();
savedata1();
}
},false);

listcontainer2.addEventListener('click',function(e){
    if(e.target.tagName === "DIV"){
        e.target.classList.toggle("checked");
        savedata2();
    }
    else if(e.target.tagName === "SPAN"){
    
    e.target.parentElement.remove();
    savedata2();
    }
    },false);

    listcontainer3.addEventListener('click',function(e){
        if(e.target.tagName === "DIV"){
            e.target.classList.toggle("checked");
            savedata3();
        }
        else if(e.target.tagName === "SPAN"){
        
        e.target.parentElement.remove();
        savedata3();
        }
        },false);




function savedata1(){
    localStorage.setItem("data1",listcontainer1.innerHTML);
}

function showdata1(){
    listcontainer1.innerHTML = localStorage.getItem("data1");
}

function savedata2(){
    localStorage.setItem("data2",listcontainer2.innerHTML);
}

function showdata2(){
    listcontainer2.innerHTML = localStorage.getItem("data2");
}

function savedata3(){
    localStorage.setItem("data3",listcontainer3.innerHTML);
}

function showdata3(){
    listcontainer3.innerHTML = localStorage.getItem("data3");
}
showdata1();
showdata2();
showdata3();
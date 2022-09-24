// const text  = document.querySelector(".title");
// // const page  = document.querySelector(".page");
// const changeColor =document.querySelector(".changeColor");

// // text.style.backgroundColor="blue";
// // text.classList.add("change");
// // text.classList.remove("change");
// changeColor.addEventListener('click', function() {
//     // text.classList.add("change");    
//     // page.classList.toggle("bod");    
//     text.classList.toggle("change");    
// })
const userList = document.querySelector('.name-list');
const listInput=document.querySelector(".list-input");
const addBtn = document.querySelector(".addBtn");

// for(user of userList){
//     user.addEventListener('click', function(){
//         this.style.color="orange";
//     })
// }

addBtn.addEventListener('click', function(){
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);
    newLi.appendChild(liContent);
    userList.appendChild(newLi);

})

// git remote add origin https://github.com/Coding-Ivan/dom_manipulation.git
// git branch -M main
// git push -u origin main
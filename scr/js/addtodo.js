'use strict'

document.addEventListener('DOMContentLoaded',function(){
    "use strict"
  
//this is the todo listing component
let lists = document.querySelector('.content-plate ul');
// print(lists);  

// instatiate the add todo form
const entryForm = document.forms[2];
       // print(entryForm);

// set todays date
let time = new Date();
let date = `${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()}`;
// print(date);

entryForm.addEventListener('submit',function(e){
           e.preventDefault();
          
        // instatiate the todo input and its value to value  
           let addtodo = entryForm.querySelector('.addtodo');
       
        let value = addtodo.value;
           // print(value);
        if(value != ''){

        //creating li and div elements
           let li = document.createElement('li');
           let div = document.createElement('div');
           let div2 = document.createElement('div');
        
        //add classes to elements
            div.classList.add('date');
            div2.classList.add('todo-title');
    
        //asign values to elements
            div.textContent = date;
            div2.textContent  = value;

        // append the divs to the li element
            li.appendChild(div);
            li.appendChild(div2);
            
            // print(li);
            lists.appendChild(li);

        // set input value to null
            entryForm.querySelector('.addtodo').value = '';
            } else alert("Todo can not be empty!!!!!!!!!");
       })
})

// summarise the console function
function print(text) {
    return console.log(text);
}
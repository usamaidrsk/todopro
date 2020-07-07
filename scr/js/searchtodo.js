"use strict"
document.addEventListener('DOMContentLoaded',function(){
    "use strict"
    // summarise the console function
    const print = text => console.log(text);

const lists = document.querySelector('.content-plate ul');
// print(lists);
 
const searchform = document.forms[0];

searchform.addEventListener('keyup',function(event){
                event.preventDefault();

            //capture search input and convert it to lower case
                let searchval = searchform.querySelector('.search').value.toLowerCase();
                // print(searchval);

            //obtain array from the ul li node list
                let listarr = Array.from(lists.children);
            
            // test the index of the searchval in every todo-title and set dsplay to none for those with no relative value 
                listarr.forEach(function(list){
                    if(list.querySelector('.todo-title').textContent.toLowerCase().indexOf(searchval) == -1){
                        list.style.display = 'none';
                    } else list.style.display = 'block';
                })
         })
searchform.addEventListener('submit', e => e.preventDefault());
})
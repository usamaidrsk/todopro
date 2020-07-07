"use srict"
document.addEventListener('DOMContentLoaded',function(){
    // "use strict"

// instantiate the ul to lists
let lists = document.querySelector('ul');
// print(lists);
// set todays date
let time = new Date();
let date = `${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()}`;

// add event to the ul component
lists.addEventListener('click',function(event){
    
    // instantiate the ul to lists
    let lists = document.querySelector('ul');

    // instatiate the edit card
    let editcard = document.querySelector('.editboard');

    if(event.target.className == 'date' || event.target.className == 'todo-title'){
            // print(event.target)

            let component = event.target.closest('li');
            // print(component);
                    
            //show the edit board and hide the todo listing
            editcard.style.display = 'block';
            lists.style.display = 'none';
                                
            //hide the add todo form
            document.forms[2].style.display = 'none';
                                    
            //change color of the content-plate
            document.querySelector('.content-plate').style.backgroundColor = 'rgb(223, 196, 196)';
    
            // instantiate the editing form
            let editform = document.forms[1];
                                    
            //set default inputs
            // print(component.lastElementChild.textContent);
            editform.querySelector('.todotitle').value = component.lastElementChild.textContent;
            editform.querySelector('.tdysdate').value = component.querySelector('.date').textContent;
                    
            //add eventlister to editcard to allow delete and edit
                editcard.addEventListener('click',function(e){    
                    if(e.target.className == 'delete'){
                        // print(e.target);
                                        
                        // delete the component from the todo list
                        lists.removeChild(component);
                                        
                        // hide the editoard and show the todo lists
                        editcard.style.display = 'none';
                        lists.style.display = 'block';
    
                        //change back to white background
                        document.querySelector('.content-plate').style.backgroundColor = 'white';
    
                        //show the add todo form
                        document.forms[2].style.display = 'block';
      
                        }
                    else if(e.target.className == 'edit'){
                        // print(e.target);
    
                        editform.querySelector('.tdysdate').value = date;

                        // hide the delete and edit buttons
                        editcard.querySelector('.edit').style.display = "none";
                        editcard.querySelector('.delete').style.display = "none";
    
                        // show the save and cancel buttons
                        editcard.querySelector('.save').style.display = "inline";
                        editcard.querySelector('.cancel').style.display = "inline";
    
                        //  enable input on the todo title
                        editform.querySelector('.todotitle').removeAttribute('disabled')
    
                        editform.addEventListener('click',function(e){
                            if(e.target.className == "save"){
                                //  print(e.target);   
    
                                // set the todo-title to the updated content
                                component.querySelector('.date').textContent = date;
                                
                                if(editform.querySelector('.todotitle').value != ''){
                                    component.lastElementChild.textContent = editform.querySelector('.todotitle').value;
                                } else {
                                    component.lastElementChild.textContent = component.lastElementChild.textContent
                                }

                                // hide the editoard and show the todo lists
                                editcard.style.display = 'none';
                                lists.style.display = 'block';
    
                                //hide the save and cancel
                                editcard.querySelector('.save').style.display = "none";
                                editcard.querySelector('.cancel').style.display = "none";
    
                                //show the delete and edit
                                editcard.querySelector('.edit').style.display = "inline";
                                editcard.querySelector('.delete').style.display = "inline";
    
                                //change back to white background
                                document.querySelector('.content-plate').style.backgroundColor = 'white';
    
                                //show the add todo form
                                document.forms[2].style.display = 'block';
                                    
                                        
                                //  disable input on the todo title
                                editform.querySelector('.todotitle').setAttribute('disabled','true')
                            } 
                            else if(e.target.className == "cancel"){
                                //change  nothing
                                        
                                //hide the save and cancel
                                editcard.querySelector('.save').style.display = "none";
                                editcard.querySelector('.cancel').style.display = "none";
    
                                //show the delete and edit
                                editcard.querySelector('.edit').style.display = "inline";
                                editcard.querySelector('.delete').style.display = "inline";
    
                                // hide the editoard and show the todo lists
                                editcard.style.display = 'none';
                                lists.style.display = 'block';
    
                                //change back to white background
                                document.querySelector('.content-plate').style.backgroundColor = 'white';
    
                                //show the add todo form
                                document.forms[2].style.display = 'block';
    
                                //  disable input on the todo title
                                editform.querySelector('.todotitle').setAttribute('disabled','true')
                            }
                        }
                                    
                )}                       
        })
    }
})
})

// summarise the console function
function print(text) {
    return console.log(text);
}


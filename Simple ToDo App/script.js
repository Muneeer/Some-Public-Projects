const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
const formm=document.getElementById("inserttodo");

var todoListValue;
var itemcount=0;
var itemUnchecked=0;

function newTodo() {

  //check if there is input form already exist 
  if(document.getElementsByTagName("input").length>0)
  {
  
    //if it does check if its display its its shown hide it otherwise display it
    if(todoListValue.style.display==="block"){
      todoListValue.style.display="none"
    }
    else{
      todoListValue.style.display = "block"
    }
  }
  else{
    //if there is no form at all create a new form
      createForm();
  }

  
}



function createForm(){

  var y = document.createElement("input");
  y.style.display = "block";
  y.setAttribute("type", "text");
  y.setAttribute("placeholder", "Insert TODO-LIST")
  y.setAttribute("id",classNames.TODO_TEXT);
  y.setAttribute("class",classNames.TODO_TEXT);
  list.appendChild(y);

  todoListValue=document.getElementById(classNames.TODO_TEXT);
  
  y.onkeydown=function(e){
      if(e.keyCode==13){
        if(this.value==="")
        {
          alert("Enter your TODO List");
        }
        else{

            addNode();

        //clear input field after adding todoss
          if(this.value!==""){
            this.value="";
          }
          itemcount=list.getElementsByTagName("li").length;
          itemUnchecked++;
          //updating total items
          uncheckedCountSpan.innerHTML =itemUnchecked;
          itemCountSpan.innerHTML=itemcount;

        }
      }
    }

}
function addNode(){
  var liElement=document.createElement("li");
  liElement.classList.add(classNames.TODO_ITEM);
  var liText=document.createTextNode(todoListValue.value);
  liElement.appendChild(liText);

  var checkBoxElement=document.createElement("input");
      checkBoxElement.type = "checkbox";
      //on checking and uncheking todolist updating unchecked counts
      checkBoxElement.onclick=function(){
            if (this.checked === true){
              itemUnchecked--;  
            }
            if(this.checked===false)
            {
              itemUnchecked++;
            }
            uncheckedCountSpan.innerHTML =itemUnchecked;
             
      }
      checkBoxElement.classList.add(classNames.TODO_CHECKBOX);
      liElement.appendChild(checkBoxElement);
      

  list.appendChild(liElement);

}

  


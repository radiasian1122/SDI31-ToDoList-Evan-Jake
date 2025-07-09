/*TODO
define variables
accept input
create li utilizing the accepted input

PSUDO CODE:
var taskName

function onClick (receive a string){
set taskName to received string
create item for list item as:
'<li><checkbox>taskName</li>

get content of unordered list div
append div with created item
}

*/


let btn = document.querySelector('#addTask');
//let textBox = document.querySelector('#textInput').value;
let unorderedList = document.querySelector('#currentList');


btn.addEventListener("click", ()=>{
  let textBox = document.querySelector('#textInput').value;
  addTask(textBox);
}
  
)

function addTask(newString){
  let listItem = document.createElement('li');
  console.log(newString);
  
  listItem.innerHTML = "<input type='checkbox'/><label>"+newString+"</label>";
  
  unorderedList.appendChild(listItem);
}


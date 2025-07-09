/*TODO
run through list of to-dos
store each in local storage

on load: grab all from local storage
run through addTask function to add to page

*/


let btn = document.querySelector('#addTask');
let removeBtn = document.querySelector('#removeTasks');
let unorderedList = document.querySelector('#currentList');
let completedList = document.querySelector('#completedList');
let moveItem;


btn.addEventListener("click", ()=>{
  let textBox = document.querySelector('#textInput').value;
  addTask(textBox);
  resetForm();
})

removeBtn.addEventListener("click", ()=>{
  //console.log('remove task button clicked');
  removeTask();
})
  


function addTask(newString){
  let listItem = document.createElement('li');
  //console.log(newString);
  
  listItem.innerHTML = "<label class='strikethrough'><input type='checkbox'/>"+newString+"</label>";
  
  unorderedList.appendChild(listItem);
  
}

function resetForm(){
  document.querySelector('#textInput').value = "";
}

function moveCompleted(moveItem){

  completedList.append(moveItem);
}

function removeTask() {
  //get all elements with strikethorugh class
  //check if element has value of checked variablename.checked
  //remove that value
    let removeItem = document.getElementsByClassName('strikethrough');
    //console.log(removeItem.length);
    let x = 0;
    while (x < removeItem.length){
      //console.log("on step ", x, "removeitem length: ", removeItem.length)
      let isChecked = removeItem[x].childNodes[0].checked;
      //console.log("removing: " + x);
      if (isChecked){
        moveItem = unorderedList.children[x];
        unorderedList.removeChild(unorderedList.children[x]);

        if (x > 0){
          x --;
        }
        moveCompleted(moveItem);
      } else {
        x++;
      }
      
    }

}

// function saveTasks(){
//   //loop through all open tasks
//   //save to localstorage

// }
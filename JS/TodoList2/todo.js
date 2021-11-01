const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const gogo = document.querySelector('.gogo');
const mDown = document.querySelector('.farleft');
let i = 0;
let k = 0;
//Add Todos
const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center trial">
      <i class="far fa-arrow-alt-circle-up farleft" data-toggle="tooltip" data-placement="top" title="Move up"></i>
      <i class="far fa-arrow-alt-circle-down farright" data-toggle="tooltip" data-placement="top" title="Move down"></i>
      <span> ${i+1}. ${todo}</span>
      <i class="far fa-check-circle check data-toggle="tooltip" data-placement="top" title="Check and remove"></i>
      <i class="far fa-trash-alt delete" data-toggle="tooltip" data-placement="top" title="Delete"></i>
    </li>
  `;
  list.innerHTML += html;
  i++;
};

//Delete Todos
// delete todos
const listOff = list.addEventListener('click', e => {

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
    i--;
  }

  console.log(i);

});


function todoList () {

    //Submit Functioning
addForm.addEventListener('submit', e => {
  e.preventDefault();
  const letters = addForm.add.value.trim();
  const todo = letters[0].toUpperCase() + letters.slice(1);
  if(todo.length){
      generateTemplate(todo);
      addForm.reset();
    }
  //Auto Animate
  autoGrow(i);

      //AUTO STYLING
      console.log(list.children.length);
      if(e.target.classList.contains('delete') && i >= 0){
        i--;
      }
      if ( i < list.children.length){
            Array.from(list.children)[i].classList.add('auto-hover'); 
        }
    console.log(list.children[i]);
});

}

todoList ();



//Search 
const filterTodos = term => {
    // add filtered class
    Array.from(list.children)
      .filter(todo => !todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.add('filtered'));
  
    // remove filtered class
    Array.from(list.children)
      .filter(todo => todo.textContent.toLowerCase().includes(term))
      .forEach(todo => todo.classList.remove('filtered'));
  };


// filter todos event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
  });

//Move Up
list.addEventListener('click', e => {

  if(e.target.classList.contains('farright')){
    console.log('woooo');
  }

});

//Move Down
list.addEventListener('click', e => {

  if(e.target.classList.contains('farleft')){
    console.log('yoooo');
  }

});

//Check and Delete
list.addEventListener('click', e => {

  if(e.target.classList.contains('check')){
    console.log('checked');
    e.target.parentElement.remove();
  }

});

      //AUTO STYLING
function autoGrow (z) {
  const timer = setInterval(() => {
      Array.from(list.children)[z].classList.add('auto-hover');   
      if(z + 1 === Array.from(list.children).length){
        clearInterval(timer);
    } else{        
        z++;
    }

  }, 1000);
}

autoGrow(k);
     
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const searchBar = document.querySelector('.search');
let i = 0;
let j = 1;

//Add Todos
const generateTemplate = todo => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <i class="far fa-arrow-alt-circle-up farleft" data-toggle="tooltip" data-placement="top" title="Move up"></i>
    <i class="far fa-arrow-alt-circle-down farright" data-toggle="tooltip" data-placement="top" title="Move down"></i>
    <span>${todo}</span>
    <i class="far fa-check-circle check data-toggle="tooltip" data-placement="top" title="Check and remove"></i>
    <i class="far fa-trash-alt delete" data-toggle="tooltip" data-placement="top" title="Delete"></i>
  </li>
  `;
  list.innerHTML += html;

};

//1.Creating Todos
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const letters = addForm.add.value.trim();
    const todo = letters[0].toUpperCase() + letters.slice(1);
    if(todo.length){
        generateTemplate(todo);
        addForm.reset();
    }

    if (list.children.length > 0) {
      searchBar.style.display = 'block';
    }
});

//Delete Todos
// delete todos
list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
      e.target.parentElement.remove();
    }

//Hiding or Displaying search bar
    if (list.children.length === 0) {
      searchBar.style.display = 'none';
    } 
  });

//2.Search 
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


  
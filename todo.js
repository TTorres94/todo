const $FILTERINPUT = document.querySelector('#filterTodo');
const $RENDERTODO = document.querySelector('#render-todo');
const $FORMCREATETODO= document.querySelector('#createTodo')


let todos = [
    {
        title:'Cambiar de trabajo'
    },{
        title:'Correr 5k en 4.50'
    },
    {
        title:'Aprender a invertir'
    }
]


let filtered = {
    filteredText: ''
}

const renderTodo = function(todos, filter){

    let filteredTodo = todos.filter(todo => 
            todo.title.toLowerCase().includes(filter.filteredText.toLowerCase())
    )

    
    $RENDERTODO.innerHTML = ''

        
    filteredTodo.forEach(function(todo){

       let p =  document.createElement('p');
       p.textContent = `#${todo.title}`;
       $RENDERTODO.appendChild(p);
       
    })

}

renderTodo(todos, filtered)



$FILTERINPUT.addEventListener('input', (e) =>{
    
    filtered.filteredText = e.target.value; //aca ocurre la magia. el evento input recibe toda la data que le vas ingresando
                                            //eso va poblando el "filtered" y se ejecuta cada vez que tocas una tecla
    renderTodo(todos, filtered)
})

$FORMCREATETODO.addEventListener('submit', function(e){
    e.preventDefault()


    todos.push({title:e.target.todoAddedForm.value})//quise pasar obj como string
    
    e.target.todoAddedForm.value = ''

    renderTodo(todos,filtered)
})

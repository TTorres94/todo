const $FILTERINPUT = document.querySelector('#filterTodo');
const $RENDERTODO = document.querySelector('#render-todo');
const $CHECKBOX = document.querySelector('#noshow-completed')
const $FORMTODO = document.querySelector('#formTodo');


let todos = []

const todosLocal= localStorage.getItem('todos');
const todosJSON = JSON.parse(todosLocal)





let filtered = {
    filteredText: '',
    completed: false,
}

const renderTodo = function(todos, filter){

    let filteredTodo = todos.filter(todo => todo.title.toLowerCase().includes(filter.filteredText.toLowerCase()))


    filteredTodo = filteredTodo.filter(function(todo){
        if(filter.completed) { //si el checkbox esta tildado, devolvé los incompletos.
            return !todo.completed
        }else{                 //si no devolve true
                return true;  //no entiendo esto!
            }
    })
    
    $RENDERTODO.innerHTML = ''

        
    filteredTodo.forEach(function(todo){
        
            let p =  document.createElement('p');
            p.textContent = `#${todo.title}`;
            $RENDERTODO.appendChild(p);
    
    })

}

renderTodo(todosJSON, filtered)



$FILTERINPUT.addEventListener('input', (e) =>{
    
    filtered.filteredText = e.target.value; //aca ocurre la magia. el evento input recibe toda la data que le vas ingresando
                                            //eso va poblando el "filtered" y se ejecuta cada vez que tocas una tecla
    renderTodo(todosJSON, filtered)
})

$CHECKBOX.addEventListener('change', function(e){

    filtered.completed = e.target.checked //cuando la condición sea verdadera que se muestren solamente los todos que esten incompletos.

    renderTodo(todosJSON,filtered)
    
})


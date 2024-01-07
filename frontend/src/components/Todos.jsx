export function Todos({todos}){       //todos will be an array containing title and description
    
    
    return <div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true? "Completed" : "Mark as complete"}</button>

            </div>
        })}
        
    </div>
}
var url = 'https://jsonplaceholder.typicode.com/todos'

// Lista de todos los pendientes(solo IDs) = 1
// Lista de todos los pendientes(IDs y Titles) = 2
// Lista de todos los pendientes sin resolver (ID y Title) = 3
// Lista de todos los pendientes resueltos (ID y Title) = 4
// Lista de todos los pendientes (IDs y userID) = 5
// Lista de todos los pendientes resueltos (ID y userId) = 6
// Lista de todos los pendientes sin resolver (ID y userId) = 7
var todo = 1

fetch(url)
    .then(res => res.json())
    .then(todos => {
        if(todo == 1){
            console.log("ID de todos los pendientes: \n")
            todos.forEach(todo => {
                    console.log(todo.id);                
            });
        }

        if(todo == 2){
            console.log("ID y title de todos los pendientes: \n")
            todos.forEach(todo => {
                    console.log(todo.id);
                    console.log(todo.title+"\n")
            });
        }

        if(todo == 3){
            console.log("ID y title de todos los pendientes sin resolver: \n")
            todos.forEach(todo => {
                if (!todo.completed) {
                    console.log(todo.id);
                    console.log(todo.title+"\n")
                }
            });
        }

        if(todo == 4){
            console.log("ID y title de todos los pendientes resueltos: \n")
            todos.forEach(todo => {
                if (todo.completed) {
                    console.log(todo.id);
                    console.log(todo.title+"\n")
                }
            });
        }

        if(todo == 5){
            console.log("UserId y Id de todos los pendientes: \n")
            todos.forEach(todo => {

                    console.log(todo.userId);
                    console.log(todo.id+"\n")

            });
        }

        if(todo == 6){
            console.log("UserId y Id de todos los pendientes resueltos: \n")
            todos.forEach(todo => {
                if (todo.completed) {
                    console.log(todo.userId);
                    console.log(todo.id+"\n")
                }
            });
        }

        if(todo == 7){
            console.log("UserId y Id de todos los pendientes sin resolver: \n")
            todos.forEach(todo => {
                if (!todo.completed) {
                    console.log(todo.userId);
                    console.log(todo.id+"\n")
                }
            });
        }
    })
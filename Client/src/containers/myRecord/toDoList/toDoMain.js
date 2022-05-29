import { TodoProvider } from './toDoContext/toDoContext'
import TodoCreate from './toDoCreate/ToDoCreate'
import TodoHead from './toDoHead/toDoHead'
import TodoList from './toDoList/toDoList'
import TodoTemplate from './toDoTemplate/toDoTemplate'
function ToDoMain() {
    return (
        <>
            <TodoProvider>
                <TodoTemplate>
                    <TodoHead></TodoHead>
                    <TodoList></TodoList>
                    <TodoCreate></TodoCreate>
                </TodoTemplate>
            </TodoProvider>
        </>
    )
}

export default ToDoMain

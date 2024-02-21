import EditableTodo from "./EditableTodo";
import { TodoInterface } from "./interfaces";}

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

interface EditableTodoListProps {
  todos: TodoInterface[];
  update: (todo: TodoInterface) => void;
  remove: (id: string) => void;
}

function EditableTodoList({ todos, update, remove }: EditableTodoListProps) {

  const todoList = todos.map(todo => (
    <EditableTodo
        key={todo.id}
        todo={todo}
        update={update}
        remove={remove}
    />
  ));

  return <>{todoList}</>;
}

export default EditableTodoList;

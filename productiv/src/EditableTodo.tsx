import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { TodoInterface, TodoFormData } from "./interfaces";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

interface EditableTodoProps {
  todo: TodoInterface;
  remove: (id: string) => void;
  update: (todo: TodoInterface) => void;
}

function EditableTodo({ todo, remove, update }: EditableTodoProps) {
  const [isEditing, setIsEditing] = useState(false);

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(edit => !edit);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    return remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData: TodoFormData) {
    update({ ...formData, id: todo.id});
    setIsEditing(false);
  }

  return (
      <div className="EditableTodo">
        {isEditing
            ? (
                <TodoForm
                    initialFormData={ todo }
                    handleSave={handleSave} />
            ) : (
                <div className="mb-3">
                  <div className="float-end text-sm-end">
                    <button
                        className="EditableTodo-toggle btn-link btn btn-sm"
                        onClick={toggleEdit}>
                      Edit
                    </button>
                    <button
                        className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                        onClick={handleDelete}>
                      Del
                    </button>
                  </div>
                  <Todo todo={todo} />
                </div>
            )
        }
      </div>
  );
}

export default EditableTodo;

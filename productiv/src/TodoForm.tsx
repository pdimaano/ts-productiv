import React, { useState } from "react";
import { TodoFormData } from "./interfaces";

/** Form for adding.
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
*
* { TodoApp, EditableTodo } -> TodoForm
*/

interface TodoFormProps {
  initialFormData?: TodoFormData;
  handleSave: (formData: TodoFormData) => void;
}

const defaultInitialFormData: TodoFormData = { title: "", description: "", priority: 1 };

function TodoForm({ initialFormData = defaultInitialFormData, handleSave }: TodoFormProps) {
  const [formData, setFormData] = useState(initialFormData);

  /** Update form input. */
  function handleChange(evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const input = evt.target;
    setFormData(formData => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    handleSave(formData);
    setFormData(initialFormData);
  }

  return (
      <form className="NewTodoForm" onSubmit={handleSubmit}>

        <div className="mb-3">
          <input
              id="newTodo-title"
              name="title"
              className="form-control"
              placeholder="Title"
              onChange={handleChange}
              value={formData.title}
              aria-label="Title"
          />
        </div>

        <div className="mb-3">
          <textarea
              id="newTodo-summary"
              name="summary"
              className="form-control"
              placeholder="Summary"
              onChange={handleChange}
              value={formData.description}
              aria-label="Summary"
          />
        </div>

        <div className="mb-3">
          <div className="w-75 d-flex justify-content-between">
            <label htmlFor="newTodo-priority"
                   className="d-inline-flex">Priority:&nbsp;&nbsp;
            </label>
            <select id="newTodo-priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="form-control form-control-sm d-inline-flex"
            >
              <option value={1}>High</option>
              <option value={2}>Medium</option>
              <option value={3}>Low</option>
            </select>
          </div>
          <button className="btn-primary btn btn-sm NewTodoForm-addBtn">
            Go!
          </button>
        </div>

      </form>
  );
}

export default TodoForm;

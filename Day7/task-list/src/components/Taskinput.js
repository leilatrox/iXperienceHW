import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default function Taskinput(props) {
  const [task, setTask] = useState('');

  function onFormSubmit(e) {
    e.preventDefault();
    props.onTaskCreate(task);
    setTask('');
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="input-group mb-3">
          <input value={task} onChange={(e) => setTask(e.target.value)} 
            type="text" className="form-control" placeholder="Task"/>
          <button className="btn btn-outline-secondary" type="submit" id="button-addon2">+</button>
        </div>
      </form> 
    </div>
  )
}

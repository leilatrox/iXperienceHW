import React, {useState} from 'react'
import Spinner from './Spinner';

export default function RecInputs(props) {
  const [name, setName] = useState('');
  const [time, setTime] = useState('');
  const [desc, setDesc] = useState('');
  const [saving, setSaving] = useState(false);

  async function onFormSubmit(e) {
    e.preventDefault();

    setSaving(true);
    await props.onRecipeCreate(name,time,desc);
    setSaving(false);
    setName('');
    setTime('');
    setDesc('');
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Time</label>
          <input value={time} onChange={(e) => setTime(e.target.value)} type="number" className="form-control"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input value={desc} onChange={(e) => setDesc(e.target.value)} type="text" className="form-control"/>
        </div>
        <div className="d-grid gap-2">
        <button className="btn btn-outline-secondary text-center" type="submit" disabled={saving}>
            { saving ? <Spinner/> : 'Add Recipe' }
          </button>
        </div>
      </form>
    </div>
  )
}

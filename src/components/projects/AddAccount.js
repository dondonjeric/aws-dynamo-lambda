import React, { useEffect, useState } from 'react'

const AddAccount = (props) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('regular');

  const onChangeName = (e) => {
    setName(e.target.value)
  }

  const onChangeType = (e) => {
    setType(e.target.value);
  }
  const onSubmit = () => {
    const data = {
      name, type
    }
    setName('');
    setType('regular');
    props.onCreate(data);
  }

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    console.log(type);
  }, [type]);
  return (
    <div>
    <div className="modal fade" id="addAccountModal" tabIndex="-1" aria-labelledby="addAccountModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="addAccountModalLabel">Add New Account</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-floating mb-3">
                <input onChange={onChangeName}type="text" value={name} className="form-control" id="floatingInput" placeholder="Name" />
                <label htmlFor="floatingInput">Name</label>
              </div>
              <div>
                <select value={type} onChange={onChangeType} className="form-select mb-3" aria-label=".form-select-lg">
                  <option value="regular">Regular</option>
                  <option value="interest">Interest</option>
                  <option value="checking">Checking</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-secondary" onClick={onSubmit} data-bs-dismiss='modal'>Add</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddAccount
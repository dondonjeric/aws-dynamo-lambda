import React, { useState, useEffect } from 'react'

const UpdateAccount = (props) => {
    const [name, setName] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onSubmit = () => {
        const data = {
            id: props.data.id,
            name: name,
        }
        setName('');
        props.onUpdate(data);
    }

    useEffect(() => {
    }, [name])
  return (
    <div className="modal fade" id="updateAccountModal" tabIndex="-1" aria-labelledby="updateAccountModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="updateAccountModalLabel">Update Account</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                <div className="form-floating mb-3">
                    <input value={name} onChange={onChangeName} className="form-control" id="floatingInput" placeholder={props.data.name} />
                    <label htmlFor="floatingInput">{props.data.name}</label>
                </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-secondary" onClick={onSubmit} data-bs-dismiss='modal'>Update</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateAccount
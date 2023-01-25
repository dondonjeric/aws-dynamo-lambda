import React, { useEffect, useState } from 'react'
// import AccountService from '../../back-end/AccountService';
import { getAll, createAccount, updateAccount, deleteAccount } from '../../back-end/axiosConnection'
import AddAccount from './AddAccount';
import UpdateAccount from './UpdateAccount';

const Project = () => {
    // AccountService.getAllAccounts();
    const [account, setAccount] = useState([]);
    const [header, setHeader] = useState([]);
    const [table, setTable] = useState(false);
    const [update, setUpdate] = useState({});
    const loadData = async() =>{
      const {data} = await getAll();
      const values = [...data.accounts];
      console.log(values);
      setHeader(Object.keys(values[0]).sort());
      setAccount([...values]);
      setTable(true);
    }

    const createNewAccount = async(data) => {
      await createAccount(data);
      await loadData();
    }

    const updateAccount = async(data) => {
      await updateAccount(data);
      await loadData();
    }

    const onTransact = (id) => {
      console.log(id);
    }

    const onEdit = (data) => {
      setUpdate(data);
    }

    const onDelete = async (id) => {
      await deleteAccount(id);
      await loadData();
    }

    useEffect(() => {
    }, [account]);

    useEffect(() => {
    },[update])

  return (
    <div className='w-100'>
      <div className='mx-auto mt-2'>
        <button type='button' className="btn btn-dark p-3 m-1" onClick={loadData}>Load Accounts</button>
        <button type="button" className="btn btn-dark p-3 m-1" data-bs-toggle="modal" data-bs-target="#addAccountModal">Add New Account</button>
        
        <AddAccount onCreate={createNewAccount} />
        <UpdateAccount data={update} onUpdate={updateAccount}/>
      </div>
      { table &&
      <div className='table-responsive'>
        <table className="table text-center">
          <thead>
              {
              <tr>
                <th>Action</th>
                <th>Type</th>
                <th>ID</th>
                <th>Name</th>
                <th>Balance</th>
                <th>Minimum Balance</th>
                <th>Interest Charge</th>
                <th>Penalty</th>
                <th>Transaction Charge</th>
              </tr>
            }
          </thead>
          <tbody>
            {
              account.map((data, i) => (
                <tr key={i}>
                  <td>
                    <button type="button" className='btn btn-secondary m-1' onClick={()=>onTransact(data.id)}>Transact</button>
                    <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#updateAccountModal" onClick={()=>onEdit(data)}>Edit</button>
                    <button type="button" className='btn btn-secondary m-1' onClick={()=>onDelete(data.id)}>Delete</button>
                  </td>
                  <td>{data[header[7]]}</td>
                  <td>{data[header[1]]}</td>
                  <td>{data[header[4]]}</td>
                  <td>{data[header[0]]}</td>
                  <td>{data[header[3]]}</td>
                  <td>{data[header[2]]}</td>
                  <td>{data[header[5]]}</td>
                  <td>{data[header[6]]}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      }
    </div>
  )
}

export default Project
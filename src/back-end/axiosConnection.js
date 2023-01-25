import axios from 'axios';

export function getAll(){
    const config = {
        method: 'get',
        url: 'https://05443uqilg.execute-api.us-east-1.amazonaws.com/',
        headers: {
            'Content-Type':'application/json'   
        }
    }
    return axios(config);
}

export function createAccount(values){
    const data = JSON.stringify({
        "type": values.type,
        "name": values.name
    });
    const config = {
        method: 'post',
        url: 'https://05443uqilg.execute-api.us-east-1.amazonaws.com/',
        headers: {
            'Content-Type':'application/json',
        },
        data: data
    }
    return axios(config);
}

export function updateAccount(values){
    const id = values.id;
    const data = {
        id: values.id,
        name: values.name
    }
    const config = {
        method: 'put',
        url: 'https://05443uqilg.execute-api.us-east-1.amazonaws.com/'+id,
        headers: {
            'Content-Type':'application/json'
        },
        data: data
    }
    return axios(config);
}

export function deleteAccount(id){
    const config = {
        method: 'delete',
        url: 'https://05443uqilg.execute-api.us-east-1.amazonaws.com/'+id,
        headers: {
            'Content-Type':'application/json'
        }
    }
    return axios(config);
}

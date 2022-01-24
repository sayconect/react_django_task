import React from 'react';
import APIService from '../../../APIService';

const UsersTable = (props) => {
    
    let deleteBtn = (user) => {
        APIService.DeleteUser(user.id)
        .then(() => alert('test'),props.deleteUser(user))
    }

    let editBtn = (user) => {
        props.changeUser(user)
    }

    let usersBlock = props.users_data.map(item => {
        return (
            <tr>
                <th scope="row">{item.id}</th>
                <td>{item.username}</td>
                <td>{item.created_at}</td>
                <td>{item.group}</td>
                <td>
                    <div className='row justify-content-center'>
                    <div className='col-2'>
                        <button className='btn btn-secondary'
                            onClick={() => editBtn(item)}>Edit</button>
                    </div>
                    <div className='col-2'>
                        <button className='btn btn-secondary' 
                            onClick={() => deleteBtn(item)}>Delete</button>
                    </div>
                    </div>
                </td>
            </tr>

        )
    })

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">username</th>
                    <th scope="col">created</th>
                    <th scope="col">group</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {usersBlock}
            </tbody>
        </table>
    );
}


export default UsersTable;
import React from 'react';
import APIService from '../../../APIService';

const GroupsTable = (props) => {

    let deleteBtn = (group) => {
        APIService.DeleteGroup(group.id)
        .then(() => alert('test'),props.deleteGroup(group))
    }
    let editBtn = (user) => {
        props.changeGroup(user)
    
    }

    let groupsBlock = props.groups_data.map(item => {
        return (
            <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>
                    <div className='row justify-content-center'>
                    <div className='col-2'>
                        <button className='btn btn-secondary' onClick={() => editBtn(item)}>Edit</button>
                    </div>
                    <div className='col-2'>
                        <button className='btn btn-secondary' onClick={() => deleteBtn(item)}>Delete</button>
                    </div>
                    </div>
                </td>
            </tr>

        )
    })

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {groupsBlock}
            </tbody>
        </table>
    );
}


export default GroupsTable;
import React, { useEffect, useState } from 'react';
import APIService from '../../../../APIService';
import Form from 'react-bootstrap/Form'



const UsersForm = (props) => {
    const [username, setUsername] = useState('')
    const [group, setGroup] = useState('')
    const [groups, setGroups] = useState([])


    useEffect(() => {
        setUsername(props.user.username)
        setGroup(props.user.group)
        APIService.GetGroup()
            .then(data => setGroups(data))
    }, [props.user])


    let options = groups.map(item => {
        return (
            <option value={item.name}>{item.name}</option>
        )
    })

    let changeUsername = (value) => {
        setUsername(value)
    }

    let changeGroup = (value) => {
        
        setGroup(value)
    }

    let updateUser = () => {
        APIService.UpdateUser(props.user.id, { username, group })
        .then((resp) => props.updateUser(resp))
    }
    let createUser = () => {
        APIService.CreateUser({username, group})
        .then(resp => props.insertedInformation(resp))
    }
    
    let button
    if (props.user.id) {
        button = <button className="btn btn-secondary btn-xs" type="submit"
            onClick={() => updateUser()}>update</button>
    } else {
        button = <button className="btn btn-secondary btn-xs" type="submit"
            onClick={() => createUser()}>create</button>
    }

    return (
        <div className='row'>
            <div className='col-6 mx-2 mt-1'>
                <label name='Title' className="form-label ">Name</label>
                <input type='text' className="form-control" value={username}
                    onChange={e => changeUsername(e.target.value)} />
            </div>
            <div className='col-4 mx-2 mt-1'>
                <label name='Title' className="form-label">Group</label>
                <Form.Select aria-label="Default select example"
                    onChange={e => changeGroup(e.target.value)}>
                    <option>Select group</option>
                    {options}
                </Form.Select>
            </div>
            <div className='col-1 mx-2 mt'>
            {button}
            </div>
        </div>
    );
}

export default UsersForm;
import React, { useEffect, useState } from 'react';
import APIService from '../../../../APIService';
import groupFormCss from './GroupForm.module.css'


const GroupForm = (props) => {
    const [name, setName] = useState('')
    const [description, setDescript] = useState('')

    useEffect(() => {
        setName(props.group.name)
        setDescript(props.group.description)
    }, [props.group])

    let changeName = (value) => {
        setName(value)
    }

    let changeDescript = (value) => {
        setDescript(value)
    }

    let updateGroup = () => {
        APIService.UpdateGroup(props.group.id, { name, description })
        .then((resp) => props.updateGroup(resp))

    }

    let createGroup = () => {
        APIService.CreateGroup({ name, description })
        .then(resp => props.insertedInformation(resp))

    }

    let button
    if (props.group.id) {
        button = <button className={`btn btn-secondary btn-xs ${groupFormCss.sendButton} `} type="submit"
            onClick={updateGroup}>update</button>
    } else {
        button = <button className={`btn btn-secondary btn-xs ${groupFormCss.sendButton} `} type="submit"
            onClick={() => createGroup()}>create</button>
    }

    return (
        <div className='row'>
            <div className='col-6 mx-2'>
                <label name='Title' className="form-label ">Name</label>
                <input type='text' className="form-control" value={name}
                    onChange={e => changeName(e.target.value)} />
            </div>
            <div className='col-4'>
                <label name='Title' className="form-label">Group</label>
                <input type='text' className="form-control" value={description}
                    onChange={e => changeDescript(e.target.value)} />
            </div>
            <div className='col-1'>
                {button}
            </div>
        </div>
    );
}

export default GroupForm;
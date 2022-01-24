import React, { useEffect, useState } from 'react';
import UsersForm from './Forms/UsersForm';
import UsersTable from './UsersTable';


const UserContent = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        const apiUrl = 'http://127.0.0.1:8000/api/v1/users/';
        fetch(apiUrl, {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => alert(error))
    }, [])

    let createUserBtn = () => {
        setUser({ username: '', group: '' })
    }

    let insertedInformation = (user) => {
        let newUsers = [...users, user]
        setUsers(newUsers)
    }

    let deleteUser = (delUser) => {
        let newUsers = users.filter(item => {
            if (item.id === delUser.id) {
                return false
            } else { return true }
        })
        setUsers(newUsers)
    }

    let updateUser = (updUser) => {
        let newUsers = users.map(item => {
            if (item.id === updUser.id) {
                return updUser
            } else {
                return item
            }
        })
        setUsers(newUsers)
    }


    return (
        <div>
            {user ? <UsersForm user={user} insertedInformation={insertedInformation}
                        updateUser={updateUser} />
                : <button className='btn btn-secondary'
                    onClick={createUserBtn}>Add user</button>
            }
            <UsersTable users_data={users} changeUser={setUser} deleteUser={deleteUser} />
        </div>
    );
}

export default UserContent;
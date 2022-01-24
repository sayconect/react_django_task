import React, { useEffect, useState } from 'react';
import GroupForm from './Forms/GroupForm';
import GroupsTable from './GroupsTable';



const GroupsContent = () => {
    const [groups, setGroups] = useState([])
    const [group, setGroup] = useState(null)


    useEffect(() => {

        const apiUrl = 'http://127.0.0.1:8000/api/v1/groups/';
        fetch(apiUrl, {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => { setGroups(data) })
            .catch(error => alert(error))

    }, [])

    let createGroup = () => {
        setGroup({ name: '', description: '' })
    }

    let insertedInformation = (group) => {
        let newGroups = [...groups, group]
        setGroups(newGroups)
    }
    let deleteGroup = (delGroup) => {
        let newGroups = groups.filter(item => {
            if (item.id === delGroup.id) {
                return false
            } else { return true }
        })
        setGroups(newGroups)
    }
    let updateGroup = (updGroup) => {
        let newGroups = groups.map(item => {
            if (item.id === updGroup.id){
                return updGroup
            }else {
                return item
            }
        })
        setGroups(newGroups)
    }

    return (
        <div>

            {group ? <GroupForm group={group} insertedInformation={insertedInformation}
                updateGroup={updateGroup} /> 
                : <button className='btn btn-secondary mt-2' onClick={createGroup}>Add group</button>}
            <GroupsTable groups_data={groups} changeGroup={setGroup} deleteGroup={deleteGroup} />
        </div>
    );
}

export default GroupsContent;
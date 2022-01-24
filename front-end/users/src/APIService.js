
export default class APIService {

    static UpdateUser(user_id, body) {
        return fetch(`http://127.0.0.1:8000/api/v1/users/${user_id}/`, {
            'method': 'PUT',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            'body': JSON.stringify(body),
        }).then(resp => resp.json())
    };

    static DeleteUser(user_id) {
        return fetch(`http://127.0.0.1:8000/api/v1/users/${user_id}/`, {
            'method': 'DELETE',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(resp => resp.json())
    };
    
    static CreateUser(body) {
        return fetch(`http://127.0.0.1:8000/api/v1/users/`, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            'body': JSON.stringify(body),
        }).then(resp => resp.json())
    };


    static DeleteGroup(group_id) {
        return fetch(`http://127.0.0.1:8000/api/v1/groups/${group_id}/`, {
            'method': 'DELETE',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(resp => resp.json())
    };

    static UpdateGroup(group_id, body) {
        return fetch(`http://127.0.0.1:8000/api/v1/groups/${group_id}/`, {
            'method': 'PUT',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            'body': JSON.stringify(body),
        }).then(resp => resp.json())
    };

    static GetGroup() {
        return fetch('http://127.0.0.1:8000/api/v1/groups/', {
            'method': 'GET',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json())
    };

    static CreateGroup(body) {
        return fetch(`http://127.0.0.1:8000/api/v1/groups/`, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            'body': JSON.stringify(body),
        }).then(resp => resp.json())
    };

    
}
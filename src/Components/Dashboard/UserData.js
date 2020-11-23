import React from 'react';

function UserData(props) {
    let users = props.users;
    console.log("users = ", users);
    return ( 
        <tbody>
            { users.map( user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                </tr>
            ))}
      </tbody>
       );
}
export default UserData;

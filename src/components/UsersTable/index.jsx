import React from "react";
import { Container, RemoveButton, UserTableComp } from './styledComponents';

function UsersTable({usersList,removeUser}){
   
    if(!usersList)
    return null;

    return <Container>
        <UserTableComp>
            <tr>
                <th>Std No</th>
                <th>Std Name</th>
                <th>Phone No</th>
                <th>Action</th>
            </tr>
            {usersList.map((user)=>{
                return (<tr key={user.stdNo}>
                <td>{user.stdNo}</td>
                <td>{user.stdName}</td>
                <td>{user.phoneNo}</td>
                <td><RemoveButton onClick={()=>removeUser(user.stdNo)}>remove</RemoveButton></td>
                </tr>)
            })}
        </UserTableComp>
    </Container>
}

export default UsersTable;
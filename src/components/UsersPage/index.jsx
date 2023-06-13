import React, { useState } from "react";
import UsersTable from '../UsersTable';
import AddUserForm from '../AddUserForm';
import PageHeader from '../PageHeader';

const usersData =[
    { stdNo:1, stdName: "Nikhil", phoneNo:"32323232"},
    { stdNo:2, stdName: "Sai", phoneNo:"32323433232"}
]

function UsersPage(){
   
    const [userList,setUserList] = useState(usersData);
    const [searchTerm,setSearch] = useState("");

    const onAddUser = (userDetails)=>{
        if(userList.filter((user)=>user.stdName===userDetails.stdName).length){
            alert(`user with stdName ${userDetails.stdName} already exists`);
            return;
        }
        

        if(userList.filter((user)=>user.stdNo===userDetails.stdNo).length){
        alert(`user with stdNo ${userDetails.stdNo} already exists`);
           return ;
        }
       
        console.log(userDetails);
        setUserList([...userList,userDetails]);
        
    }

    const onRemoveUser =(stdNo)=>{
        setUserList([...userList.filter((user)=>user.stdNo!==stdNo)]);
    }
   

    const onSearch =(searchTerm)=>{
        setSearch(searchTerm);
    }
     
    const filteredUsers = userList.filter((user)=>user.stdName.toLowerCase().includes(searchTerm.toLowerCase()))
    return (<div>
        <PageHeader onSearch={onSearch}/>
        <div style={{display:"flex"}}>
        <AddUserForm addUser={onAddUser} />
        <UsersTable usersList={filteredUsers} removeUser={onRemoveUser} />
        </div>
        </div>)
}
export default UsersPage;
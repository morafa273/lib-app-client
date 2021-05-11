import React,{useState,useEffect} from 'react';
import {Layout} from '../layout';
//import service from '../service'
//import axio from 'axio'
//import {Table,Button} from 'reactstrap'


const Users = ({props}) => {

  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/users')
  .then((res)=> res.json())
  .then(json => {
    console.log(json);
    setUsers(json);
  });
  },[])

  

  return(
    <Layout>
    <div class="mt-2">
    <button type="button" class="btn btn-primary">+ Add User</button>
    </div>
    <table class="table mt-1">
        <thead>
            <tr>
                <th>#</th>
                <th>Nama</th>
                <th>No.Telepon</th>
                <th>Email</th>
                <th>Alamat</th>
                <th>Menu</th>
            </tr>
        </thead>
        <tbody>
        { (users.length > 0) ? users.map( (user, index) => {
           return (
            <tr key={ index }>
              <td>{index+1}</td>
              <td>{ user.namaUser }</td>
              <td>{ user.telepon }</td>
              <td>{ user.email }</td>
              <td>{ user.alamat }</td>
              <td>
                <button type="button" class="btn btn-success me-md-2">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
                </td>
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
        </tbody>
    </table>
    </Layout>
  );   
   
}

export default Users;
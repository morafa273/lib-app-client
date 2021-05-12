import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import {Layout} from '../layout';
//import service from '../service'
import Axios from 'axios'
//import {Table,Button} from 'reactstrap'


const Users = () => {

  const url = 'http://localhost:5000/users'

  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch(url)
  .then((res)=> res.json())
  .then(json => {
    console.log(json);
    setUsers(json);
  });
  },[])

  

  function deleteUser(id){
    if(window.confirm('Hapus Data User ?')){
        Axios.delete(url+'/'+id);
        window.location.reload();
      }
  }


  return(
    <Layout>
    <div class="mt-2">
      <Link to='/adduser'>
      <button type="button" class="btn btn-primary">+ Add User</button>
      </Link>
    </div>
    <table class="table table-striped mt-1">
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
              <td>{ user.userName }</td>
              <td>{ user.telepon }</td>
              <td>{ user.email }</td>
              <td>{ user.alamat }</td>
              <td>
              <Link to={{pathname:'/edituser',state: user.id}}>
                  <button type="button" class="btn btn-success me-md-2">Edit</button>
               </Link>
                <button  onClick={()=> deleteUser(user.id)} type="button" class="btn btn-danger">Delete</button>
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
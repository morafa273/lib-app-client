import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Layout } from '../layout';
import Axios from 'axios';

const AddUser = () => {

    const [data,setData] = useState({
        userName : "",
        telepon : "",
        email : "",
        alamat : ""
    })

    function submit(e){
       if(data.userName==="" || data.telepon==="" || data.email==="" || data.alamat===""){
            alert('input tidak valid!');
       }else{
        e.preventDefault();
        Axios.post('http://localhost:5000/users',{
            userName : data.userName,
            telepon : data.telepon,
            email : data.email,
            alamat : data.alamat
        }).then(res=>{
            console.log(res.data);
        })
        alert('User telah ditambahkan')
       }
    }

    function handler(e){
        const newdata = {...data} ;
        newdata[e.target.id] = e.target.value ;
        setData(newdata);
        console.log(newdata);
    }

   return(
    <Layout>
    <div class="mt-3">
        <h1>Masukkan Data User</h1>
        <form class="mt-3" onSubmit={(e)=> submit(e)}> 
            <input onChange={(e)=> handler(e)} id="userName" value={data.userName} type="text" placeholder="Nama User" />
            <input onChange={(e)=> handler(e)} id="telepon" value={data.telepon} type="text" placeholder="Telepon" />
            <input onChange={(e)=> handler(e)} id="email" value={data.email} type="email" placeholder="Email" />
            <input onChange={(e)=> handler(e)} id="alamat" value={data.alamat} type="text" placeholder="Alamat" />
            <button type="submit" class="btn btn-primary">Add</button>
            <Link to='/users'>
            <button type="button" class="btn btn-danger">Back</button>
            </Link>
        </form>
    </div>
    </Layout>
   )
    
}

export default AddUser;
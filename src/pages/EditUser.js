import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router';
import { Layout } from '../layout';
import {Link} from 'react-router-dom'
import Axios from 'axios'

const EditUser = () => {
    const location = useLocation();
   const id = location.state
   //console.log(id)

   const url = 'http://localhost:5000/users/';

   const [user,setUser] = useState({});

   useEffect(()=>{
      fetch(url+id)
   .then((res)=> res.json())
   .then(json => {
      console.log(json);
      setUser(json);
   });
   },[])

  
  const [val,setVal] = useState({
   userName : "",
   telepon : "",
   email : "",
   alamat : ""
})

function submit(e){
   if(val.userName==="" || val.telepon==="" || val.email==="" || val.alamat===""){
        alert('input tidak valid!');
   }else{
      e.preventDefault();
      Axios.patch('http://localhost:5000/users/'+id.toString(),{
          userName : val.userName,
          telepon : val.telepon,
          email : val.email,
          alamat : val.alamat
      }).then(res=>{
          console.log(res.val);
      })
      alert('data user telah diupdate')
   }
}

function handler(e){
   const newdata = {...val} ;
   newdata[e.target.id] = e.target.value ;
   setVal(newdata);
   console.log(newdata);
}
   return(
    <Layout>
    <div class="mt-3">
     <h1>Edit Data User</h1>
     <form class="mt-3" onSubmit={(e)=> submit(e)}> 
         <input onChange={(e)=> handler(e)}  id="userName"  type="text" value={val.userName} placeholder={user.userName}/>
         <input onChange={(e)=> handler(e)}  id="telepon" type="text" value={val.telepon} placeholder={user.telepon}/>
         <input onChange={(e)=> handler(e)}  id="email"     type="text" value={val.email} placeholder={user.email}/>
         <input onChange={(e)=> handler(e)}  id="alamat"  type="text" value={val.alamat} placeholder={user.alamat}/>
         <button type="submit" class="btn btn-primary">Update</button>
         <Link to='/users'>
         <button type="button" class="btn btn-danger">Back</button>
         </Link>
     </form>
    </div>
    </Layout>
   )
}
   


export default EditUser;
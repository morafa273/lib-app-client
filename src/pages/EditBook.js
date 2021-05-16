import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router';
import { Layout } from '../layout';
import {Link} from 'react-router-dom'
import Axios from 'axios'

const EditBook = () => {
   const location = useLocation();
   const id = location.state
   //console.log(id)

   const url = 'http://localhost:5000/books/';

   const [book,setBook] = useState({});

   useEffect(()=>{
      fetch(url+id)
   .then((res)=> res.json())
   .then(json => {
      console.log(json);
      setBook(json);
   });
   },[])

  
  const [val,setVal] = useState({
   judulBuku : "",
   pengarang : "",
   stok : "",
   hargasewa : ""
})

function submit(e){
   if(val.judulBuku==="" || val.pengarang==="" || val.stok==="" || val.hargasewa===""){
        alert('input tidak valid!');
   }else{
      e.preventDefault();
      Axios.patch('http://localhost:5000/books/'+id.toString(),{
          judulBuku : val.judulBuku,
          pengarang : val.pengarang,
          stok : val.stok,
          hargasewa : val.hargasewa
      }).then(res=>{
          console.log(res.val);
      })
      alert('Buku telah diupdate')
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
        <h1>Edit Data Buku</h1>
        <form class="mt-3" onSubmit={(e)=> submit(e)}> 
            <input onChange={(e)=> handler(e)}  id="judulBuku"  type="text" value={val.judulBuku} placeholder={book.judulBuku}/>
            <input onChange={(e)=> handler(e)}  id="pengarang" type="text" value={val.pengarang} placeholder={book.pengarang}/>
            <input onChange={(e)=> handler(e)}  id="stok"     type="number" value={val.stok} placeholder={book.stok}/>
            <input onChange={(e)=> handler(e)}  id="hargasewa"  type="number" value={val.hargasewa} placeholder={book.hargasewa}/>
            <button type="submit" class="btn btn-primary">Update</button>
            <Link to='/books'>
            <button type="button" class="btn btn-danger">Back</button>
            </Link>
        </form>
    </div>
    </Layout>
   )
    
}

export default EditBook;
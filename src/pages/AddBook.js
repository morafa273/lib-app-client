import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Layout } from '../layout';
import Axios from 'axios';

const AddBook = () => {

    const [data,setData] = useState({
        judulBuku : "",
        pengarang : "",
        stok : "",
        hargasewa : ""
    })

    function submit(e){
       if(data.judulBuku==="" || data.pengarang==="" || data.stok==="" || data.hargasewa===""){
            alert('input tidak valid!');
       }else{
        e.preventDefault();
        Axios.post('http://localhost:5000/books',{
            judulBuku : data.judulBuku,
            pengarang : data.pengarang,
            stok : data.stok,
            hargasewa : data.hargasewa
        }).then(res=>{
            console.log(res.data);
        })
        alert('Buku telah ditambahkan')
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
        <h1>Masukkan Data Buku</h1>
        <form class="mt-3" onSubmit={(e)=> submit(e)}> 
            <input onChange={(e)=> handler(e)} id="judulBuku" value={data.judulBuku} type="text" placeholder="Judul Buku" />
            <input onChange={(e)=> handler(e)} id="pengarang" value={data.pengarang} type="text" placeholder="Pengarang" />
            <input onChange={(e)=> handler(e)} id="stok" value={data.stok} type="number" placeholder="stok" />
            <input onChange={(e)=> handler(e)} id="hargasewa" value={data.hargasewa} type="number" placeholder="harga sewa" />
            <button type="submit" class="btn btn-primary">Add</button>
            <Link to='/books'>
            <button type="button" class="btn btn-danger">Back</button>
            </Link>
        </form>
    </div>
    </Layout>
   )
    
}

export default AddBook;
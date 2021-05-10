import React,{Component,useState,useEffect} from 'react';
import {Layout} from '../layout';
import service from '../service'
//import axio from 'axio'
//import {Table,Button} from 'reactstrap'


const Books = ({judulBuku,pengarang,stok,hargasewa}) => {
    
    const [books,setBooks] = useState(null);

  const retBooks = async () => {
    try{
        const resp = await service.getAllBooks();
        setBooks(resp.data);
    }catch(error){
      console.log(error);
    }
  } 

  useEffect(()=>{
      retBooks();
  },[])

  if(!books){
    return (
      <div class="container">Loading...</div>
    )
  }

  return(
    <Layout>
    <div class="mt-2">
    <button type="button" class="btn btn-primary">+ Add Book</button>
    </div>
    <table class="table mt-1">
        <thead>
            <tr>
                <th>Judul Buku</th>
                <th>Pengarang</th>
                <th>Stok</th>
                <th>Harga Sewa</th>
                <th>Menu</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{judulBuku}</td>
                <td>{pengarang}</td>
                <td>{stok}</td>
                <td>{hargasewa}</td>
                <td>
                <button type="button" class="btn btn-success me-md-2">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    </Layout>
  );   
   
}

export default Books;
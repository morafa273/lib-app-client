import React,{useState,useEffect} from 'react';
import {Layout} from '../layout';
import {Link,useHistory,useParams} from 'react-router-dom'
//import service from '../service'
import axios from 'axios';
//import {Table,Button} from 'reactstrap'


const Books = () => {

  const url = 'http://localhost:5000/books';

  const [books,setBooks] = useState([]);

  useEffect(()=>{
    fetch(url)
  .then((res)=> res.json())
  .then(json => {
    console.log(json);
    setBooks(json);
  });
  },[])

  

  // data test
  // const books = [
  //   {
  //     judulBuku : "Harry Potter I",
  //     pengarang : "JK.Rowling",
  //     stok : 3,
  //     hargasewa : 9500
  //   },
  //   {
  //     judulBuku : "Harry Potter II",
  //     pengarang : "JK.Rowling",
  //     stok : 4,
  //     hargasewa : 10000
  //   }
  // ]

  function deleteBook(id){
    if(window.confirm('Hapus Data Buku ?')){
        axios.delete(url+'/'+id);
        window.location.reload();
      }
  }

  

  return(
    <Layout>
    <div class="mt-2">
    <Link to="/addbook">
          <button type="button" class="btn btn-primary">+ Add Book</button>
    </Link>
    </div>
    <table class="table table-striped mt-1">
        <thead>
            <tr>
                <th>#</th>
                <th>Judul Buku</th>
                <th>Pengarang</th>
                <th>Stok</th>
                <th>Harga Sewa</th>
                <th>Menu</th>
            </tr>
        </thead>
        <tbody>
        { (books.length > 0) ? books.map( (book, index) => {
           return (
            <tr key={ index }>
              <td>{index+1}</td>
              <td>{ book.judulBuku }</td>
              <td>{ book.pengarang }</td>
              <td>{ book.stok}</td>
              <td>{ book.hargasewa }</td>
              <td>
               <Link to={{pathname:'/editbook',state: book.id}}>
                  <button type="button" class="btn btn-success me-md-2">Edit</button>
               </Link>
                
              
                <button onClick={()=> deleteBook(book.id)} type="button" class="btn btn-danger">Delete</button>
                </td>
            </tr>
          )
         }) : <tr><td colSpan="5">Loading...</td></tr> }
        </tbody>
    </table>
    </Layout>
  );   
   
}

export default Books;
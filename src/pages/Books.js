import React,{useState,useEffect} from 'react';
import {Layout} from '../layout';
import {Link} from 'react-router-dom'
//import service from '../service'
//import axio from 'axio'
//import {Table,Button} from 'reactstrap'


const Books = ({props}) => {

  const [books,setBooks] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/books')
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

  return(
    <Layout>
    <div class="mt-2">
    <Link to="/addbook">
          <button type="button" class="btn btn-primary">+ Add Book</button>
    </Link>
    </div>
    <table class="table mt-1">
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
                <Link to='/editbook'>
                  <button type="button" class="btn btn-success me-md-2">Edit</button>
                </Link>
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

export default Books;
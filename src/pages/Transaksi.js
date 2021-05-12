import React,{useState,useEffect} from 'react';
import {Layout} from '../layout';
import {Link} from 'react-router-dom'

const Transaksi = () => {
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
  
    
    return(
      <Layout>
      <div class="mt-2">
       <h2>Daftar Buku</h2>
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
                 <Link to={{pathname:'/detiltrans',state: book.id}}>
                    <button type="button" class="btn btn-info me-md-2">Pinjam</button>
                 </Link>
                  
                  </td>
              </tr>
            )
           }) : <tr><td colSpan="5">Loading...</td></tr> }
          </tbody>
      </table>
      </Layout>
    );   
    
}

export default Transaksi;
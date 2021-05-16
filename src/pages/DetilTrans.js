import React,{useEffect,useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import { Layout } from '../layout';
import moment from 'moment';
import Axios from 'axios'


const DetilTrans = () => {
    const [users,setUsers] = useState([]);
    const [total,setTotal] = useState(0);

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then((res)=> res.json())
        .then(json => {
            console.log(json);
            setUsers(json);
    });
    },[])
    const location = useLocation()
    const dataBuku = location.state
    //console.log('ini adalah data : '+dataBuku.hargasewa);


    const [sewa,setSewa] = useState({
        idUser : "",
        idBuku : dataBuku.id,
        tanggalKembali : "",
        totalBiaya : ""
    });

    function onHandler(e){
        const newdata = {...sewa} ;
        newdata[e.target.id] = e.target.value ;
        setSewa(newdata);
        console.log(newdata);
    }

    function hitungTotal(e){
        e.preventDefault();
        const today = moment(new Date());
        const date2 = moment(new Date(sewa.tanggalKembali));
        const diff = date2.diff(today);
        const diffDuration = moment.duration(diff);
        const selisihHari = diffDuration.days()+1;
        console.log(selisihHari);
        const jumlah = selisihHari * dataBuku.hargasewa;
        setTotal(jumlah)
        sewa.totalBiaya = jumlah;
        console.log(sewa.totalBiaya);
    }

    function submit(e){
        if(sewa.idUser==="" || sewa.idBuku==="" || sewa.tanggalKembali==="" || sewa.totalBiaya===""){
             alert('Data transaksi tidak lengkap!');
        }else{
         e.preventDefault();
         Axios.post('http://localhost:5000/rents',{
             idUser : sewa.idUser,
             idBuku : sewa.idBuku,
             tanggalKembali : sewa.tanggalKembali,
             totalBiaya : sewa.totalBiaya
         }).then(res=>{
             console.log(res.sewa);
         })
         const newStok = dataBuku.stok - 1
         Axios.patch('http://localhost:5000/books/'+dataBuku.id,{
            stok : newStok
      }).then(res=>{
          console.log(res.val);
      })
         alert('Data Transaksi Telah Ditambahkan')
        }
     }

    return(
        <Layout>
            <div class="mt-3">
            <h2>Masukkan ID User : </h2>    
            <select class="form-select" multiple aria-label="multiple select example" onChange={(e)=>onHandler(e)} id="idUser">
                {
                    users.map((user,index)=>(
                        <option key={index}>{user.id}</option>
                    ))
                }
            </select>
            <h2 class="mt-3">Masukkan Tanggal Pengembalian : </h2>
            <input  onChange={(e)=>onHandler(e)} id="tanggalKembali" type="date"/>
            <br/>
            <div class="mt-3">
            <button  type="button" class="btn btn-primary" onClick={(e)=>hitungTotal(e)} value={sewa.tanggalKembali}>Hitung Biaya</button>
            <input onChange={(e)=>onHandler(e)} id="totalBiaya" class="form-control mt-3"  type="text" placeholder="total" value={total} disabled />
            </div>
            <div class="mt-3">
                <button  type="button" class="btn btn-primary me-md-2" onClick={(e)=>submit(e)}>Selesai</button>
                <Link to='/transaksi'>
                    <button  type="button" class="btn btn-danger">Batal</button>
                </Link>
            </div>
            </div>
        </Layout>
    );
}

export default DetilTrans;
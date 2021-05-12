import React,{useEffect,useState} from 'react'
import {useLocation} from 'react-router-dom'
import { Layout } from '../layout';


const DetilTrans = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then((res)=> res.json())
        .then(json => {
            console.log(json);
            setUsers(json);
    });
    },[])
    const location = useLocation()
    const idBuku = location.state

    const [sewa,setSewa] = useState({
        idUser : "",
        idBuku : idBuku,
        tanggalKembali : "",
        totalBiaya : ""
    });

    function onHandler(e){
        const newdata = {...sewa} ;
        newdata[e.target.id] = e.target.value ;
        setSewa(newdata);
        console.log(newdata);
    }

    return(
        <Layout>
            <div class="mt-3">
            <h2>Pilih Nama User : </h2>    
            <select class="form-select" multiple aria-label="multiple select example">
                {
                    users.map((user,index)=>(
                        <option key={index}>{user.userName}</option>
                    ))
                }
            </select>
            <h2 class="mt-3">Masukkan Tanggal Pengembalian : </h2>
            <input  onChange={(e)=>onHandler(e)} id="tanggalKembali" type="date"/>
            <br/>
            <div class="mt-3">
            <button  type="button" class="btn btn-primary">Hitung Biaya</button>
            <input onChange={(e)=>onHandler(e)} class="form-control mt-3" id="disabledInput" type="text" placeholder="total" disabled />
            </div>
            <div class="mt-3">
                <button  type="button" class="btn btn-primary me-md-2">Selesai</button>
                <button  type="button" class="btn btn-danger">Batal</button>
            </div>
            </div>
        </Layout>
    );
}

export default DetilTrans;
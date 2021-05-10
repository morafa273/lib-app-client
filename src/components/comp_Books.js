import React from 'react';

const bookItems = ({id,judulBuku,pengarang,stok,hargasewa}) => {
    return (
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
                    
                    <td>Sample judul</td>
                    <td>Sample pengarang</td>
                    <td>10</td>
                    <td>5000</td>
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
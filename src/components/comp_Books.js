import React from 'react';

const bookItems = () => {
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
                    
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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

export default bookItems;
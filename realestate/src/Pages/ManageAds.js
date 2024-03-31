import React, { useState, useEffect } from 'react';
import Header from '../Components/Admin/Header';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

function ManageAds() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(res => {
        const filteredColumns = Object.keys(res.data[0]).filter(column => column !== '_id' && column !== 'image' && column !== '__v');
        setColumns(filteredColumns);
        setRecords(res.data);
      })
  }, []);

  const handleEdit = (id) => {
    // Implement your edit logic here, e.g., redirect to edit page
    console.log('Edit:', id);
  }

  const handleDelete = async (id) => {
    try {
      // Make an HTTP DELETE request to your backend API
      await axios.delete(`http://localhost:5000/api/data/${id}`);
  
      // If the delete request is successful, remove the item from the records state
      setRecords(prevRecords => prevRecords.filter(record => record._id !== id));
  
      console.log('Item deleted successfully:', id);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }
  return (
    <div>
      <Header />
      <div className='container mt-5'>
        <table className='table' style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead className='thead-dark'>
            <tr>
              {columns.map((c, i) => (
                <th key={i} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{c}</th>
              ))}
              <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                {columns.map((column, j) => (
                  <td key={j} style={{ border: '1px solid #ddd', padding: '8px' }}>{d[column]}</td>
                ))}
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <IconButton onClick={() => handleEdit(d._id)} className="btn btn-sm btn-primary mr-2">
                    <EditIcon/>
                  </IconButton>
                  <IconButton onClick={() => handleDelete(d._id)} className="btn btn-sm btn-danger">
                    <DeleteIcon/>
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageAds;

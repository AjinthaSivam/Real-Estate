import React, { useState, useEffect } from 'react';
import Header from '../Components/Admin/Header';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import EditForm from './EditForm';
import Modal from 'react-modal'


Modal.defaultStyles.overlay = {
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};



function ManageAds() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const [isOpen, setIsOpen] = useState(false)

  const [editFormData, setEditFormData] = useState({
    name: '',
    address: '',
    sqft: '',
    description: '',
    price: '',
    contact: '',
    image: '',
    _id: ''
});

  useEffect(() => {
    getFetchData()
  }, []);

  const getFetchData = async() => {
      axios.get('http://localhost:5000/api/data')
      .then(res => {
        const filteredColumns = Object.keys(res.data[0]).filter(column => column !== '_id' && column !== 'image' && column !== '__v');
        setColumns(filteredColumns);
        setRecords(res.data);
      })
  }

  const handleEditOnchange = async(e) => {
    const {value, name} = e.target
    setEditFormData((preve) => {
      return{
        ...preve,
        [name] : value
      }
    })
  }

  const handleUpdate = async(e) => {
    e.preventDefault()
    
    const data = await axios.put("http://localhost:5000/api/update", editFormData)
    if(data.data.success) {
      getFetchData()
      setIsOpen(false)
    }
  }

  const handleEdit = (el) => {
    setEditFormData(el)
    setIsOpen(true)
  }

  const handleDelete = async (id) => {
    const data = await axios.delete("http://localhost:5000/api/delete/" + id)

    if (data.data.success) {
      getFetchData()
      alert(data.data.message)
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
                  <IconButton onClick={() => handleEdit(d)} className="btn btn-sm btn-primary mr-2">
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
        <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        {/* Edit form content here */}
        <EditForm
          handleSubmit={handleUpdate}
          handleInputChange={handleEditOnchange}
          formData={editFormData}
        />
      </Modal>
      
      </div>
    </div>
  );

  
}

export default ManageAds;

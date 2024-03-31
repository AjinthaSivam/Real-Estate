import React, {useState} from 'react'
import Header from '../Components/Admin/Header'
import { Button, FormControl, FormGroup, Input, InputLabel } from '@mui/material'
import { styled } from '@mui/system';
import axios from 'axios';

const FormContainer = styled('div') ({
    
        width: '50%',
        margin: 'auto',
        padding: 20,
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
        paddingTop: 20,
        marginTop: 60
    
})

const SpacedFormControl = styled(FormControl)({
    marginBottom: 20,
})

function CreateAds () {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        sqft: '',
        description: '',
        price: '',
        contact: '',
        image: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:5000/api/lands', formData);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

  return (
    <div>
        <Header/>
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <FormGroup style={{marginBottom:'20'}}>
                    <SpacedFormControl>
                        <InputLabel>Land Name</InputLabel>
                        <Input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </SpacedFormControl>
                    <SpacedFormControl>
                        <InputLabel>Address</InputLabel>
                        <Input
                            type='text'
                            name='address'
                            value={formData.address}
                            onChange={handleInputChange}
                        />
                    </SpacedFormControl>
                    <SpacedFormControl>
                        <InputLabel>Square Ft</InputLabel>
                        <Input
                            type='nmuber'
                            name='sqft'
                            value={formData.sqft}
                            onChange={handleInputChange}
                        />
                    </SpacedFormControl>
                    <SpacedFormControl>
                        <InputLabel>Description</InputLabel>
                        <Input
                            type='text'
                            name='description'
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                    </SpacedFormControl>
                    <SpacedFormControl>
                        <InputLabel>Price</InputLabel>
                        <Input
                            type='number'
                            name='price'
                            value={formData.price}
                            onChange={handleInputChange}
                        />
                    </SpacedFormControl>
                    <SpacedFormControl>
                        <InputLabel>Contact Number</InputLabel>
                        <Input
                            type='text'
                            name='contact'
                            value={formData.contact}
                            onChange={handleInputChange}
                        />
                    </SpacedFormControl>
                    <SpacedFormControl>
                        <InputLabel>Image Link</InputLabel>
                        <Input
                            type='text'
                            name='image'
                            value={formData.image}
                            onChange={handleInputChange}
                        />
                    </SpacedFormControl>
                    <Button variant='contained' color='primary' style={{marginTop:20, width:'15%'}} type='submit'>Create Ad</Button>
                </FormGroup>
            </form>
        
        </FormContainer>
        
    </div>
  )
}

export default CreateAds
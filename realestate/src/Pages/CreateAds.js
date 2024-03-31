import React from 'react'
import Header from '../Components/Admin/Header'
import { Button, FormControl, FormGroup, Input, InputLabel } from '@mui/material'
import { styled } from '@mui/system';

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
    
  return (
    <div>
        <Header/>
        <FormContainer>
        <FormGroup style={{marginBottom:'20'}}>
            <SpacedFormControl>
                <InputLabel>Land Name</InputLabel>
                <Input/>
            </SpacedFormControl>
            <SpacedFormControl>
                <InputLabel>Address</InputLabel>
                <Input/>
            </SpacedFormControl>
            <SpacedFormControl>
                <InputLabel>Square Ft</InputLabel>
                <Input/>
            </SpacedFormControl>
            <SpacedFormControl>
                <InputLabel>Description</InputLabel>
                <Input/>
            </SpacedFormControl>
            <SpacedFormControl>
                <InputLabel>Price</InputLabel>
                <Input/>
            </SpacedFormControl>
            <SpacedFormControl>
                <InputLabel>Contact Number</InputLabel>
                <Input/>
            </SpacedFormControl>
            <SpacedFormControl>
                <InputLabel>Image Link</InputLabel>
                <Input/>
            </SpacedFormControl>
            <Button variant='contained' color='primary' style={{marginTop:20, width:'15%'}}>Create Ad</Button>
        </FormGroup>
        </FormContainer>
        
    </div>
  )
}

export default CreateAds
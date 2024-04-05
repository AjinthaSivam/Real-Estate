import React from 'react';

import bag from './Image/serviceIcon/pricing.jpg';
import FormExample from './formExample';
import footer from './Image/footer';


const Contacts = () => {

  return (
    <>
    <br/><br/><br/>
    <div style={{position:'relative', width: '1500px', height:'300px'}}>
        <img src={bag} style={{ width: '100%', height: '100%', objectFit: 'cover' }}  />
    </div>
    <br/>
    <br/>

      <FormExample/>

      <br/><br/>
      <footer/>
    </>
  )
}

export default Contacts;


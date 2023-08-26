import React from 'react';
import { useState } from 'react';

import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('md')]: {
      padding: '20px 40px'
  }
}))

const Image = styled('img')({
  padding: '15px 20px',
  border: '1px solid #f0f0f0',
  width: '95%'
});

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 50px;
  color: #FFF;
`;

const ActionItem = ({product}) => {
  // console.log("productreal"+product)
 
    return (
      <LeftContainer>
          <Image src={product?.url} /><br />
          <StyledButton 
          // onClick={() => addItemToCart()} s
          tyle={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
          <StyledButton 
          // onClick={() => buyNow()} 
          style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
      </LeftContainer>
  )
}




export default ActionItem
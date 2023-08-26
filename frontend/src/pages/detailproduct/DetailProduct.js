import React ,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch,useSelector} from 'react-redux';
import {getproductdetail} from "../../reduxstore/action/productAction";
import { styled, Box, Typography, Grid } from '@mui/material';
import ActionItem from '../../component/ProductDetails/ActionItem';
import ProductDetail from '../../component/ProductDetails/Productdetail';

const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;


const DetailProduct = () => {

  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const {id}=useParams();
    const {product}=useSelector(state=>state.productDetail);
    const dispatch=useDispatch();
    useEffect(()=>{
    
         dispatch(getproductdetail(id))
    },[dispatch,id])
  

  return (
    <Component>
        <Box></Box>
        { product.title && Object.values(product).length>1 &&
            <Container container> 

                <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItem product={product}/>
                </Grid>
                <RightContainer item lg={8} md={8} sm={8} xs={12}>
                    <Typography>{product?.title?.longTitle}</Typography>
                    <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                        8 Ratings & 1 Reviews
                        <span><img src={fassured} style={{width: 77, marginLeft: 20}} /></span>
                    </Typography>
                    <Typography>
                        <span style={{ fontSize: 28 }}>₹{product?.price?.cost}</span>&nbsp;&nbsp;&nbsp; 
                        <span style={{ color: '#878787' }}><strike>₹{product?.price?.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                        <span style={{ color: '#388E3C' }}>{product?.price?.discount} off</span>
                    </Typography>
                    <ProductDetail  product={product}/>
                </RightContainer>
            </Container>
        }   
    </Component>
)
}

export default DetailProduct

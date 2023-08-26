import React from 'react';
import { bannerData } from '../../data/banner';
import { Grid ,styled} from '@mui/material';
const Wrapper=styled(Grid)`
    margin:9px;
    // border:2px solid blue;
    width:98vw;
`
const Bannerproduct = () => {
  return (
    <div>
        < Wrapper lg={12} md={12} sm={12} xs={12} container>
        {
         bannerData?.map(ele=>(
          
            <Grid item lg={4} md={4} sm={12} xs={12}>
            <img src={ele?.url ?? ele} width="100%" height="201px"/>
            </Grid>
            
         ))   
        }
        </ Wrapper>
      
    </div>
  )
}

export default Bannerproduct

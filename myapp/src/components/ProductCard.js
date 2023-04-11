import { Box, Rating } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProductCard({product}) {
 
  const {title,image,description,rating}=product
  const {rate}=rating
  return (
    <>
    <Box sx={{width:'95%',backgroundColor:'lavender',borderRadius:'20px 20px',alignItems:'center',justifyContent:'center',display:'flex'}}>
      <Card sx={{boxShadow:'0 0 10px black'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={image}
        sx={{padding:'10px',borderRadius:'20px',height:200,width:200}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Rating  name="half-rating" defaultValue={rate} readOnly/>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Box>
      </>
  )
}

export default ProductCard
import { Box } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import switzerland from '../assests/switzerland.jpg'

function ProductCard() {
  return (
    <>
    <Box sx={{width:'95%',backgroundColor:'lavender',borderRadius:'20px 20px',alignItems:'center',justifyContent:'center',display:'flex'}}>
      <Card sx={{boxShadow:'0 0 10px black'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={switzerland}
        sx={{padding:'10px',borderRadius:'20px'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Switzerland
        </Typography>
        <Typography variant="body2" color="text.secondary">
The amazing natural beauty of the majestic Alps, the placid lakes, quaint villages, cosmopolitan cities and towering castles – that's just some of what Switzerland has to offer. Add to it some shopping, wine tasting, delectable chocolates and cheeses and it gets even better.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Box>
      </>
  )
}

export default ProductCard
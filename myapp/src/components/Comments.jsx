import React from 'react'
import  Box  from '@mui/material/Box';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import  Typography  from '@mui/material/Typography';
import { Card, CardMedia, Stack } from '@mui/material';
import Badge from '@mui/material/Badge';
import friends from '../assests/friends.webp'



function Comments() {
  return (
    <>
    <Stack flex={1}  sx={{bgcolor:'yellowgreen',borderRadius:'0 10px 20px 0',margin:'5px',display:{xl:'block',lg:'block',md:'none',sm:'none',xs:'none'},marginRight:'5px'}}>
    <Box sx={{display:'flex',flexDirection:'column',position:'fixed' ,backgroundColor: '#e6e6e6',width:'300px',height:'100vh',borderRadius:'0 20px 20px 0',padding:'10px', right:'10px'}}>
    <Box sx={{display:'flex',flexDirection:'row',padding:'10px',color:'black',justifyContent:'space-evenly',backgroundColor:'#e6e6e6',alignItems:'center'}}>
      <Badge badgeContent={4} color="secondary">
        <NotificationsNoneIcon color="action" />
      </Badge>
      <AccountCircleRoundedIcon sx={{border:'2px #808080 solid',borderRadius:'25px'}}/>
      <Typography>GokulSarah</Typography>
    </Box>
    <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        image={friends}
        sx={{borderRadius:'20px'}}
      />
      </Card>
    </Box>
      </Stack>
    </>
  )
}

export default Comments;
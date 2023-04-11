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
    <Stack flex={1}  sx={{maxWidth:'100%',borderRadius:'0 20px 20px 0',backgroundColor:'#e6e6e6',margin:'5px',width:'100%'}}>
    <Box sx={{display:'flex',flexDirection:'column',position:'fixed'}}>
    <Box sx={{display:'flex',flexDirection:'row',padding:'10px',color:'black',marginLeft:'5px',justifyContent:'space-evenly',right:'5px',backgroundColor:'#e6e6e6'}}>
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
        sx={{padding:'10px',borderRadius:'20px'}}
      />
      </Card>
    </Box>
      </Stack>
    </>
  )
}

export default Comments;
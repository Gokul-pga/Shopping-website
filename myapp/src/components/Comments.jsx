import React from 'react'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

function Comments() {
  return (
    <>
    <Box sx={{backgroundColor:'grey',height:'100%',width:'100%',display:'flex',flexDirection:'column'}}>
    <Box sx={{margin:'10px'}}>
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      </Box>
      <Box sx={{display:'flex',flexDirection:'column',margin:'19px'}}>
        <Typography marginBottom='9px'>Your Group</Typography>
       <Box  sx={{display:'flex',flexDirection:'row',marginBottom:'9px'}}> <AccountCircle /> <Typography>Figma Community</Typography></Box>
       <Box  sx={{display:'flex',flexDirection:'row',marginBottom:'9px'}}> <AccountCircle /> <Typography>Sketch Community</Typography></Box>

      </Box>

      <Box sx={{display:'flex',flexDirection:'column',margin:'19px'}}>
        <Typography marginBottom='9px'>Friends </Typography>
       <Box  sx={{display:'flex',flexDirection:'row',marginBottom:'9px',justifyContent:'space-between'}}> <AccountCircle /> <Typography>Figma Community</Typography><Typography>Time</Typography> </Box>
       <Box  sx={{display:'flex',flexDirection:'row',marginBottom:'9px',justifyContent:'space-between'}}> <AccountCircle /> <Typography>Sketch Community</Typography><Typography>Online</Typography></Box>

      </Box>

      </Box>
    </>
  )
}

export default Comments;
import  Box  from '@mui/material/Box';
import React from 'react'
import People from '../components/People'
import Comments from '../components/Comments'
import { Stack } from '@mui/material';


function Layout({children}) {
 
  return (
    <>

<Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', backgroundColor: 'white', justifyContent: 'space-between', margin: '5px' }}>
        <People />
        <Stack spacing={2} flex={2} sx={{alignItems:'center'}} >
      {children}
        </Stack> 
        <Comments />
        </Box>
    </>
  )
}

export default Layout;
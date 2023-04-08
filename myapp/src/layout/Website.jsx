import React from 'react'
import People from '../components/People'
import Comments from '../components/Comments'
import Layout from './Layout'
import { Box } from '@mui/material'

function Website() {
  return (
    <>
    <Box sx={{display:'flex',flexDirection:'row',height:'100vh',width:'100%',backgroundColor:'white',justifyContent:'space-between'}}>
    <People/>
    <Layout/>
    <Comments/>
    </Box>
    </>
  )
}

export default Website;
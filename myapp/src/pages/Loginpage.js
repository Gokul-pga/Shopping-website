import { FormGroup, TextField } from '@mui/material'
import React from 'react'

export default function Loginpage() {
    const [inputData, setinputData] = useState({
        name:'',
        email:'',
        password:''
    })
    const [validator, setvalidator] = useState(false)
    const {name,password,email}=inputData
    const handleSubmit =()=>{
        if(name !=="" && email !=="" && password !==""){

        }else{
            setvalidator(true)
        }
    }
  return (
    <div>
        <FormGroup>
            <TextField label='Name' type='text' value={name} onChange={(e)=>{setinputData()}}/>
        </FormGroup>
    </div>
  )
}

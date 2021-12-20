import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';




export default function BasicTextFields() {
    function EnCosola(){
        console.log("fi");
    }
   
    
    
  return (
   
   
    <Stack direction="row" spacing={1}>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '10ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
     <Button variant="contained" size="large" onClick={EnCosola} >
         <AddCircleOutlineIcon></AddCircleOutlineIcon>
      </Button>
      
    </Box>
    </Stack>
    
    

  )}
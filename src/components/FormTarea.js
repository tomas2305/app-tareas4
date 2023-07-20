import { Label } from "@mui/icons-material";
import { Box, FormControl, TextField, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function FormTarea(props) {

    const [input, setInput] = useState('')

  function addTarea(event){
    event.preventDefault();
    const newID=uuidv4();
    props.addTarea({id:newID, input: input });
    setInput('');
  }

  function handleChange(event){
    setInput(event.target.value)
  }

  return (
    <Box component="form" onSubmit={addTarea}>
      <FormControl sx={{width:'100%', my:2}} >
        <TextField onChange={handleChange} variant="filled" label='Nueva Tarea' value={input}/>
      </FormControl>
    </Box>
  );
}

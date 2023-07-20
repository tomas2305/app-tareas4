import { Box } from '@mui/material';
import React, { useState } from 'react';
import FormTarea from './FormTarea';
import Tarea from './Tarea';
import { ConstructionOutlined } from '@mui/icons-material';
 
export default function Tareas(){

    const [tareas, setTareas] = useState([])

    function addTarea(tarea){
        setTareas([...tareas, tarea]);
    }

    function deleteTarea(id){
        setTareas(tareas.filter(tarea => tarea.id !== id));
    }

    return(
     <Box>
        <FormTarea addTarea={addTarea}/>
        {tareas.map(tarea => (
            <Tarea id={tarea.id} deleteTarea={deleteTarea} key={tarea.id}>{tarea.input}</Tarea>
        ))}
     </Box>
    );
}
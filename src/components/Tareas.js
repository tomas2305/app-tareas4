import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import FormTarea from './FormTarea';
import Tarea from './Tarea';
 
export default function Tareas(){

    const [tareas, setTareas] = useState(initialTareas)

    function initialTareas(){
        console.log('Llamada initial')
        let initialTareas = []
        for (let i = 0; i < window.localStorage.length; i++) {
            const key = window.localStorage.key(i);
            const value = window.localStorage.getItem(key)
            initialTareas.push({id:key, input:value})
        }
        return initialTareas;
    }

    function addTarea(tarea){
        setTareas([...tareas, tarea]);
        window.localStorage.setItem(tarea.id, tarea.input)
        console.log('agregada')
    }

    function deleteTarea(id){
        setTareas(tareas.filter(tarea => tarea.id !== id));
        console.log('borrar')
        window.localStorage.removeItem(id);
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
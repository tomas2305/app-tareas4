import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import FormTarea from "./FormTarea";
import Tarea from "./Tarea";

export default function Tareas() {
  const [tareas, setTareas] = useState(initialTareas);

  function initialTareas() {
    console.log("Llamada initial");
    let initialTareas = [];
    for (let i = 0; i < window.localStorage.length; i++) {
      const key = window.localStorage.key(i);
      const value = window.localStorage.getItem(key);
      const tarea = JSON.parse(value);
      initialTareas.push({
        id: key,
        input: tarea.input,
        isTachada: tarea.isTachada,
      });
    }
    return initialTareas;
  }

  function addTarea(tarea) {
    setTareas([...tareas, tarea]);
    const value = JSON.stringify({
      input: tarea.input,
      isTachada: tarea.isTachada,
    });
    window.localStorage.setItem(tarea.id, value);
    console.log("agregada");
  }

  function deleteTarea(id) {
      console.log(id);
    window.localStorage.removeItem(id);
    const newTareas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(newTareas);
  }

  function tacharTarea(tarea) {
      console.log('tacharTarea');
    const value = JSON.stringify({
      input: tarea.input,
      isTachada: tarea.isTachada,
    });
    window.localStorage.setItem(tarea.id, value);
  }

  return (
    <Box>
      <FormTarea addTarea={addTarea} />
      {tareas.map((tarea) => (
        <Tarea
          isTachada={tarea.isTachada}
          tacharTarea={tacharTarea}
          id={tarea.id}
          deleteTarea={deleteTarea}
          key={tarea.id}
        >
          {tarea.input}
        </Tarea>
      ))}
    </Box>
  );
}

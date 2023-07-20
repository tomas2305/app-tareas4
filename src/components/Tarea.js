import { useTheme } from "@emotion/react";
import { Delete } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

export default function Tarea(props) {
  const [isTachada, setIsTachada] = useState(props.isTachada);
  const theme = useTheme();
  const color1 = theme.palette.secondary.main;
  const color2 = theme.palette.warning.main;
  const color3 = theme.palette.primary.main;
  const tareaStyle = {
    py: 2,
    pl: 2,
    borderRadius: 1,
    "&:hover": {
      bgcolor: color3,
      cursor: "pointer",
    },
  };

  function tacharTarea() {
    setIsTachada(!isTachada);
    props.tacharTarea({
      id: props.id,
      input: props.children,
      isTachada: !isTachada
    });
  }

  function deleteTarea(event) {
    props.deleteTarea(props.id);
  }

  return (
    <Grid
      my={2}
      container
      bgcolor={color1}
      width="100%"
      textAlign="left"
      sx={
        isTachada
          ? {
              ...tareaStyle,
              bgcolor: color3,
              textDecorationLine: "line-through",
            }
          : tareaStyle
      }
    >
      <Grid item xs={11} onClick={tacharTarea}>
        <Typography mt={1} variant="body2" color={color2}>
          {props.children}
        </Typography>
      </Grid>
      <Grid item xs={1} textAlign='right'>
        <Button color="secondary" onClick={deleteTarea}>
          <Delete sx={{ color: color2 }} />
        </Button>
      </Grid>
    </Grid>
  );
}

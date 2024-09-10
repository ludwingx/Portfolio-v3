"use client";

import { useFormState } from "react-dom";

import { Box, Container, Typography, TextField, Button } from "@mui/material";
import logoutAction from "@/app/[locale]/login/logoutAction";

export default function Login() {
  const [error, formAction] = useFormState(logoutAction, undefined);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >

      <form action={formAction} >
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 2, background: "red", "&:hover": { background: "black" } }}
        >
          Cerrar sesión
        </Button>
      </form>
    </Container>
  );
}
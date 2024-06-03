import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

interface AuthProps {
  submitLabel: string;
  onSubmit: (credentials: { email: string; password: string }) => Promise<void>;
  children: React.ReactNode;
}

const Auth = ({ submitLabel, onSubmit, children }: AuthProps) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        maxWidth: {
          xs: "70%",
          md: "35%",
        },
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <TextField
        type="email"
        label="email"
        variant="outlined"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      ></TextField>
      <TextField
        type="password"
        label="password"
        variant="outlined"
        value={password}
        onChange={(pass) => setPass(pass.target.value)}
      ></TextField>
      <Button
        variant="contained"
        sx={{
          marginBottom: 10,
          marginTop: 10,
          background: "#9e72c3",
        }}
        onClick={() => onSubmit({ email, password })}
      >
        {submitLabel}
      </Button>
      {children}
    </Stack>
  );
};

export default Auth;

import { Button, CircularProgress, Container, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useLogin, useNotify } from "react-admin"


function Login() {

    const Title = "Antara Admin - Login";
      
    useState(() => {
        document.title = Title;
    }, []);

    const login = useLogin();
    const notify = useNotify();
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await login({ username, password });
        } catch(error) {
            console.log(error);
            notify('Failed Login' + error);
        } finally {
            setLoading(false);
        }
    };

    function updateUsername(e) {
        setUsername(e.target.value);
    }

    function updatePassword(e) {
        setPassword(e.target.value);
    }

  return (
    <div>
        <Container maxWidth="sm">
            <Stack spacing={2} sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}>
                <Typography variant="h1" component="h3" >Login</Typography>
                <form onSubmit={handleSubmit} style={{ width: "80%" }}>
                    <Stack spacing={2}>
                        <TextField value={username} label="Username" variant="filled" onChange={updateUsername} disabled={loading} />
                        <TextField type="password" value={password} label="Password" variant="filled" onChange={updatePassword} disabled={loading} />
                        <Button type="submit" variant="contained" disabled={loading}>
                            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
                        </Button>
                    </Stack>
                </form>
            </Stack>
        </Container>
    </div>
  )
}

export default Login;
// import { client } from "../libs/client";
import axios from 'axios'
import useState from 'react-hook-use-state';
import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function Register() {

    const theme = createTheme();

    const sendData = (e) => {

        e.preventDefault();

        const form_data = {
            loginId: loginId,
            password: password,
            email: mail,
            fname: fname,
            lname: lname,
            age: age,
            gender: gender
        }

        axios.post('https://' + `care` + '.microcms.io/api/v1/register', form_data, {
            headers: {
                'Content-Type': 'application/json',
                'X-MICROCMS-API-KEY': "21c684e8af17424d9530608ce0ded737daea", // 作成したAPI-KEY
            }
        }).then((res) =>{
            console.log(res)
            if(res.status == 201){
                alert("転送完了")
                return window.location.reload()
            } else {
                alert("転送失敗")
                return window.location.reload()
            }
        })
    }

    const [loginId, setLoginId] = useState("");
    const [password, setPassword] = useState("");
    const [mail, setMail] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    const loginIdC = (e) => {
        setLoginId(e.target.value)
        console.log(e.target.value)
    }
    const passwordC = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }
    const mailC = (e) => {
        setMail(e.target.value)
        console.log(e.target.value)
    }
    const fnameC = (e) => {
        setFname(e.target.value)
        console.log(e.target.value)
    }
    const lnameC = (e) => {
        setLname(e.target.value)
        console.log(e.target.value)
    }
    const ageC = (e) => {
        setAge(e.target.value)
        console.log(e.target.value)
    }
    const genderC = (e) => {
        setGender(e.target.value)
        console.log(e.target.value)
    }

    return (
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            会員登録
                        </Typography>
                        <Box component="form" onSubmit={sendData} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="id"
                                label="ID"
                                name="id"
                                autoComplete="id"
                                onChange={loginIdC}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                type="password"
                                id="password"
                                label="パスワード"
                                name="password"
                                autoComplete="password"
                                onChange={passwordC}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="メール"
                                name="email"
                                autoComplete="email"
                                onChange={mailC}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="lname"
                                label="氏"
                                name="lname"
                                autoComplete="lname"
                                onChange={lnameC}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="fname"
                                label="名"
                                name="fname"
                                autoComplete="fname"
                                onChange={fnameC}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="age"
                                label="年齢"
                                name="age"
                                autoComplete="age"
                                onChange={ageC}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="gender"
                                label="性別"
                                name="gender"
                                autoComplete="gender"
                                onChange={genderC}
                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                転送
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href={`/`} variant="body2">
                                        戻る
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider >
    );
}
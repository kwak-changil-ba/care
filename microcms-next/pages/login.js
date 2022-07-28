
import * as React from 'react';
import axios from 'axios'
import useState from 'react-hook-use-state';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Login({ }) {

    console.log(process.env.NEXT_PUBLIC_API_KEY)
    console.log(process.env.NEXT_PUBLIC_G_API_KEY)
    console.log(process.env.NEXT_PUBLIC_Url)
    console.log(process.env.NEXT_PUBLIC_sdsad)
    console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)
    console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET)

    const router = useRouter()

    const { data: session } = useSession()

    const theme = createTheme();

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const inputId = (e) => {
        setId(e.target.value)
        console.log(e.target.value)
    }
    const inputPassword = (e) => {
        setPassword(e.target.value)
        console.log(e.target.value)
    }

    const sendData = (e) => {

        e.preventDefault();

        if(id == null && password == null){
            return alert("データを入力してください。")
        }

        const form_data = {
            loginId: id,
            password: password,
        }


        axios.post('https://care.microcms.io/api/v1/login', form_data, {
            headers: {
                'Content-Type': 'application/json',
                'X-MICROCMS-API-KEY': process.env.NEXT_PUBLIC_API_KEY, // 作成したAPI-KEY
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

    if (session) {
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
                        <Typography component="div" variant="h4">
                            「{session.user.name}」様は、すでにログイン完了しました。
                        </Typography>
                        <br/>
                        <Button
                            fullWidth
                            color="success"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => router.push('/')}
                        >
                            メインに移動
                        </Button>
                        <Button
                            fullWidth
                            color="secondary"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => signOut()}
                        >
                            ログアウト
                        </Button>
                    </Box>
                </Container>
            </ThemeProvider>
        )
    }

    return (

        <div>
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
                        <Typography component="div" variant="h4">
                            ログイン
                        </Typography>
                        <br />
                        <Typography component="div" variant="subtitle2">
                            ID, Passwordご入力の上, 「ログイン」ボタンをクリックしてください.
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
                                onChange={inputId}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="パスワード"
                                type="password"
                                name="password"
                                autoComplete="password"
                                onChange={inputPassword}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                ログイン
                            </Button>
                            <Button
                                fullWidth
                                color="warning"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => router.push('/register')}
                            >
                                会員登録
                            </Button>
                            <Button
                                fullWidth
                                color="secondary"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => signIn("google")}
                            >
                                Sign in with Google
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
        </div>
    );
}

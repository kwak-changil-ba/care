
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

export default function Form() {

    const theme = createTheme();

    let url = process.env.Url
    let key = process.env.API_KEY

    const sendData = (e) => {

        if(name == null && email == null && content == content){
            return alert("データを入力してください。")
        }

        console.log(url)
        console.log(key)

        e.preventDefault();

        const form_data = {
            name: name,
            email: email,
            content: content
        }


        axios.post('https://care.microcms.io/api/v1/contacts', form_data, {
            headers: {
                'Content-Type': 'application/json',
                'X-MICROCMS-API-KEY': `21c684e8af17424d9530608ce0ded737daea`, // 作成したAPI-KEY
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

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    const inputName = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
    }
    const inputEmail = (e) => {
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const inputContent = (e) => {
        setContent(e.target.value)
        console.log(e.target.value)
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
                        <Typography component="h1" variant="h5">
                            問い合わせ
                        </Typography>
                        <Box component="form" onSubmit={sendData} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="名前"
                                name="name"
                                autoComplete="name"
                                onChange={inputName}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="メール"
                                name="email"
                                autoComplete="email"
                                onChange={inputEmail}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="outlined-textarea"
                                label="内容"
                                rows={5}
                                placeholder="お問い合わせ内容を入力してください。"
                                multiline
                                onChange={inputContent}
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
        </div>
    );
}
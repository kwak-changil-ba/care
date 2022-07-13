// import { client } from "../libs/client";
import Link from "next/link";
import axios from 'axios'
import useState from 'react-hook-use-state';

export default function Home({ form }) {

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

    const formData = {
        loginId: loginId,
        password: password,
        mail: mail,
        fname: fname,
        lname: lname,
        age: age,
        gender: gender,
    }

    const show = async (e) => {
        e.preventDefault();
        console.log(formData);

        await axios.post('https://care.microcms.io/api/v1/form', formData, {
            headers: {
              'Content-Type': 'application/json',
              'X-MICROCMS-API-KEY': '21c684e8af17424d9530608ce0ded737daea', // 作成したAPI-KEY
            },
          })
    }

    return (
        <div>
            <center>
                <h1>会員登録</h1>
                <p>（POSTテスト）</p>

                <div>
                    <form name="login_form">
                        <div>
                            <input type="text" name="loginid" id="loginid" placeholder="ログインID" onChange={loginIdC} />
                        </div>
                        <br />
                        <div>
                            <input type="password" name="password" id="password" placeholder="パスワード" onChange={passwordC}/>
                        </div>
                        <br />
                        <div>
                            <input type="text" name="mail" id="mail" placeholder="メール" onChange={mailC}/>
                        </div>
                        <br />
                        <div>
                            <input type="text" name="fname" id="fname" placeholder="氏" onChange={fnameC}/>
                        </div>
                        <br />
                        <div>
                            <input type="text" name="lname" id="lname" placeholder="名" onChange={lnameC}/>
                        </div>
                        <br />
                        <div>
                            <input type="text" name="age" id="age" placeholder="年齢" onChange={ageC}/>
                        </div>
                        <br />
                        <div>
                            <input type="text" name="gender" id="gender" placeholder="性別" onChange={genderC}/>
                        </div>
                        <br />
                        <button type="submit" onClick={show}>登録</button>
                        <button type="button"><Link href={`/`}>戻る </Link></button>
                    </form>
                </div>
            </center>
        </div >
    );
}

// export const getStaticProps = async () => {
//     // const data = await client.get({ endpoint: "form" });
//     const data = await client.post({ endpoint: "form" });
//     return {
//         props: {
//             form: data.contents,
//         },
//     };
// };

// export const getStaticProps = async () => {
//     const data = await client.get({ endpoint: "form" });

//     return {
//         props: {
//             form: data.contents,
//         },
//     };
// };
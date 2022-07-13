import Link from "next/link";

export default function Home({ care }) {
    return (
        <div>
            <ul>
                <form name="login_form">
                    <center>
                        <h1>ログイン</h1>
                        <p>ID, Passwordご入力の上, 「認証」ボタンをクリックしてください.</p>
                    </center>
                    <div>
                        <center>
                            <div>
                                <input type="id" name="id" placeholder="ID" />
                            </div>
                            <br />
                            <div>
                                <input type="password" name="pass" placeholder="Password" />
                                {/* <input type="password" name="pass" placeholder="Password" onchange="" /> */}
                            </div>
                        </center>

                    </div>
                    <br />
                    <center>
                        <button type="button" onClick="">認証</button>
                        <button type="button"><Link href={`/`}>戻る </Link></button>
                    </center>
                </form>
            </ul>
        </div>
    );
}

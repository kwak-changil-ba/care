import { client } from "../libs/client";
import Link from "next/link";

export default function Home({ care }) {
    return (
        <div>
            <ul>
                <form name="login_form">
                    <center>
                        <h1>会員登録</h1>
                        <p>会員登録（POSTテスト）</p>
                    </center>
                    <div>
                        <center>
                            <div>
                                <input type="id" name="name" placeholder="Name" />
                            </div>
                            <br />
                            <div>
                                <input type="id" name="id" placeholder="ID" />
                            </div>
                            <br />
                            <div>
                                <input type="password" name="pass" placeholder="Password" />
                            </div>
                        </center>

                    </div>
                    <br />
                    <center>
                        <button type="button" onClick="">登録</button>
                        <button type="button"><Link href={`/`}>戻る </Link></button>
                    </center>
                </form>
            </ul>
        </div>
    );
}

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "care" });
  
    return {
      props: {
        care: data.contents,
      },
    };
  };
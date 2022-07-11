import Link from "next/link";

export default function Home({ care }) {
  return (
    <div>
      <ul>
        <center>
          <h1>メイン</h1>
          <p>microCMSテスト</p>
          <button type="button"><Link href={`/login`}>ログイン </Link></button>
          <button type="button"><Link href={`/register`}>会員登録 </Link></button>
          <button type="button"><Link href={`/toDo`}>リスト </Link></button>
        </center>
      </ul>
    </div>
  );
}
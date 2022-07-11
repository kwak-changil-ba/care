import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ care }) {
  return (
    <div>
      <ul>
        <center>
          <h1>ToDoList</h1>
          <p>作業内容（GETテスト）</p>
          <button type="button"><Link href={`/`}>戻る </Link></button>
        </center>
        {care.map((care) => (
          <li key={care.id}>
            <Link href={`/care/${care.id}`}>
              <a>{care.title}</a>
            </Link>
          </li>
        ))}
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
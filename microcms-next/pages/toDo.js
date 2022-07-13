import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ care, categories, cms }) {

  return (
    <div>
      <ul>
        <center>
          <h1>ToDoList</h1>
          <p>作業内容（GETテスト）</p>
          {/* {categories.map((categories) => (
            <>
              <h1 key={categories.id}>{categories.title}</h1>
              <img src={categories.file.url} key={categories.id + 1} />
            </>
          ))} */}
          <br />
          <button type="button"><Link href={`/`}>戻る </Link></button>
          <br />
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
  const data2 = await client.get({ endpoint: "categories" });
  const data3 = await client.get({ endpoint: "cms" });
  return {
    props: {
      care: data.contents,
      categories: data2.contents,
      cms: data3.contents,
    },
  };
};
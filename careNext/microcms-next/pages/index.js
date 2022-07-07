import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ care }) {
  return (
    <div>
      <ul>
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
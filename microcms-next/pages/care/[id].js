import { client } from "../../libs/client";
import Image from 'next/image'

export default function BlogId({ care }) {
  console.log(care)
  return (
    <main>
      <center>
        <h1>{care.title}</h1>
        <p>{care.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${care.body}`,
          }}
        />
        {
          (care.img == null)
            ? null
            : <Image src={care.img.url}  width={1000} height={1000} />}
      </center>
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "care" });

  const paths = data.contents.map((content) => `/care/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "care", contentId: id });

  return {
    props: {
      care: data,
    },
  };
};
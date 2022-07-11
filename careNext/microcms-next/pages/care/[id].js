import { client } from "../../libs/client";

export default function BlogId({ care }) {
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
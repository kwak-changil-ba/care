import Link from "next/link";
import { client } from "../libs/client";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Home({ care, categories, cms }) {

  return (
    <div>
      <ul>
        <center>
          <h1>お知らせ</h1>
          <p>作業内容（GETテスト）</p>
          <br />
          <button type="button"><Link href={`/`}>戻る </Link></button>
          <br />
          <Box sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }}>
            <List>
              {care.map((care) => (
                <ListItem disablePadding key={care.id}>
                  <ListItemButton component="a" href={`/care/${care.id}`} >
                    <ListItemText primary={care.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </center>
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
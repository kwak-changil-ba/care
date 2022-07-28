import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // clientId: "577616181608-hh5hdok6ctobeqjgn5h6chr1q7j6eoci.apps.googleusercontent.com",
      // clientSecret: "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",
    }),
  ],
  callbacks: { // googleログイン成功し処理1回実行,
    async signIn({ user, account, profile }) {
      console.log('ユーザ情報');
      console.log(user)
      console.log(account)
      console.log(profile)

      //DBにユーザ情報があったらログイン成功
      //DBにユーザ情報がなかったら会員登録ページに移動

      // const form_data = {
      //   loginId: id,
      //   password: password,
      // }

      // axios.post('https://care.microcms.io/api/v1/login', form_data, {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'X-MICROCMS-API-KEY': `21c684e8af17424d9530608ce0ded737daea`, // 作成したAPI-KEY
      //   }
      // }).then((res) => {
      //   console.log(res)
      //   if (res.status == 201) {
      //     alert("転送完了")
      //     return window.location.reload()
      //   } else {
      //     alert("転送失敗")
      //     return window.location.reload()
      //   }
      // })

      return true;
    }
  }
})
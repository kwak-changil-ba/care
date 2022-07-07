<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
     <h1 class="title">{{ body }}</h1>
      <h1 class="title">{{ text }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://care.microcms.io/api/v1/news`,
      {
        headers: { 'X-MICROCMS-API-KEY': '21c684e8af17424d9530608ce0ded737daea' }
      }
    )
    return data
  }
}
</script>
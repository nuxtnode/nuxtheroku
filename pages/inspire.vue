<template>
  <div>
    <h1> {{ title }} </h1>
    <p> Just check HTML source or inspect window.__NUXT__ </p>
  </div>
</template>
<script>
export default {
  asyncData (context) {
    // will be merged with data object,
    // so you can use {{ title }}
    return { title: 'async data' }
  }
}
</script>
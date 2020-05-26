<template>
  <div id="app" :class="$mq">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  #app {
    font-family: 'Roboto', sans-serif;
    color: #000000;
  }
</style>

<template>
  <div id="app" :class="$mq">
    <keep-alive>
      <router-view />
    </keep-alive>

    <div class="bottom-btns" v-if="!hideButtons">
      <button class="default-btn" v-if="$route.name === 'Preview'" @click="editData">Edit</button>
      <button class="default-btn" v-if="$route.name === 'Templates'" @click="editData">Create Own</button>
      <button class="default-btn" v-if="$route.name !== 'Preview'" @click="preview">Preview Mine</button>

      <button class="default-btn" v-if="$route.name === 'ResumeBuilder'" @click="viewTemplate">Template</button>
      <button class="default-btn" v-if="$route.name === 'Preview'" @click="download">Download Src</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      hideButtons: false
    }
  },
  methods: {
    preview () {
      this.$router.push({name: 'Preview'})
    },
    editData () {
      this.$router.push({name: 'ResumeBuilder'})
    },
    viewTemplate () {
      this.$router.push({name: 'Templates'})
    },
    download () {
      this.hideButtons = true
      setTimeout(() => {
        this.saveFile()
      })
    },
    saveFile () {
      var data = document.documentElement.innerHTML
      var blob = new Blob([data], {type: 'text/html'})
      
      let a = document.createElement('a');
      a.download = "resume.html";
      a.href = window.URL.createObjectURL(blob);
      a.click()

      setTimeout(() => {
        this.hideButtons = false
      })
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Roboto', sans-serif;
    color: #000000;
  }
</style>

<style scoped lang="scss">
  .bottom-btns {
    opacity: 0.8;
    position: fixed;
    bottom: 20px;
    right: 10px;
    display: flex;

    .default-btn {
      border-radius: 25px;
      padding: 10px 25px;
      margin: 0 15px;
    }
  }
</style>

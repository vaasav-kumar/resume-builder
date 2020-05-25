<template>
  <div>
    <router-view />
    <div v-show="!isPreview">
      <welcome />
      <sections v-for="index in sections" :key="index" :secId="index" />
      <div class="toggle">
        <p>Sections</p>
        <button @click="addSection">+</button>
        <button @click="reduceSection">-</button>
      </div>

      <projects v-for="index in projects" :key="index" :projId="index" />
      <div class="toggle">
        <p>Projects</p>
        <button @click="addProject">+</button>
        <button @click="reduceProject">-</button>
      </div>
    </div>

    <button class="default-btn" v-if="isPreview" @click="togglePreview">Edit</button>
    <button class="default-btn" v-else @click="togglePreview">Preview</button>
    <button class="default-btn" @click="download" style="right: 120px">Download</button>
  </div>
</template>

<script>
import Welcome from '../components/Welcome'
import Sections from '../components/Sections'
import Projects from '../components/Projects'

export default {
  name: 'ResumeBuilder',
  components: { Welcome, Sections, Projects },
  data () {
    return {
      sections: 1,
      projects: 1,
      isPreview: false
    }
  },
  methods: {
    addSection () {
      this.sections++
    },
    reduceSection () {
      if (this.sections) {
        this.sections--
      }
    },
    addProject () {
      this.projects++
    },
    reduceProject () {
      if (this.projects) {
        this.projects--
      }
    },
    togglePreview () {
      if (this.isPreview) {
        this.$router.push({name: 'ResumeBuilder'})
      } else {
        this.$router.push({name: 'Preview'})
      }
      this.isPreview = !this.isPreview
    },
    download () {
      var data = document.documentElement.innerHTML
      var blob = new Blob([data], {type: 'text/html'})
      
      let a = document.createElement('a');
      a.download = "resume.html";
      a.href = window.URL.createObjectURL(blob);
      a.click()
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/themes.scss';

  .toggle {
    background: $dark;
    padding: 20px;
    display: flex;
    justify-content: center;
    margin: 1% 1% 3%;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    p, button {
      font-size: 16px;
      font-weight: 500;
      color: $white;
    }
  }

  .default-btn {
    border-radius: 25px;
    padding: 10px 25px;
    opacity: 0.8;
    position: fixed;
    bottom: 20px;
    right: 10px;
  }
</style>

<template>
  <div>
    <router-view />

    <div v-show="$route.name === 'ResumeBuilder'">
      <h1>RESUME GENERATOR</h1>

      <welcome />

      <sections v-for="index in sections" :key="index" :secId="index" />
      <div class="toggle">
        <p>Sections</p>
        <button @click="addSection">
          <i class="fas fa-plus-circle" />
        </button>
        <button @click="reduceSection">
          <i class="fas fa-minus-circle" />
        </button>
      </div>

      <projects v-for="index in projects" :key="index" :projId="index" />
      <div class="toggle">
        <p>Projects</p>
        <button @click="addProject">
          <i class="fas fa-plus-circle" />
        </button>
        <button @click="reduceProject">
          <i class="fas fa-minus-circle" />
        </button>
      </div>
    </div>

    <div class="bottom-btns" v-if="!hideButtons">
      <button class="default-btn" v-if="$route.name === 'Preview'" @click="editData">Edit</button>
      <button class="default-btn" v-if="$route.name === 'Templates'" @click="editData">Create Own</button>
      <button class="default-btn" v-if="$route.name !== 'Preview'" @click="preview">Preview Mine</button>

      <button class="default-btn" v-if="$route.name === 'ResumeBuilder'" @click="viewTemplate">Template</button>
      <button class="default-btn" v-if="$route.name === 'Preview'" @click="download">Download</button>
    </div>
  </div>
</template>

<script>
import Welcome from '../components/Welcome'
import Sections from '../components/Sections'
import Projects from '../components/Projects'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ResumeBuilder',
  components: { Welcome, Sections, Projects },
  data () {
    return {
      sections: 1,
      projects: 1,
      hideButtons: false
    }
  },
  computed: {
    ...mapGetters(['getterProjectsList', 'getterSectionsList'])
  },
  methods: {
    ...mapMutations(['SET_PROJECTS_LIST', 'SET_SECTIONS_LIST']),
    addSection () {
      this.sections++
    },
    reduceSection () {
      if (this.sections) {
        this.sections--
        this.getterSectionsList.splice(this.sections, 1)
        this.SET_SECTIONS_LIST(this.getterSectionsList)
      }
    },
    addProject () {
      this.projects++
    },
    reduceProject () {
      if (this.projects) {
        this.projects--
        this.getterProjectsList.splice(this.projects, 1)
        this.SET_PROJECTS_LIST(this.getterProjectsList)
      }
    },
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

<style scoped lang="scss">
  @import '../assets/scss/themes.scss';

  h1 {
    font-size: 25px;
    text-align: center;
    font-weight: 700;
    color: $dark;
  }

  .toggle {
    background: $dark;
    padding: 20px;
    display: flex;
    justify-content: center;
    margin: 2% 2% 4%;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

    p, button {
      font-size: 16px;
      font-weight: 500;
      color: $white;
    }
  }

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

<template>
  <div>
    <h1>RESUME GENERATOR</h1>

    <welcome />

    <transition-group name="fade">
      <sections v-for="index in sections" :key="index" :secId="index" />
    </transition-group>

    <div class="toggle">
      <p>Sections</p>
      <button @click="addSection">
        <i class="fas fa-plus-circle" />
      </button>
      <button @click="reduceSection">
        <i class="fas fa-minus-circle" />
      </button>
    </div>

    <transition-group name="fade">
      <projects v-for="index in projects" :key="index" :projId="index" />
    </transition-group>

    <div class="toggle">
      <p>Projects</p>
      <button @click="addProject">
        <i class="fas fa-plus-circle" />
      </button>
      <button @click="reduceProject">
        <i class="fas fa-minus-circle" />
      </button>
    </div>

    <div class="bottom-btns">
      <div v-if="options">
        <button class="default-btn" @click="viewTemplate">Templates</button>
        <button class="default-btn" @click="preview">
          <i class="fa fa-search" />Preview
        </button>
      </div>

      <button class="options-btn" @click="options = !options">
        <i class="fa fa-minus" v-if="options" />
        <i class="fa fa-plus" v-else />
      </button>
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
      options: false
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
    viewTemplate () {
      this.$router.push({name: 'Templates'})
    },
    preview () {
      this.options = false
      this.$router.push({name: 'Preview'})
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
    p {
      margin-right: 15px;
    }
  }
  .toggle:last-child {
    margin-bottom: 60px;
  }

  .bottom-btns {
    opacity: 0.9;
    position: fixed;
    bottom: 20px;
    right: 10px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }

    .default-btn {
      border-radius: 25px;
      padding: 10px 25px;
      margin: 5px 0;
    }

    .options-btn {
      border-radius: 50%;
      padding: 15px;
      background: $primary;
      color: $white;
      font-size: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: .5s;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }
</style>

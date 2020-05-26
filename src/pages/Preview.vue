<template>
  <div>
    <template1 v-if="switchTemp" :welcome="welcome" :sections="sections" :projects="projects" />
    <template2 v-else :welcome="welcome" :sections="sections" :projects="projects" />

    <div class="bottom-btns" v-if="!hideButtons">
      <div v-if="options">
        <button class="default-btn" v-if="$route.name === 'Preview'" @click="editData">
          <i class="fa fa-pencil" />Edit
        </button>
        <button class="default-btn" v-if="$route.name === 'Templates'" @click="editData">
          <i class="fa fa-pencil-alt" />Create Own
        </button>
        <button class="default-btn" v-if="$route.name === 'Templates'" @click="preview">
          <i class="fa fa-search" />Preview
        </button>
        <button class="default-btn" v-if="$route.name === 'Preview'" @click="demo">
          <i class="fa fa-search" />Demo
        </button>
        <button class="default-btn" @click="changeTemplate">
          <i class="fa fa-exchange-alt" />Switch Template
        </button>
        <button class="default-btn" v-if="$route.name === 'Preview'" @click="download">
          <i class="fa fa-file-code" />Download HTML
        </button>
        <button class="default-btn" v-if="$route.name === 'Preview'" @click="downloadPdf">
          <i class="fa fa-file-pdf" />Download PDF
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
import Template1 from '../components/Templates/Template1'
import Template2 from '../components/Templates/Template2'

import { mapGetters } from 'vuex'
import html2canvas from 'html2canvas'
import JsPDF from 'jspdf'

export default {
  name: 'Preview',
  components: { Template1, Template2 },
  data () {
    return {
      welcome: {},
      sections: [],
      projects: [],
      switchTemp: true,
      hideButtons: false,
      options: false
    }
  },
  computed: {
    ...mapGetters(['getterWelcome', 'getterProjectsList', 'getterSectionsList', 'getterSampleWelcome', 'getterSampleProjectsList', 'getterSampleSectionsList'])
  },
  watch: {
    '$route': {
      handler: 'populateData',
      immediate: true
    }
  },
  methods: {
    populateData () {
      if (this.$route.name === 'Preview') {
        this.welcome = this.getterWelcome
        this.sections = this.getterSectionsList
        this.projects = this.getterProjectsList
      } else {
        this.welcome = this.getterSampleWelcome
        this.sections = this.getterSampleSectionsList
        this.projects = this.getterSampleProjectsList
      }
    },
    preview () {
      this.options = false
      this.$router.push({name: 'Preview'})
    },
    demo () {
      this.options = false
      this.$router.push({name: 'Templates'})
    },
    editData () {
      this.options = false
      this.$router.push({name: 'ResumeBuilder'})
    },
    changeTemplate () {
      this.options = false
      this.switchTemp = !this.switchTemp
    },
    download () {
      this.hideButtons = true
      this.options = false

      document.querySelectorAll('.title h6, .welcome h6, .welcome p').forEach(item => {
        item.classList.remove('swipe')
      })

      document.querySelectorAll('.projects .list > div, .welcome .shape').forEach(item => {
        item.classList.remove('fader')
      })

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

        document.querySelectorAll('.title h6, .welcome h6, .welcome p').forEach(item => {
          item.classList.add('swipe')
        })

        document.querySelectorAll('.projects .list > div, .welcome .shape').forEach(item => {
          item.classList.add('fader')
        })
      })
    },
    downloadPdf () {
      this.options = false
      let downloadElement = document.getElementById('template')
      html2canvas(downloadElement, {scale: 2, logging: false, dpi: 800, removeContainer: true, useCORS: true}).then((canvas) => {
        let base64image = canvas.toDataURL('image/jpeg', 1)
        let doc = new JsPDF({unit: 'cm', orientation: 'portrait', format: [269.2, 538.5]})
        doc.addImage(base64image, 'PNG', 0, 0, 9.5, 19)
        doc.save('resume.pdf')
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/themes.scss';

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
</style>

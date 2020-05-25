<template>
  <div class="projects">
    <div>
      <h6>Project {{projId}}</h6>
      <md-field>
        <label>Title</label>
        <md-input v-model="title" :disabled="disableProject" />
      </md-field>

      <md-field>
        <label>Description</label>
        <md-textarea v-model="desc" :disabled="disableProject" />
      </md-field>

      <md-field>
        <label>URL</label>
        <md-input v-model="url" :disabled="disableProject" />
      </md-field>

      <button class="default-btn" @click="editProject" v-if="disableProject">
        <i class="fa fa-pencil" />Edit
      </button>
      <button class="default-btn" @click="submitProject" v-else>Submit</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Projects',
  props: ['projId'],
  data () {
    return {
      title: null,
      desc: null,
      url: null,
      disableProject: false
    }
  },
  computed: {
    ...mapGetters(['getterProjectsList'])
  },
  methods: {
    ...mapMutations(['SET_PROJECTS_LIST']),
    submitProject () {
      let params = {
        title: this.title,
        desc: this.desc,
        url: this.url
      }

      this.getterProjectsList.splice(this.projId - 1, 1, params)
      this.SET_PROJECTS_LIST(this.getterProjectsList)
      this.disableProject = true
    },
    editProject () {
      this.disableProject = false
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/themes.scss';

  .projects {
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 20px;
    margin: 2%;
    background: $bg;

    h6 {
      text-align: center;
      font-size: 20px;
      color: #000000;
      margin: 15px;

      &::after {
        content: '';
        width: 50px;
        height: 5px;
        background: linear-gradient(299deg, $primary, #11c9cc);;
        display: block;
        border-radius: 5px;
        margin: 5px auto auto;
      }
    }

    .default-btn {
      margin: auto;
    }
  }

  .tablet, .desktop {
    .projects {
      > div {
        width: 60%;
        margin: auto;
      }
    }
  }
</style>

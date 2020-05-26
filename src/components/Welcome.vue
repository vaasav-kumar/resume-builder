<template>
  <div class="welcome">
    <div>
      <h6>Introduction</h6>

      <md-field>
        <label>Upload Image</label>
        <md-file v-model="imgSrc" accept="image/*" :disabled="disableIntro" />
      </md-field>

      <md-field>
        <label>Name</label>
        <md-input v-model="title" :disabled="disableIntro" />
      </md-field>

      <md-field>
        <label>Description</label>
        <md-textarea v-model="desc" :disabled="disableIntro" />
      </md-field>

      <button class="default-btn" @click="editIntro" v-if="disableIntro">
        <i class="fa fa-pencil" />Edit
      </button>
      <button class="default-btn" @click="submitIntro" v-else>Submit</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Welcome',
  data () {
    return {
      title: null,
      desc: null,
      imgSrc: null,
      base64: null,
      disableIntro: false
    }
  },
  watch: {
    imgSrc () {
      var imgUpload = document.querySelector('.welcome input[type=file]')
      if (imgUpload.files.length === 1) {
        var reader = new FileReader()
        reader.readAsDataURL(imgUpload.files[0])

        reader.onload = (e) => {
          this.base64 = e.target.result
        }
      }
    }
  },
  methods: {
    ...mapMutations(['SET_WELCOME']),
    submitIntro () {
      let params = {
        title: this.title,
        desc: this.desc,
        img: this.base64
      }

      this.SET_WELCOME(params)
      this.disableIntro = true
    },
    editIntro () {
      this.disableIntro = false
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/themes.scss';

  .welcome {
    padding: 20px;
    box-shadow: $shadow1;
    border-radius: 5px;
    margin: 2% 2% 4%;
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
        background: linear-gradient(299deg, #2e9e60, #ea6274);
        display: block;
        border-radius: 5px;
        margin: 10px auto auto;
      }
    }

    button {
      display: flex;
      justify-content: center;
      margin: auto;
    }
  }

  .tablet, .desktop {
    .welcome {
      > div {
        width: 60%;
        margin: auto;
      }
    }
  }
</style>

<style>
  .md-icon {
    display: none;
  }
</style>

<template>
  <div class="welcome">
    <div>
      <h6>Introduction</h6>

      <md-field>
        <label>Upload Image</label>
        <md-file v-model="imgSrc" accept="image/*" />
      </md-field>

      <md-field>
        <label>Title</label>
        <md-input v-model="title" />
      </md-field>

      <md-field>
        <label>Description</label>
        <md-textarea v-model="desc" />
      </md-field>

      <button class="default-btn" @click="submitIntro">Submit</button>
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
      base64: null
    }
  },
  created () {
    console.log('-----rv')
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
    margin: 1%;
    background: $bg;

    > div {
      width: 60%;
      margin: auto;
    }

    h6 {
      text-align: center;
      font-size: 18px;
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

    button {
      display: flex;
      justify-content: center;
      margin: auto;
    }
  }
</style>

<style>
  .md-icon {
    display: none;
  }
</style>

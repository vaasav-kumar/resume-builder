<template>
  <div class="projects">
    <div>
      <h6>Project {{projId}}</h6>
      <md-field>
        <label>Title</label>
        <md-input v-model="title" />
      </md-field>

      <md-field>
        <label>Description</label>
        <md-textarea v-model="desc" />
      </md-field>

      <md-field>
        <label>URL</label>
        <md-input v-model="url" />
      </md-field>

      <button class="default-btn">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  props: ['projId'],
  data () {
    return {
      title: null,
      desc: null,
      url: null
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

    .default-btn {
      display: flex;
      justify-content: center;
      margin: auto;
    }
  }
</style>

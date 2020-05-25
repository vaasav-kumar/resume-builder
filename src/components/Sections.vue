<template>
  <div class="section-list">
    <h6>Section {{secId}}</h6>
    <div class="section">
      <div>
        <md-field>
          <label>Section Title</label>
          <md-input v-model="title" />
        </md-field>
        <span class="example">Eg: <i>Education/Skills</i></span>
      </div>

      <div>
        <section-details v-for="index in subSections" :key="index" />
        <div class="toggle">
          <p>Section Details</p>
          <div>
            <button @click="addSectionDetails">+</button>
            <button @click="reduceSectionDetails">-</button>
          </div>
        </div>

        <percentage-bar v-for="index in percentageBar" :key="index" />
        <div class="toggle">
          <p>Percentage Bar</p>
          <div>
            <button @click="addPercentageBar">+</button>
            <button @click="reducePercentageBar">-</button>
          </div>
        </div>
      </div>
    </div>

    <button class="default-btn">Submit</button>
  </div>
</template>

<script>
import SectionDetails from './SectionDetails'
import PercentageBar from './PercentageBar'

export default {
  name: 'Sections',
  components: { SectionDetails, PercentageBar },
  props: ['secId'],
  data () {
    return {
      title: null,
      subSections: 0,
      percentageBar: 0
    }
  },
  methods: {
    addSectionDetails () {
      this.subSections++
    },
    reduceSectionDetails () {
      if (this.subSections) {
        this.subSections--
      }
    },
    addPercentageBar () {
      this.percentageBar++
    },
    reducePercentageBar () {
      if (this.percentageBar) {
        this.percentageBar--
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/themes.scss';

  .section-list {
    margin: 2% 1%;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 10px;
    background: $bg;

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

    .section {
      display: flex;

      > div {
        flex: 1;
        padding: 15px 25px;

        .example {
          margin-bottom: 20px;
        }
      }

      .toggle {
        background: #000000;
        margin: 10px 0;
        padding: 0 10px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;

        p, button {
          font-size: 16px;
          color: $white;
          font-weight: 500;
        }

        > div {
          display: flex;
        }
      }
    }

    .default-btn {
      margin: 20px auto;
      display: flex;
      justify-content: center;
    }
  }
</style>

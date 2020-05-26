<template>
  <div class="section-list">
    <h6>Section {{secId}}</h6>
    <div class="section">
      <div>
        <md-field>
          <label>Section Title</label>
          <md-input v-model="title" :disabled="disableSection" />
        </md-field>
        <span class="example">Eg: <i>Education/Skills</i></span>
      </div>

      <div>
        <transition-group name="fade">
          <section-details v-for="index in subSections" :key="index" :disableSection="disableSection"
                          :updateVal="updateSectionDetails" :trigger="trigger" />
        </transition-group>

        <div class="toggle" :class="{'disabled': disableSection}">
          <p>Section Details</p>
          <div>
            <button @click="addSectionDetails">
              <i class="fas fa-plus-circle" />
            </button>
            <button @click="reduceSectionDetails">
              <i class="fas fa-minus-circle" />
            </button>
          </div>
        </div>

        <transition-group name="fade">
          <percentage-bar v-for="index in percentageBar" :key="index" :disableSection="disableSection"
                          :updateVal="updatePercent" :trigger="trigger" />
        </transition-group>

        <div class="toggle" :class="{'disabled': disableSection}">
          <p>Percentage Bar</p>
          <div>
            <button @click="addPercentageBar">
              <i class="fas fa-plus-circle" />
            </button>
            <button @click="reducePercentageBar">
              <i class="fas fa-minus-circle" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <button class="default-btn" @click="editSection" v-if="disableSection">
      <i class="fa fa-pencil" />Edit
    </button>
    <button class="default-btn" @click="submitSection" v-else>Submit</button>
  </div>
</template>

<script>
import SectionDetails from './SectionDetails'
import PercentageBar from './PercentageBar'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'Sections',
  components: { SectionDetails, PercentageBar },
  props: ['secId'],
  data () {
    return {
      title: null,
      subSections: 0,
      percentageBar: 0,
      disableSection: false,
      trigger: false,
      updatedBars: [],
      updatedDetails: []
    }
  },
  computed: {
    ...mapGetters(['getterSectionsList'])
  },
  methods: {
    ...mapMutations(['SET_SECTIONS_LIST']),
    addSectionDetails () {
      if (!this.disableSection) {
        this.subSections++
      }
    },
    reduceSectionDetails () {
      if (this.subSections && !this.disableSection) {
        this.updatedBars = []
        this.updatedDetails = []
        this.trigger = !this.trigger
        this.subSections--
      }
    },
    addPercentageBar () {
      if (!this.disableSection) {
        this.percentageBar++
      }
    },
    reducePercentageBar () {
      if (this.percentageBar && !this.disableSection) {
        this.updatedBars = []
        this.updatedDetails = []
        this.trigger = !this.trigger
        this.percentageBar--
      }
    },
    submitSection () {
      this.updatedBars = []
      this.updatedDetails = []
      this.trigger = !this.trigger
      this.disableSection = true
    },
    updatePercent (newVal) {
      this.updatedBars.push(newVal)
      this.save()
    },
    updateSectionDetails (newVal) {
      this.updatedDetails.push(newVal)
      this.save()
    },
    save () {
      let details = [
        {
          bars: this.updatedBars
        }
      ]
      details.push(...this.updatedDetails)
      let params = {
        title: this.title,
        details: details
      }

      this.getterSectionsList.splice(this.secId - 1, 1, params)
      this.SET_SECTIONS_LIST(this.getterSectionsList)
    },
    editSection () {
      this.disableSection = false
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/themes.scss';

  .section-list {
    margin: 3% 2%;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 10px;
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

    .section {
      > div {
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

        &.disabled {
          background: $dark-grey !important;
        }
      }
    }

    .default-btn {
      margin: 20px auto;
    }
  }

  .desktop {
    .section-list {
      .section {
        display: flex;

        > div {
          flex: 1;
        }
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>

<template>
  <div class="section-details">
    <md-field>
      <label>Heading</label>
      <md-input v-model="heading" :disabled="disableSection" />
    </md-field>
    <span class="example">Eg: <i>Collage/Company</i></span>

    <md-field>
      <label>UDF1</label>
      <md-input v-model="udf1" :disabled="disableSection" />
    </md-field>
    <span class="example">Eg: <i>Role/Position</i></span>

    <md-field>
      <label>UDF2</label>
      <md-input v-model="udf2" :disabled="disableSection" />
    </md-field>
    <span class="example">Eg: <i>Year</i></span>

    <md-field>
      <label>UDF3</label>
      <md-input v-model="udf3" :disabled="disableSection" />
    </md-field>
    <span class="example">Eg: <i>Location</i></span>

    <md-field>
      <label>Description</label>
      <md-input v-model="desc" :disabled="disableSection" />
    </md-field>
    <span class="example">Eg: <i>A place where I discovered my passion for Software development.</i></span>
  </div>
</template>

<script>
export default {
  name: 'SectionDetails',
  props: ['disableSection', 'updateVal', 'trigger'],
  data () {
    return {
      heading: null,
      udf1: null,
      udf2: null,
      udf3: null,
      desc: null
    }
  },
  watch: {
    trigger () {
      let params = {
        heading: this.heading,
        udf1: this.udf1,
        udf2: this.udf2,
        udf3: this.udf3,
        desc: this.desc
      }

      this.updateVal(params)
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/themes.scss';

  .section-details {
    border-bottom: 4px solid $grey-outline;

    &::after {
      content: '';
      display: block;
      margin: 10px 0;
    }

    .example {
      margin-bottom: 20px;
    }
  }
</style>

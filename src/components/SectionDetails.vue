<template>
  <div class="section-details">
    <md-field>
      <label>Heading</label>
      <md-input v-model="heading" />
    </md-field>
    <span class="example">Eg: <i>Collage/Company</i></span>

    <md-field>
      <label>UDF1</label>
      <md-input v-model="udf1" />
    </md-field>
    <span class="example">Eg: <i>Role/Position</i></span>

    <md-field>
      <label>UDF2</label>
      <md-input v-model="udf2" />
    </md-field>
    <span class="example">Eg: <i>Year</i></span>

    <md-field>
      <label>UDF3</label>
      <md-input v-model="udf3" />
    </md-field>
    <span class="example">Eg: <i>Location</i></span>

    <md-field>
      <label>Description</label>
      <md-input v-model="desc" />
    </md-field>
    <span class="example">Eg: <i>A place where I discovered my passion for Software development.</i></span>
  </div>
</template>

<script>
export default {
  name: 'SectionDetails',
  data () {
    return {
      heading: null,
      udf1: null,
      udf2: null,
      udf3: null,
      desc: null
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

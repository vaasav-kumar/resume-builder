<template>
  <div class="percentage-bar">
    <div>
      <md-field>
        <label>Title</label>
        <md-input v-model="title" :disabled="disableSection" />
      </md-field>
      <span class="example">Eg: <i>Javascript/Python</i></span>
    </div>

    <div>
      <md-field>
        <label>Percentage</label>
        <md-input v-model="percentage" type="number" :disabled="disableSection" />
      </md-field>
      <span class="example">Eg: <i>80/30</i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PercentageBar',
  props: ['disableSection', 'updateVal', 'trigger'],
  data () {
    return {
      title: null,
      percentage: null
    }
  },
  watch: {
    trigger () {
      this.updateVal({title: this.title, percent: this.percentage})
    }
  }
}
</script>

<style scoped lang="scss">
  @media screen and (min-width: 600px) {
    .percentage-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>

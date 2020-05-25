<template>
  <div class="percentage-bar">
    <div>
      <md-field>
        <label>Title</label>
        <md-input v-model="title" />
      </md-field>
      <span class="example">Eg: <i>Javascript/Python</i></span>
    </div>

    <div>
      <md-field>
        <label>Percentage</label>
        <md-input v-model="percentage" type="number" />
      </md-field>
      <span class="example">Eg: <i>80/30</i></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PercentageBar',
  data () {
    return {
      title: null,
      percentage: null
    }
  }
}
</script>

<style scoped lang="scss">
  .percentage-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

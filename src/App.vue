<template>
  <el-container id="app">
    <el-header height="auto">Password Generator</el-header>
    <el-main><password-generator/></el-main>
  </el-container>
</template>

<script>
import PasswordGenerator from './components/PasswordGenerator.vue'

export default {
  name: 'app',

  components: {
    PasswordGenerator
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }

  .el-header {
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  .el-col {
    padding: 6px 0;
  }

  .el-input-group__append, .el-input-group__prepend {
    color: #42b983 !important;
  }

  .el-input__inner {
    width: 70px !important;
    text-align: center;
  }

  .el-button--text {
    padding-top: 6px !important;
    padding-bottom: 6px !important;
  }

  .passwords {
    display: flex;
    justify-content: space-between;
  }

  .el-col {
    text-align: -webkit-center !important;
  }
</style>

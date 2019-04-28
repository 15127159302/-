<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" type="text/css">
html,body,#app{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}
#app>div:nth-of-type(1){
  width: 100%;
  height: 100%;
}
@import "./common.css"
</style>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
#app {
  display: flex;
  justify-content: center;
  background: #ededed;
}
h1 {
  margin: 0;
}
</style>
<template>
  <div id="app">
    <div id="nav">
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    </div>
    <router-view/>
  </div>
</template>

<style>
  #app {
    /*background: linear-gradient(0deg, rgba(96, 96, 96, 0.2), rgba(96, 96, 96, 0.2));*/
    height: 100%;
  }
  .none {
    display: none;
  }
</style>

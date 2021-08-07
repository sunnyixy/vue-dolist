<template>
  <div id="nav">
    <router-link to="/">Login</router-link> 
    <h1>|</h1>
    <router-link to="/todo">todo</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height: 50px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 2em;
  margin: 10px;
}

#nav a.router-link-exact-active {
  color: #83a395;
}

h1{
  display: inline;
}
</style>

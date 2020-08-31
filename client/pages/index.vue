<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-auth-example
      </h1>
      <div v-if="$auth.loggedIn">
        <p class="text-green-700 py-2">Welcome, You are logged in.</p>
        <button class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" @click="userLogout">
          Logout
        </button>
      </div>
      <div v-else>
        You are not logged in.
        Reload this page or redirect in the userLogout function.
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      userLogout() {
        this.$auth.logout();
        // redirect to login page or whatever
      }
    }
  }

</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

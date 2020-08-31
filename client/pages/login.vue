<template>
  <div class="container">
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" v-on:submit.prevent="userLogin">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" v-model="user.email" type="text" placeholder="any except test">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" v-model="user.password" type="password" placeholder="any">
          <p v-if="error.password" class="text-red-500 text-xs italic">Please choose a password.</p>
          <p v-if="error.authFailed" class="text-red-700 text-md">Authentication failed.</p>
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="bg-gray-300 hover:bg-gray-600 text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign In
          </button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2020 Your name. All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        error:{
          email : false,
          password : false,
          authFailed : false
        },
        user:{
          email:'',
          password:''
        }
      }
    },
    methods:{
      async userLogin() {
        //this.error.email = true;
        //this.error.password = true;
        this.error.authFailed = false;

        try {
          let response = await this.$auth.loginWith('local', { data: this.user })
          console.log(response)
        } catch (err) {
          this.error.authFailed = true
          console.log(err)
        }
      }
    }
  }
</script>
<style>
.container {
  @apply min-h-screen flex justify-center items-center mx-auto;
}
</style>

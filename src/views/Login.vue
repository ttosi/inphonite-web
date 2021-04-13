<template>
  <v-container fill-height class="mt-7" v-if="loginVisible">
    <v-layout justify-center row wrap align-center class="mt-7">
      <v-card class="justify-center px-3 elevation-6">
        <v-card-title primary-title class="justify-center">
          <div class="mb-1">
            <img class="pt-2" src="@/assets/powered-by.png" width="375" />
          </div>
        </v-card-title>
        <v-card-text>
          <div>
            <v-flex sm12>
              <v-text-field label="Email Address" outline v-model="username"></v-text-field>
            </v-flex>
          </div>
          <div>
            <v-flex sm12>
              <v-text-field
                label="Password"
                :type="'password'"
                v-model="password"
                @keyup.enter="login" />
            </v-flex>
            <v-flex v-if="message !== null" sm12>
              <v-alert border="top" colored-border type="error" elevation="2">{{ message }}</v-alert>
            </v-flex>
            <div>
              <v-checkbox
                required
                label="I agree to the Terms of Service Agreement and
                       the Business Associate Agreement."
                style="width: 375px;"
                class="ml-4"/>
            </div>
          </div>
        </v-card-text>
        <v-card-actions class="justify-center pb-4">
          <div class="my-2 mr-2">
            <v-btn depressed color="accent" width="161" dark @click="login">Login</v-btn>
          </div>
          <div class="my-2">
            <v-btn text>Forgot Password?</v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { 
  authService as auth,
  sessionService as session 
} from "@/services"

export default {
  data() {
    return {
      username: "tonytosi@inphonite.com",
      password: "password123",
      message: this.$route.query.message ? this.$route.query.message : null,
      loginVisible: true
    };
  },
  methods: {
    login() {
      this.message = null
      auth
        .login(this.username, this.password)
        .then(() => {
          this.username = ""
          this.password = ""
          this.loginVisible = false
          
          this.$router.push({ path: "/home" })
          session.start()
        })
        .catch(message => {
          this.message = message
        })
        .finally(() => {
          this.loginVisible = true
        });
    }
  }
};
</script>

<style scoped>
</style>

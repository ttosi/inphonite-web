<template>
  <div class="home">
    <div class="headline">
      Welcome to Inphonite<span class="font-weight-medium" style="color: #0CA6DF">Voice</span>
    </div>
    <div class="mt-5 title font-weight-light">
      Account Overview
      <hr />
    </div>
    <div class="ma-2" style="line-height: 27px;">
      Account Name: John Doe
      <br />Subscription: Enterprise Bundle with Premium Texting
      <br />Environment: Development
    </div>
     <div class="mt-5 title font-weight-light">
      Credit Balances
      <hr />
    </div>
    <div class="ma-2" style="line-height: 27px;">
      Paid Credits: 2,031.90<br />
      Bundled Credits: 451.75<br />
      Overgae Credits: 0.00<br />
    </div>
    <div class="mt-5 title font-weight-light">
      Quick Links
      <hr />
    </div>
    <v-card class="d-flex flex-wrap mb-3 mt-3" width="700" color flat tile>
      <v-card class="link-card ma-1" dark color="#204288" min-width="115" min-height="115" v-for="item in items" :key="item.title" @click="navigate(item.route)">
        <v-card-text class="text-center pa-0">
          <v-icon class="mt-6" large>{{ item.icon }}</v-icon>
          <div class="caption mt-4 font-weight-medium">
            {{ item.title }}
          </div>
        </v-card-text>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import Base from "@/views/Base"
import navigation from "../data/navigation";

export default {
  components: {},
  data() {
    return {
      items: navigation
    }
  },
  methods: {
     navigate(route) {
      this.$router.push({ path: route });
    }
  }
};
</script>

<style>
.link-card {
  border-radius: 0 !important;
}
</style>

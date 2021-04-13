<template>
  <div class="card-container">
    <form-data class="ma-3" :form="form" :values="values"></form-data>
    <Bottombar :actions="bottomActions" :pageName="pageName"></Bottombar>
  </div>
</template>

<script>
import Base from "@/views/Base";
import { Form, Bottombar } from "@/components";
import userForm from "@/data/forms/user";

export default Base.extend({
  components: {
    "form-data": Form,
    Bottombar
  },
  data() {
    return {
      form: userForm,
      values: [],
      bottomActions: [
        { name: "Save", action: "save", icon: "save" },
        { name: "Help", action: "help", icon: "help_outline" }
      ]
    };
  },
  methods: {
    save() {
      console.log("saving");
    }
  },
  created() {},
  mounted() {}
});
</script>

<template>
  <div>
    <v-toolbar flat color="accent" dark dense>
      <v-toolbar-title>
        {{ personName }}
        <span v-if="hasChanges">*</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div v-for="(action, index) in actions" :key="index">
        <v-btn
          text
          v-if="!(isNew && action.command === 'delete')"
          @click="doAction(action.command)">
          <v-icon left>{{ action.icon }}</v-icon>
          {{ action.name }}
        </v-btn>
      </div>
    </v-toolbar>
    <div class="card-container">
      <form-data class="ma-3" :form="form" :values="values"></form-data>
    </div>
  </div>
</template>

<script>
import { Person } from "@/entities";
import { Form } from "@/components";
import { eventBus } from "@/main";
import personForm from "@/data/forms/person";

export default {
  props: ["id"],
  components: {
    "form-data": Form
  },
  data() {
    return {
      person: Person(),
      form: personForm,
      isNew: this.$route.query.isnew,
      values: [],
      initialLoad: true,
      hasChanges: false,
      actions: [
        { name: "Save ", command: "save", icon: "save" },
        { name: "Delete ", command: "delete", icon: "delete" }
      ]
    };
  },
  methods: {
    async get() {
      this.values = await this.person.get(this.id);
    },
    async save() {
      const response = await this.person.update(this.values);

      this.hasChanges = false;
      eventBus.$emit("show-notification", {
        text: `${this.personName} successfully saved`,
        color: "success"
      });
    },
    async delete() {
      // if (confirm(`Are you sure you want to delete ${this.personName}?`)) {
      //   const response = await this.person.delete(this.values)
      //   eventBus.$emit("show-notification", {
      //     text: `${this.personName} successfully deleted`,
      //     color: "success"
      //   })
      //   this.$router.go(-1)
      // }
      eventBus.$emit("show-modal", {
        title: "hello title",
        text: "Here's some cool text!!!"
      });
    },
    doAction(action) {
      this[action]();
    }
  },
  computed: {
    personName() {
      if (!this.values.firstName && !this.values.lastName) {
        return "New Contact";
      }
      if (!this.values.firstName) {
        return this.values.lastName;
      }
      if (!this.values.lastName) {
        return this.values.firstName;
      }
      return `${this.values.lastName}, ${this.values.firstName}`;
    }
  },
  watch: {
    id() {
      this.get();
    },
    values: {
      handler() {
        if (this.initialLoad) {
          this.initialLoad = false;
          return;
        }
        this.hasChanges = true;
      },
      deep: true
    }
  },
  async mounted() {
    this.get();
  }
};
</script>

<style scoped>
.card-container {
  height: 665px;
  overflow-y: scroll;
}
</style>

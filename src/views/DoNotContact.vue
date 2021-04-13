<template>
  <div>
    <v-layout row wrap  class="ma-0">
      <v-flex xs3 class="mx-2">
        <v-text-field v-model="contact" dense outlined label="Phone or Email" style="background-color: #fff;" />
      </v-flex>
      <v-flex xs3 class="mx-2">
        <v-select v-model="reason" dense outlined label="Reason" :items="reason" item-text="value" item-value="id" />
      </v-flex>
      <v-flex xs3 class="mx-2">
        <v-text-field v-model="reasonText" dense outlined label="Reason for Blocking" style="background-color: #fff" />
      </v-flex>
      <v-flex x3 class="mx-2">
        <v-btn @click="add" class="accent" depressed  width="135" style="margin-top: 2px">Add</v-btn>
      </v-flex>
    </v-layout>
    <Datatable :data="data" :headers="headers" :pageName="pageName" :tableTitle="tableTitle" />
    <Bottombar :actions="bottomActions" :pageName="pageName" />
  </div>
</template>

<script>
import Base from "@/views/Base";
import { DoNotContact } from "@/entities";
import { Datatable, Bottombar } from "@/components";

export default Base.extend({
  components: {
    Datatable,
    Bottombar
  },
  data() {
    return {
      doNotContact: DoNotContact(),
      tableTitle: { name: "Do Not Contact", icon: "phone_disabled" },
      hasDatatable: true,
      data: [],
      headers: [
        { text: "Id", value: "id" },
        { text: "Contact", value: "contactInfo" },
        { text: "Field Type", value: "fieldType" },
        { text: "Reason", value: "description" },
        { text: "Modified By", value: "modifiedBy" },
        { text: "Modified On", value: "modifiedOn" }
      ],
      bottomActions: ["print", "delete", "help"],
      contact: "",
      reason: undefined,
      reasonText: "",
      reason: [
        { id: 1, value: "Auto" },
        { id: 2, value: "Voice" },
        { id: 3, value: "Email" },
        { id: 4, value: "Text" },
        { id: 5, value: "Twitter" },
        { id: 6, value: "PrimaryNumber" },
        { id: 7, value: "SecondaryNumber" },
        { id: 8, value: "MobileNumber" },
        { id: 9, value: "Survey" }
      ]
    };
  },
  methods: {
    async list() {
      this.data = await this.doNotContact.list();
    },
    add() {

    },
    delete(data) {
      console.log("delete from parent");
    },
    print(data) {
      console.log("print from parent");
    }
  },
  created() {},
  mounted() {}
});
</script>

<template>
  <div>
    <datatable
      :data="data"
      :headers="headers"
      :pageName="pageName"
      :tableTitle="tableTitle"
      :selected.sync="selected"
      @openRow="openRow"></datatable>
    <bottombar :actions="bottomActions" @doAction="doAction"></bottombar>
    <modal :actions="modalActions" @modalAction="modalAction"></modal>
  </div>
</template>

<script>
import Base from "@/views/Base";
import { Person } from "@/entities";
import { Datatable, Bottombar, Modal } from "@/components";
import { eventBus } from "@/main";

export default Base.extend({
  components: {
    Datatable,
    Bottombar,
    Modal
  },
  data() {
    return {
      entity: Person(),
      tableTitle: { name: "People", icon: "wc" },
      data: [],
      selected: [],
      headers: [
        { text: "Id", value: "id", type: "id" },
        { text: "First Name", value: "firstName", type: "string" },
        { text: "Last Name", value: "lastName", type: "string" },
        { text: "Primary", value: "primaryNumber", type: "phone" },
        { text: "Email", value: "emailAddress", type: "string" },
        { text: "Modified By", value: "modifiedBy", type: "string" },
        { text: "Modified On", value: "modifiedOn", type: "date" }
      ],
      bottomActions: ["create", "deleteMany", "clear", "enqueue", "refresh", "help"],
      modalActions: []
    };
  },
  methods: {
    openRow(row) {
      this.$router.push({ path: `/people/details/${row.id}/general` });
    },
    async create() {
      console.log("CREATEDD!! ");
      // const response = await this.person.update({
      //   accountId: JSON.parse(localStorage.getItem("user")).accountId,
      //   languageTypeId: 4,
      //   firstName: "",
      //   isNew: true
      // });
      // this.$router.push({
      //   path: `/people/details/${response.notifyContactId}/general?isnew=true`
      // });
    },
    deleteMany(data) {
      console.log("delet many in index?!!?")
      if (data.length === 0) {
        alert("One or more contacts must be selected");
        return;
      }
      // if (confirm("Are you sure you want to delete the selected contact(s)?")) {
      //   const response = await this.person.deleteMany(data)
      //   eventBus.$emit("show-notification", {
      //     text: `${data.length} contact(s) successfully deleted`,
      //     color: "success"
      //   })
      //   this.list()
      // }

      // eventBus.$emit("show-modal", {
      //   title: "hello title",
      //   text: "Here's some cool text!!!"
      // });
    },
    enqueue() {
      console.log("enqueue", this.selected);
      
      this.modalActions = [{ name: "Delete", command: "delete", color: "error", icon: "delete" }]
      eventBus.$emit("show-modal", {
        title: "Delete",
        text: "Are you sure you want to delete the selected contacts?",

      });
    }
  }
});
</script>

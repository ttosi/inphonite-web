<template>
  <div>
    <Datatable :data="data" :headers="headers" :pageName="pageName" :tableTitle="tableTitle" />
    <Bottombar :actions="bottomActions" :pageName="pageName" />
  </div>
</template>

<script>
import Base from "@/views/Base";
import { Archive } from "@/entities";
import { Datatable, Bottombar } from "@/components";

export default Base.extend({
  components: {
    Datatable,
    Bottombar
  },
  data() {
    return {
      archive: Archive(),
      tableTitle: { name: "Report Archive", icon: "assignment_returned" },
      hasDatatable: true,
      data: [],
      headers: [
        { text: "Id", value: "id" },
        { text: "File Name", value: "fileName" },
        { text: "Subject", value: "subject" },
        { text: "Subscription", value: "reportSubscriptionName" },
        { text: "Date", value: "createdOn" }
      ],
      bottomActions: ["delete", "download", "sendnow", "refresh", "help"], 
    };
  },
  methods: {
    async list() {
      this.data = await this.archive.list();
    },
    delete(data) {
      console.log("delete from parent");
    },
    download(data) {
      console.log("download from parent");
    },
    sendnow(data) {
      console.log("sendnow from parent");
    }
  },
  created() {},
  mounted() {}
});
</script>

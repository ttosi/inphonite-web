<template>
  <div>
    <Datatable :data="data" :headers="headers" :pageName="pageName" :tableTitle="tableTitle"/>
    <Bottombar :actions="bottomActions" :pageName="pageName" />
  </div>
</template>

<script>
import Base from "@/views/Base";
import { Queue } from "@/entities";
import { Datatable, Bottombar } from "@/components";

export default Base.extend({
  components: {
    Datatable,
    Bottombar
  },
  data() {
    return {
      queue: Queue(),
      tableTitle: { name: "Queue Status", icon: "dns" },
      hasDatatable: true,
      data: [],
      headers: [
        { text: "Id", value: "id" },
        { text: "Queue", value: "queueName" },
        { text: "Contact", value: "contactName", type: "link" },
        { text: "Appointment", value: "apptStart", type: "link", dataType: "Date" },
        { text: "Rule", value: "ruleName", type: "link" },
        { text: "Status", value: "deliveryStatus" },
        { text: "Retrys", value: "retryCount" },
        { text: "Date", value: "modifiedOn" }
      ],
      bottomActions: ["complete", "sendnow", "help"]
    };
  },
  methods: {
    async list() {
      this.data = await this.queue.listQueue();
    },
    complete(data) {
      console.log("complete from parent");
    },
    sendnow(data) {
      console.log("sendnow from parent");
    }
  },
  created() {},
  mounted() {}
});
</script>

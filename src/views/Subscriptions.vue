<template>
  <div>
    <Datatable :data="data" :headers="headers" :pageName="pageName" :tableTitle="tableTitle" />
    <Bottombar :actions="bottomActions" :pageName="pageName"></Bottombar>
  </div>
</template>

<script>
import Base from "@/views/Base";
import { Subscription } from "@/entities";
import { Datatable, Bottombar } from "@/components";

export default Base.extend({
  components: {
    Datatable,
    Bottombar
  },
  data() {
    return {
      subscription: Subscription(),
      tableTitle: { name: "Report Subscriptions", icon: "bookmarks" },
      hasDatatable: true,
      data: [],
      headers: [
        { text: "Id", value: "id" },
        { text: "Name", value: "name" },
        { text: "Description", value: "description" },
        { text: "Modified By", value: "modifiedBy" },
        { text: "Modified On", value: "modifiedOn" }
      ],
      bottomActions: ["new", "print", "copy", "import", "export", "delete", "refresh", "help"]
    };
  },
  methods: {
    async list() {
      this.data = await this.subscription.list();
    },
    new() {
      console.log("new from parent");
    },
    open(data) {
      console.log("open from parent");
    },
    print(data) {
      console.log("print from parent");
    },
    copy(data) {
      console.log("copy from parent");
    },
    import(data) {
      console.log("import from parent");
    },
    export(data) {
      console.log("export from parent");
    },
    delete(data) {
      console.log("delete from parent");
    }
  },
  created() {},
  mounted() {}
});
</script>

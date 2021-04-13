<template>
  <div>
    <Datatable :data="data" :headers="headers" :pageName="pageName" :tableTitle="tableTitle" />
    <Bottombar :actions="bottomActions" :pageName="pageName"></Bottombar>
  </div>
</template>

<script>
import Base from "@/views/Base";
import { Rule } from "@/entities";
import { Datatable, Bottombar } from "@/components";

export default Base.extend({
  components: {
    Datatable,
    Bottombar
  },
  data() {
    return {
      rule: Rule(),
      tableTitle: { name: "Rules", icon: "assignment_turned_in" },
      hasDatatable: true,
      data: [],
      headers: [
        { text: "Id", value: "id" },
        { text: "Name", value: "name" },
        { text: "Description", value: "description" },
        { text: "Active", value: "isActive" },
        { text: "Modified By", value: "modifiedBy" },
        { text: "Modified On", value: "modifiedOn", type: "Date" }
      ],
      bottomActions: ["new", "print", "copy", "import", "export", "delete", "refresh", "help"]
    };
  },
  methods: {
    async list() {
      this.data = await this.rule.list();
    },
    new() {
      console.log("new from parent");
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

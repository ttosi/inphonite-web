<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      pageName: this.$route.name
    };
  },
  computed: {
    formattedName() {
      return this.pageName.toLowerCase().replace(/\s/g, "-")
    }
  },
  methods: {
    async doAction(action, payload) {
      if(this.hasOwnProperty(action)) {
        console.log("overloaded")
        this[action](payload)
        console.log("this is after overloaded method")
        await this.entity[action](payload)
        return
      }
      
      console.log("no overloading", action, payload)
      this[action](await this.entity[action]("abc"))
      // this[action](await this.entity[action]("abc"))
    },
    async list() {
      this.data = await this.entity.list()
    },
    async refresh() {
      this.list()
    },
    modalAction(action) {
      console.log("from modal", action)
    }
  },
  mounted() {
    this.list()
  },
  created() {},
  watch: {}
});
</script>

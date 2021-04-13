
<template>
  <v-card>
    <v-card-title>
      <v-icon class="ml-5 mr-3">{{ tableTitle.icon }}</v-icon>
      <div class="title text--secondary">{{ tableTitle.name }}</div>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="computedHeaders"
      :items="data"
      :search="search"
      item-key="id"
      show-select
      @input="$emit('update:selected', $event)"
      @click:row="openRow('openRow', $event)"
      class="elevation-1">
      <!-- <template #item.contactName="{item}">
        <v-btn
          small
          left
          depressed
          color="accent"
          text
          @click.stop="openContact(item)"
          title="View Contact">
          {{ item.contactName }}
        </v-btn>
      </template>-->
      <!-- <template #item.apptStart="{item}">
        <v-btn
          small
          left
          depressed
          color="accent"
          text
          @click.stop="openAppt(item)"
          title="View Appointment">
          {{ item.apptStart | formatDate }}
        </v-btn>
      </template>
      <template #item.ruleName="{item}">
        <v-btn
          small
          left
          depressed
          text
          color="accent"
          @click.stop="openRule(item)"
          title="View Rule">
          {{ item.ruleName }}
        </v-btn>
      </template>-->
      <!-- this is weak and needs to be refactored,
      i have tried many times and failed (very tightly coupled) -->
      <template #item.timeApptStart="{item}">{{ item.timeApptStart | formatTime }}</template>
      <template #item.timeApptEnd="{item}">{{ item.timeApptEnd | formatTime }}</template>
      <template #item.apptStart="{item}">{{ item.apptStart | formatTime }}</template>
      <template #item.apptEnd="{item}">{{ item.apptEnd | formatTime }}</template>
      <template #item.apptStartDate="{item}">{{ item.apptStartDate | formatDate }}</template>
      <template #item.apptStartDateTime="{item}">{{ item.apptStartDateTime | formatDatetime }}</template>
      <template #item.apptEndDateTime="{item}">{{ item.apptEndDateTime | formatDatetime }}</template>
      <template #item.modifiedOn="{item}">{{ item.modifiedOn | formatDatetime }}</template>
      <template #item.createdOn="{item}">{{ item.createdOn | formatDatetime }}</template>
      <template #item.primaryNumber="{item}">{{ item.primaryNumber | formatPhone }}</template>
      <template #item.isActive="{item}">
        <span v-html="boolToCheckmark(item.isActive)"></span>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  components: {},
  props: {
    data: { required: true },
    selected: { type: Array },
    headers: { type: Array, required: true },
    pageName: { type: String },
    tableTitle: { type: Object, required: true }
  },
  data() {
    return {
      search: "",
      // selected: []
    }
  },
  methods: {
    test() {
      console.log("well well", this.selected)
    },
    boolToCheckmark(val) {
      if (val) return checkedHtml
      return uncheckedHtml
    },
    openRow(event, e) {
      console.log(this.selected)
      this.$emit(event, e)
    }
  },
  computed: {
    computedHeaders() {
      return this.headers.filter(h => h.value !== "id")
    }
  },
  created() {}
}

const checkedHtml =
  '<i class="material-icons accent" style="color: grey">check_box</i>'
const uncheckedHtml =
  '<i class="material-icons" style="color: grey">check_box_outline_blank</i>'
</script>

<style>
.v-data-footer__select {
  display: none !important;
}
div.v-data-table__wrapper > table > tbody > tr {
  cursor: pointer;
  height: 54px;
}
.v-input__slot {
  margin: 0 !important;
}
tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.03);
}
</style>
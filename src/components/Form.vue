<template>
  <div>
    <masonry :cols="2" :gutter="20">
      <v-card class="mb-6 elevation-2" tile v-for="(section, index) in form.sections" :key="index">
        <v-card-title class="pb-1">
          <div class="subtitle-1 font-weight-medium">{{ section.name }}</div>
        </v-card-title>
        <v-divider class="mx-4 mb-2"></v-divider>
        <v-card-text>
          <div v-for="(field, index) in section.fields" :key="index">
            <v-flex sm12>
              <template v-if="field.type === 'textbox'">
                <v-text-field :disabled="!canedit" :label="field.name" outlined v-model="values[field.value]" />
              </template>
              <template v-if="field.type === 'password'">
                <v-text-field
                  type="password"
                  :label="field.name"
                  :disabled="!canedit"
                  append-icon="mdi-eye"
                  outlined
                  v-model="values[field.value]" />
              </template>
              <template v-if="field.type === 'checkbox'">
                <v-checkbox 
                  v-model="values[field.value]"
                  :disabled="!canedit"
                  :label="field.name"></v-checkbox>
              </template>
              <template v-if="field.type === 'select'">
                <v-select
                  v-model="values[field.value]"
                  outlined
                  @change="selectChanged(field.event, $event)"
                  :label="field.name"
                  :items="field.options"
                  :disabled="!canedit"
                  item-text="value"
                  item-value="id"></v-select>
              </template>
              <div v-if="field.type === 'datetime'">
                <div class="dp-label">{{ field.name }}</div>
                <VueCtkDateTimePicker
                  v-model="values[field.value]"
                  :formatted="'L LT'"
                  :disabled="!canedit"
                  :no-value-to-custom-elem="false">
                  <input class="dp-container" type="text" :value="values[field.value] | formatDate" />
                </VueCtkDateTimePicker>
              </div>
              <template v-if="field.type === 'textarea'">
                <v-textarea 
                  outlined
                  :label="field.name"
                  :disabled="!canedit"
                  :v-model="values[field.value]"></v-textarea>
              </template>
            </v-flex>
          </div>
        </v-card-text>
      </v-card>
    </masonry>
  </div>
</template>

<script>
import VueCtkDateTimePicker from "vue-ctk-date-time-picker";
import "vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css";

export default {
  components: {
    VueCtkDateTimePicker
  },
  props: {
    form: { type: Object, required: true },
    values: { type: [Object, Array], required: true },
    canedit: { type: Boolean, default: true, required: false },
  },
  data() {
    return {
      maxCol: 2,
      width: 500,
      gutterHeight: 20,
      gutterWidth: 20
    };
  },
  methods: {
    selectChanged(event, e) {
      if (event) {
        this.$emit(event, e);
      }
    }
  },
  created() {},
  mounted() {}
};
</script>

<style>
.vdp-datepicker > div > input {
  width: 100%;
  height: 54px;
  padding: 12px;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  font-size: 16px;
}

.dp-container {
  border: 1px solid #9e9e9e;
  border-radius: 5px;
  padding: 0;
  margin-bottom: 22px;
  cursor: pointer;
  width: 100%;
  height: 54px;
  padding: 12px;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  font-size: 15px;
  color: #222;
}

.dp-label {
  font-size: 12px;
  width: 65px;
  background-color: #fff;
  padding-left: 5px;
  position: relative;
  z-index: 2;
  margin-bottom: -12px;
  margin-left: 10px;
}
</style>
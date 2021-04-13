<template>
  <div>
    <v-tabs v-model="activeTab" vertical active-class="active-tab" class="rule-tabs" dark>
      <v-tab v-for="(tab, index) in tabs" :key="index">{{ tab.title }}</v-tab>
      <v-tab-item v-for="(tab, index) in tabs" :key="index">
        <form-data
          class="ma-3"
          :form="form"
          :values="values"
          :canedit="tab.canEdit"
          @resetRulesChanged="resetRulesChanged">
        </form-data>
        <div class="mb-5 title font-weight-light">
          <div class="ml-5">Schedule</div>
          <v-divider class="mx-4 mb-2"></v-divider>
        </div>
        <table class="mb-3 ml-5">
          <tr v-for="(day, row) in timeSlots" :key="row">
            <td v-for="(time, col) in day[1]" :key="col">
              <div v-if="row === 0 && col === 0">&nbsp;</div>
              <div
                v-else-if="row > 0 && col === 0"
                class="day mr-2"
                @click="dayClicked(row)">{{ day[0] }}
              </div>
              <div v-else-if="row === 0"
                class="cell time mb-2"
                @click="timeClicked(col)">{{ time }}
              </div>
              <div
                v-else
                class="cell"
                @click="cellClicked(row, col)"
                :class="{ ok: time, okoutside: time && (col < 9 || col > 21) }">&nbsp;
              </div>
            </td>
          </tr>
        </table>
      </v-tab-item>
    </v-tabs>
    <Bottombar
      @doAction="doAction"
      :actions="bottomActions">
    </Bottombar>
  </div>
</template>

<script>
import Base from "@/views/Base";
import { Rule } from "@/entities";
import { Form, Bottombar } from "@/components";
import ruleScheduleForm from "@/data/forms/ruleSchedule";

export default Base.extend({
  components: {
    "form-data": Form,
    Bottombar
  },
  data() {
    return {
      entity: Rule(),
      form: ruleScheduleForm,
      values: [],
      activeTab: 0,
      data: [],
      timeSlots: timeSlots,
      tabs: [
        { id: 0, title: "Day & Evening (Built-In)", canEdit: false, ruleType: 2 },
        { id: 1, title: "Daytime (Built-In)", canEdit: false, ruleType: 4 },
        { id: 2, title: "Evening (Built-In)", canEdit: false, ruleType: 6 }
      ],
      bottomActions: ["create", "save", "delete", "help"],
      rowToggle: Array(7).fill(true, 0, 6),
      colToggle: Array(24)
        .fill(false, 0, 8)
        .fill(true, 9, 22)
        .fill(false, 23, 23)
    };
  },
  methods: {
    create(data) {
      console.log("newnewnew", data)
    },
    resetRulesChanged(ruleType) {
      this.setGrid(false);
      const settings = getGridSettings(ruleType);
      for (let day = settings.startDay; day <= settings.endDay; day++) {
        this.setTimeCells(day, settings.startTime, settings.endTime, true);
      }
    },
    dayClicked(row) {
      this.rowToggle.splice(row, 1, !this.rowToggle[row]);
      for (let col = 0; col <= 24; col++) {
        this.timeSlots[row][1].splice(col, 1, this.rowToggle[row]);
      }
    },
    timeClicked(col) {
      this.colToggle.splice(col, 1, !this.colToggle[col]);
      for (let row = 1; row <= 7; row++) {
        this.timeSlots[row][1].splice(col, 1, this.colToggle[col]);
      }
    },
    cellClicked(row, col) {
      this.timeSlots[row][1].splice(col, 1, !this.timeSlots[row][1][col]);
    },
    setGrid(state) {
      for (let row = 1; row <= 7; row++) {
        for (let col = 1; col <= 24; col++) {
          this.timeSlots[row][1][col] = state;
        }
      }
    },
    setTimeCells(day, start, end, state) {
      for (let col = start; col <= end; col++) {
        this.timeSlots[day][1].splice(col, 1, true);
      }
    }
  },
  watch: {
    activeTab() {
      const tab = this.tabs.find(t => t.id === this.activeTab)
      this.resetRulesChanged(tab.ruleType)
    }
  }
});

const timeSlots = [
  ["", [
    "", "12 AM", "1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", 
    "8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", 
    "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM", 
  ]],
  ["Sunday",    ["", false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false]],
  ["Monday",    ["", false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false]],
  ["Tuesday",   ["", false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false]],
  ["Wednesday", ["", false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false]],
  ["Thurday",   ["", false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false]],
  ["Friday",    ["", false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false]],
  ["Saturday",  ["", false, false, false, false, false, false, false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false]]
]

const getGridSettings = ruleType => {
  let startDay = 1, endDay = 7, startTime = 1, endTime = 24;
  switch (ruleType) {
    case 1: startTime = 9; endTime = 21; break; 
    case 2: startDay = 2; endDay = 6; startTime = 9; endTime = 21; break;
    case 3: startTime = 10; endTime = 18; break;
    case 4: startDay = 2; endDay = 6; startTime = 10; endTime = 18; break;
    case 5: startTime = 18; endTime = 21; break;
    case 6: startDay = 2; endDay = 6; startTime = 18; endTime = 21; break;
  }

  return {
    startDay: startDay,
    endDay: endDay,
    startTime: startTime,
    endTime: endTime
  };
};
</script>

<style scoped>
div.rule-tabs [role="tab"] {
  justify-content: flex-end;
}

.cell {
  width: 25px;
  height: 25px;
  background: #ccc;
  cursor: pointer;
}

.time {
  font-size: 12px;
  color: blue;
  transform: rotate(-90deg);
  background: none;
  white-space: nowrap;
  line-height: 30px;
}

.day {
  text-align: right;
  font-size: 12px;
  cursor: pointer;
  color: blue;
}

.ok {
  background: green;
}

.okoutside {
  background: darkred;
}
</style>

<style>
.active-tab {
  background: #777;
  color: #fff !important;
}

.v-tabs-slider {
  background: #14a5df;
}
</style>

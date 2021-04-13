const selects = {
  resetRules: [
    { id: 1, value: 'All Day All Week (8 AM - 8 PM, Sun - Sat)' },
    { id: 2, value: 'All Day Weekdays (8 AM - 8 PM, Mon - Fri)' },
    { id: 3, value: 'Daytime All Week (9 AM - 5 PM, Sun - Sat)' },
    { id: 4, value: 'Daytime Weekdays (9 AM - 5 PM, Mon - Fri)' },
    { id: 5, value: 'Evening All Week (5 PM - 8 PM, Sun - Sat)' },
    { id: 6, value: 'Evening Weekdays (5 PM - 8 PM, Mon - Fri)' },
    { id: 7, value: '24/7 (Not Recommended)' }
  ],
  eventTriggers: [
    { id: 1, value: 'Appointment: 1 Day in Advance' },
    { id: 2, value: 'Appointment: 1 Day in Advance' },
    { id: 3, value: 'Appointment: 1 Week in Advance' },
    { id: 4, value: 'Appointment: 1 Month in Advance' },
    { id: 5, value: 'Appointment: 2 Days in Advance' },
    { id: 6, value: 'Appointment: 2 Weeks in Advance' },
    { id: 7, value: 'Appointment: 2 Months in Advance' },
    { id: 8, value: 'Appointment: 3 Days in Advance' },
    { id: 9, value: 'Appointment: 3 Weeks in Advance' },
    { id: 10, value: 'Appointment: 3 Months in Advance' },
    { id: 11, value: 'Appointment: 4 Days in Advance' },
    { id: 12, value: 'Appointment: 5 Days in Advance' },
    { id: 13, value: 'Appointment: 6 Days in Advance' },
    { id: 14, value: 'Appointment: Days in Advance' },
    { id: 15, value: 'Appointment: Day Of' },
    { id: 16, value: 'Appointment: Days After' },
    { id: 17, value: 'Appointment: Created' },
    { id: 18, value: 'Appointment: At Start Time' },
    { id: 19, value: 'Appointment: At End Time' },
    { id: 20, value: 'Contact: Created' },
    { id: 21, value: 'Contact: On Birthday' },
    { id: 22, value: 'Message: Assigned' },
    { id: 23, value: 'Special: Custom Filter' },
    { id: 24, value: 'Special: Manual' },
    { id: 25, value: 'Survey: Not Completed Days' }
  ]
};

export default {
  sections: [
    {
      name: "Options",
      fields: [
        { name: "Reset Grid", value: "resetRuleGridId", type: "select", options: selects.resetRules, event: "resetRulesChanged", required: false }
      ]
    },
    {
      name: "General",
      fields: [
        { name: "Name", value: "name", type: "textbox", required: true },
        { name: "Description", value: "description", type: "textbox", required: false },
        { name: "Start Time Offset", value: "startTimeOffset", type: "textbox", required: false },
      ]
    },
    {
      name: "Event Trigger",
      fields: [
        { name: "Trigger", value: "eventTiggerId", type: "select", options: selects.eventTriggers, required: false },
      ]
    },
  ]
};


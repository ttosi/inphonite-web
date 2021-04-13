export default {
  sections: [
    {
      name: "Appointment Details",
      fields: [
        { name: "Provider", value: "provider", type: "select", options: ["provider 1", "provider 2"], required: true },
        { name: "Subject", value: "subject", type: "textbox", required: true },
        { name: "Location", value: "location", type: "textbox", required: false },
        { name: "Start Time", value: "apptStart", type: "datetime", required: false },
        { name: "End Time", value: "apptEnd", type: "datetime", required: false },
        { name: "Job Title", value: "jobTitle", type: "textbox", required: false },
        { name: "State", value: "state", type: "select", options: ["states"], required: false },
        { name: "Result", value: "result", type: "select", options: ["results"], required: false },
      ]
    },
   
    {
      name: "Custom Fields",
      fields: [
        { name: "Custom Field 1", value: "acf1", type: "textbox", required: false },
        { name: "Custom Field 2", value: "acf2", type: "textbox", required: false },
        { name: "Custom Field 3", value: "acf3", type: "textbox", required: false },
        { name: "Custom Field 4", value: "acf4", type: "textbox", required: false },
        { name: "Custom Field 5", value: "acf5", type: "textbox", required: false },
        { name: "Custom Field 6", value: "acf6", type: "textbox", required: false },
        { name: "Custom Field 7", value: "acf7", type: "textbox", required: false },
        { name: "Custom Field 8", value: "acf8", type: "textbox", required: false },
        { name: "Custom Field 9", value: "acf9", type: "textbox", required: false },
        { name: "Custom Field 10", value: "acf10", type: "textbox", required: false },
      ]
    },
    {
      name: "Notes",
      fields: [
        { name: "Notes", value: "notes", type: "textarea", required: false }   
      ]
    }
  ]
};
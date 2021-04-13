const selects = {
  timeZones: [
    { id: 1, value: '(GMT-10:00) Hawai' },
    { id: 2, value: '(GMT-09:00) Alaska' },
    { id: 3, value: '(GMT-08:00) Pacific Time (US & Canada); Tijuana' },
    { id: 5, value: '(GMT-07:00) Arizona' },
    { id: 6, value: '(GMT-07:00) Mountain Time (US & Canada)' },
    { id: 7, value: '(GMT-06:00) Central Time (US & Canada)' },
    { id: 8, value: '(GMT-06:00) Saskatchewan' },
    { id: 9, value: '(GMT-05:00) Eastern Time (US & Canada)' },
    { id: 10, value: '(GMT-05:00) Indiana (East)' },
    { id: 11, value: '(GMT-04:00) Atlantic Time (Canada)' },
    { id: 12, value: '(GMT-03:30) Newfoundland' }
  ],
  languages: [
    { id: 4, value: '[Default]' },
    { id: 58, value: 'Arabic Female 1' },
    { id: 17, value: 'Catalan (Spain)' },
    { id: 6, value: 'Chinese (China)' },
    { id: 28, value: 'Chinese (Hong Kong)' },
    { id: 59, value: 'Chinese (Mandarin) Female 1' },
    { id: 7, value: 'Chinese (Taiwan)' },
    { id: 18, value: 'Danish Female 1' },
    { id: 29, value: 'Danish Male 1' },
    { id: 23, value: 'Dutch Female 1' },
    { id: 30, value: 'Dutch Male 1' },
    { id: 8, value: 'English (Australia) Female 1' },
    { id: 31, value: 'English (Australia) Male 1' },
    { id: 9, value: 'English (British) Female 1' },
    { id: 33, value: 'English (British) Female 2' },
    { id: 32, value: 'English (British) Male 1' },
    { id: 19, value: 'English (Canada)' },
    { id: 20, value: 'English (Indian) Female 1' },
    { id: 60, value: 'English (Indian) Female 2' },
    { id: 1, value: 'English (US) Female 1' },
    { id: 36, value: 'English (US) Female 2' },
    { id: 37, value: 'English (US) Female 3' },
    { id: 38, value: 'English (US) Female 4' },
    { id: 39, value: 'English (US) Female 5' },
    { id: 34, value: 'English (US) Male 1' },
    { id: 35, value: 'English (US) Male 2' },
    { id: 61, value: 'English (US) Male 3' },
    { id: 57, value: 'English (Welsh) Male 1' },
    { id: 21, value: 'Finnish (Finland)' },
    { id: 5, value: 'French (Canada) Female 1' },
    { id: 10, value: 'French Female 1' },
    { id: 62, value: 'French Female 2' },
    { id: 40, value: 'French Male 1' },
    { id: 11, value: 'German Female 1' },
    { id: 42, value: 'German Female 2' },
    { id: 41, value: 'German Male 1' },
    { id: 44, value: 'Icelandic Female 1' },
    { id: 43, value: 'Icelandic Male 1' },
    { id: 12, value: 'Italian Female 1' },
    { id: 63, value: 'Italian Female 2' },
    { id: 45, value: 'Italian Male 1' },
    { id: 13, value: 'Japanese Female 1' },
    { id: 64, value: 'Japanese Male 1' },
    { id: 14, value: 'Korean (Korea)' },
    { id: 65, value: 'Korean Female 1' },
    { id: 22, value: 'Norwegian Female 1' },
    { id: 24, value: 'Polish Female 1' },
    { id: 48, value: 'Polish Female 2' },
    { id: 46, value: 'Polish Male 1' },
    { id: 47, value: 'Polish Male 2' },
    { id: 15, value: 'Portuguese (Brazilian) Female 1' },
    { id: 49, value: 'Portuguese (Brazilian) Male 1' },
    { id: 25, value: 'Portuguese (European) Female 1' },
    { id: 50, value: 'Portuguese (European) Male 1' },
    { id: 51, value: 'Romanian Female 1' },
    { id: 26, value: 'Russian Female 1' },
    { id: 52, value: 'Russian Male 1' },
    { id: 16, value: 'Spanish (Castilian) Female 1' },
    { id: 66, value: 'Spanish (Castilian) Female 2' },
    { id: 53, value: 'Spanish (Castilian) Male 1' },
    { id: 3, value: 'Spanish (Latin American) Female 1' },
    { id: 54, value: 'Spanish (Latin American) Male 1' },
    { id: 67, value: 'Spanish (Mexican) Female 1' },
    { id: 27, value: 'Swedish Female 1' },
    { id: 55, value: 'Turkish Female 1' },
    { id: 56, value: 'Welsh Female 1' }
  ]
}

export default {
  sections: [
    {
      name: "Name and Address",
      fields: [
        { name: "First Name", value: "firstName", type: "textbox", required: true },
        { name: "Last Name", value: "lastName", type: "textbox", required: true },
        { name: "Numeric Identifier ", value: "numericIdentifier", type: "textbox", required: false },
        { name: "Numeric PIN", value: "numericPin", type: "password", required: false },
        { name: "Company", value: "company", type: "textbox", required: false },
        { name: "Job Title", value: "jobTitle", type: "textbox", required: false },
        { name: "Address Line 1", value: "addressLine1", type: "textbox", required: false },
        { name: "Address Line 2", value: "addressLine2", type: "textbox", required: false },
        { name: "City", value: "city", type: "textbox", required: false },
        { name: "State", value: "state", type: "textbox", required: false },
        { name: "Zip", value: "zip", type: "textbox", required: false }
      ]
    },
    {
      name: "Phone and Email",
      fields: [
        { name: "Primary Number", value: "primary", type: "textbox", required: true },
        { name: "Secondary Number", value: "secondary", type: "textbox", required: false },
        { name: "Mobile Number", value: "mobile", type: "textbox", required: false },
        { name: "Fax Number", value: "fax", type: "textbox", required: false },
        { name: "Email Address", value: "email", type: "textbox", required: false },
        { name: "Twitter Account", value: "twitter", type: "textbox", required: false },
        { name: "Do Not Contact", value: "doNotContact", type: "checkbox", required: false },
        { name: "Do Not Archive or Purge", value: "doNotArchiveOrPurge", type: "checkbox", required: false }
      ]
    },
    {
      name: "Notes",
      fields: [
        { name: "Notes", value: "notes", type: "textarea", required: false }

      ]
    },
    {
      name: "Properties and Custom Fields",
      fields: [
        { name: "Time Zone", value: "timeZoneTypeId", type: "select", options: selects.timeZones, required: false },
        { name: "Preferred Language", value: "preferredLanguageTypeId", type: "select", options: selects.languages, required: false },
        { name: "Birthday", value: "birthday", type: "datebox", required: false },
        { name: "Custom Field 1", value: "ccf1", type: "textbox", required: false },
        { name: "Custom Field 2", value: "ccf2", type: "textbox", required: false },
        { name: "Custom Field 3", value: "ccf3", type: "textbox", required: false },
        { name: "Custom Field 4", value: "ccf4", type: "textbox", required: false },
        { name: "Custom Field 5", value: "ccf5", type: "textbox", required: false },
        { name: "Custom Field 6", value: "ccf6", type: "textbox", required: false },
        { name: "Custom Field 7", value: "ccf7", type: "textbox", required: false },
        { name: "Custom Field 8", value: "ccf8", type: "textbox", required: false },
        { name: "Custom Field 9", value: "ccf9", type: "textbox", required: false },
        { name: "Custom Field 10", value: "ccf10", type: "textbox", required: false },
        // TODO: need to get this data from api
        // { name: "Default Provider", value: "defaultProviderId", type: "select", required: false },
      ]
    }
  ]
};
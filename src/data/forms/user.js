export default {
  sections: [
    {
      name: "User Information",
      fields: [
        { name: "First Name", value: "firstName", type: "textbox", required: true },
        { name: "Last Name", value: "lastName", type: "textbox", required: true },
        { name: "Email Address", value: "email", type: "textbox", required: false },
      ]
    },
    {
      name: "Change Password",
      fields: [
        { name: "Current Password", value: "currentPassword", type: "password", required: true },
        { name: "New Password", value: "newPassword", type: "password", required: true },
        { name: "Confirm Password", value: "confirmPassword", type: "password", required: false },
      ]
    },
    {
      name: "Schedule View Settings",
      fields: [
        { name: "Schedule Day Start", value: "firstName", type: "textbox", required: true },
        { name: "Schedule Day End", value: "lastName", type: "textbox", required: true },
      ]
    }
  ]
}
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  iconfont: "md",
  theme: {
    themes: {
      light: {
        primary: "#303030",
        secondary: "#444444",
        accent: "#14A5DF",
        lightgrey: "#555",
        extralightgrey: "#ddd",
        error: "#b71c1c"
      }
    }
  }
});

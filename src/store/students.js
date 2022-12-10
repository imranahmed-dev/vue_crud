import axios from "axios";
import { defineStore } from "pinia";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

export const studentStore = defineStore("students", {
  state: () => ({
    students: [],
  }),

  actions: {
    async store(data) {
      const res = await axios.post("student/store", data);

      if (res.data.success) {
        alert(res.data.message);
        data.name = "";
      } else {
        alert(res.data.message);
      }
    },
    async getData() {
      const res = await axios.get("students");
      if (res.data.success) {
        this.students = res.data.students;
      }
    },

    async deleteData(id) {
      const res = await axios.get("student/destroy/" + id);
      if (res.data.success) {
        alert(res.data.message)
      }
    },
  },
});

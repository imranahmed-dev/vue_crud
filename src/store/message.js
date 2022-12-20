import axios from "axios";
import { defineStore } from "pinia";


axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export const useMessageStore = defineStore("messages", {
  state: () => ({
    users: [],
    userMessage: [],
    errors: [],
  }),

  actions: {
    async storeMessage(data,callback) {
      const res = await axios.post("/user-messages/store", data);
      if (res.data.success) {

        callback();
      }
    },

    //asdf
    async getUsers() {
      const res = await axios.get("/users");
      if (res.data.success) {
        this.users = res.data.data;
      }
    },

    async userMessages(id) {
      const res = await axios.get("/user-messages/" + id);
      if (res.data.success) {
        this.userMessage = res.data;
      }
    },

    //asdf

    async edit(id, callback) {
      const res = await axios.get("/student/edit/" + id);
      if (res.data.success) {
        this.student = res.data.students;
        callback();
      }
    },

    async update(data, callback) {
      const res = await axios.put("/student/update/" + data.id, data);
      if (res.data.success) {
        callback();
      }
    },

    async delete(id, callback) {
      const res = await axios.delete("/student/destroy/" + id);
      if (res.data.success) {
        alert(res.data.message);
        callback();
      }
    },
  },
});

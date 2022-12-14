import axios from "axios";
import { defineStore } from "pinia";


axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export const useStudentStore = defineStore("student", {
  state: () => ({
    students: [],
    student: [],
    errors: [],
    pagination:{
      current_page: 1,
      last_page: 0,
    }
  }),

  actions: {
    async store(data, callback) {
      const res = await axios.post("/student/store", data);

      if (res.data.success) {
        callback(true);
        
      } else {
        this.errors = res.data.message;
        callback(false);
      }
    },
    async get() {
      const res = await axios.get("/students?page="+this.pagination.current_page);
      if (res.data.success) {
        this.students = res.data.students.data;
        this.pagination.current_page = res.data.students.current_page;
        this.pagination.last_page = res.data.students.last_page;
      }
    },

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

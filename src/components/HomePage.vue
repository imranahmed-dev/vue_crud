<template>
  <section class="py-4">
    <div class="container">
      <div class="row">
        <div class="col text-end">
          <router-link class="btn btn-primary btn-sm mb-1" to="student/create"
            >Add New</router-link
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <table class="table table-bordered">
            <thead class="bg-light">
              <tr>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="student in studentStore.students" :key="student">
                <td>{{ student.name }}</td>
                <td>
                  <router-link class="btn btn-info btn-sm me-1" :to="{ name: 'studentEdit', params: { id: student.id } }"
                    >Edit</router-link
                  >
                  <v-btn
                    class="btn btn-danger btn-sm"
                    @click="deleteStudent(student.id)"
                    >Delete</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <Pagination v-if="studentStore.pagination.last_page > 1" :pagination="studentStore.pagination" :offset="3" @paginate="studentStore.get()"></Pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useStudentStore } from "../store/students";
import { onMounted } from "vue";
import Pagination from "./Pagination.vue";
const studentStore = useStudentStore();


const deleteStudent = (id) => {
  if (confirm("Are you sure ?")) {
    studentStore.delete(id, () => {
      studentStore.get();
    });
    
  }
};

onMounted(() => {
  studentStore.get();
});

</script>

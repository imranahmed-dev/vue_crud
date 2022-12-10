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
              <tr v-for="student in studentStores.students" :key="student">
                <td>{{ student.name }}</td>
                <td>
                  <router-link class="btn btn-info btn-sm me-1" to=""
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { studentStore } from "../store/students";
import { onMounted, computed } from "vue";
const studentStores = studentStore();



const deleteStudent = (id) => {
  if (confirm("Are you sure ?")) {
    studentStores.deleteData(id);
  }
};

onMounted(() => {
  studentStores.getData();
});

</script>

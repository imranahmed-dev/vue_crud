
<template>
    <section class="py-4">
        <div class="container">
            <div class="row">
                <div class="col text-end">
                    <router-link class="btn btn-primary btn-sm mb-1" to="/">Back to Home</router-link>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <div class="card-header">
                            <h5>Edit Student</h5>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="editDataStore()">
                                <div class="mb-3">
                                    <input class="form-control" v-model="studentEditForm.name" type="text" placeholder="Enter name">
                                </div>
                                <button class="btn btn-success btn-sm" type="submit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { useStudentStore } from '../store/students';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute(); 
const router = useRouter(); 
const studentStore = useStudentStore();
const studentEditForm = reactive({
  id: '',
  name: '',
});
const editDataStore = () => {
  studentStore.update(studentEditForm, () => {
    router.push('/');
  });
}

onMounted(() => {
   studentStore.edit(route.params.id, () => {
    studentEditForm.name = studentStore.student.name;
    studentEditForm.id = studentStore.student.id;
   });
})

</script>

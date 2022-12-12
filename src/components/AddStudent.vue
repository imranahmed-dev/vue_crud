
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
                            <h5>Add Student</h5>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="dataStore()">
                                <div class="mb-3">
                                    <input class="form-control" v-model="studentForm.name" type="text" placeholder="Enter name">
                                    <div class="text-danger" v-if="validation.errors.name">{{ validation.errors.name[0] }}</div>

                                    <input class="form-control mt-2"  type="file" @change="studentImage">
                                    <img v-show="studentForm.imageUrl" :src="studentForm.imageUrl" alt="test">
                                </div>
                                <button class="btn btn-success btn-sm" type="submit">Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </section>
</template>

<script setup>
import { onMounted, reactive } from 'vue';
import { useStudentStore } from '../store/students';
import { useRouter } from 'vue-router';

const router = useRouter();
const studentStore = useStudentStore();

const studentForm = reactive({
  name: '',
  image: '',
  imageUrl: '',
});

const validation = reactive({
  errors: [],
});

const studentImage = (e) => { 
  let myImage = new FormData();
  myImage.append('image', e.target.files[0]);
  studentForm.image = myImage;

  const fileReader = new FileReader();
  fileReader.addEventListener('load', () => {
    studentForm.imageUrl = fileReader.result;
  })
  fileReader.readAsDataURL(e.target.files[0])
}

const dataStore = () => {
  studentStore.store(studentForm, (isSuccess) => {
    if(isSuccess){
      router.push('/');
    }else{
      validation.errors = studentStore.errors;
    }
  });
}
 
 onMounted ( () => {
  studentStore.errors
 });
</script>

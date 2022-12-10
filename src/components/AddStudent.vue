
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
                        <div class="card-body">
                            <form @submit.prevent="dataStore()">
                                <div class="mb-3">
                                    <input class="form-control" v-model="studentForm.name" type="text" placeholder="Enter name">
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
import { reactive } from 'vue';
import { studentStore } from '../store/students';
const studentForm = reactive({
  name: '',
});
const studentStores = studentStore();
const dataStore = () => {
    studentStores.store(studentForm);
}
</script>

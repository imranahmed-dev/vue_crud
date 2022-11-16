<template>
  <section class="py-4">
    <div class="container">
      <div class="row">
        <div class="col text-end">
          <router-link class="btn btn-primary btn-sm mb-1" to="/"
            >Back to Home</router-link
          >
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="store">
                <div class="mb-3">
                  <input
                    v-model="name"
                    class="form-control"
                    type="text"
                    placeholder="Enter name"
                  />
                </div>
                <button class="btn btn-success btn-sm">Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "pinia";
import { useStore } from "../store/student";

export default {
  name: "asdf",
  data: () => ({
    name: "",
  }),
  methods: {
    ...mapActions(useStore, ["storeData"]),
    store() {
      const data = {
        name: this.name,
      };
      this.storeData(data);
    },
  },
};
</script>

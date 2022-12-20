<script setup>

</script>

<template>
  <div>
<div class="text-center my-3">  
<router-link class="btn btn-primary btn-sm me-2" :to="{name: 'home'}">Home</router-link>
  <router-link class="btn btn-info btn-sm" :to="{name: 'user-list'}">User List</router-link>
</div>

<router-view></router-view>
  </div>
</template>

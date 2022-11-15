<script setup>

</script>

<template>
    <section class="py-4">
        <div class="container">
            <div class="row">
                <div class="col text-end">
                    <router-link class="btn btn-primary btn-sm mb-1" to="student/create">Add New</router-link>
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
                            <tr>
                                <td>Imran</td>
                                <td>
                                    <router-link class="btn btn-info btn-sm me-1" to="">Edit</router-link>
                                    <router-link class="btn btn-danger btn-sm" to="">Delete</router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>


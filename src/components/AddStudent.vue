<script setup>

</script>

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
                            <form>
                                <div class="mb-3">
                                    <input class="form-control" type="text" placeholder="Enter name">
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


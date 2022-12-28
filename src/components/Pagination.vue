<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item" :class="{ disabled: pagination.current_page <= 1 }"><a class="page-link" href="#"
                    @click.prevent="changePage(1)">First Page</a></li>

            <li class="page-item" :class="{ disabled: pagination.current_page <= 1 }"><a class="page-link" href="#"
                    @click.prevent="changePage(pagination.current_page - 1)">Previous</a></li>

            <li class="page-item" v-for="page in pages" :key="page" :class="isCurrentPage(page) ? 'active' : ''">
                <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
            </li>


            <li class="page-item" :class="{ disabled: pagination.current_page >= pagination.last_page }"><a
                    class="page-link" href="#" @click.prevent="changePage(pagination.current_page + 1)">Next</a></li>
            <li class="page-item" :class="{ disabled: pagination.current_page >= pagination.last_page }"><a
                    class="page-link" href="#" @click.prevent="changePage(pagination.last_page)">Last Page</a></li>
        </ul>
    </nav>
</template>

<script setup>
const myPagination = defineProps({
    pagination: Object,
    offset: Number,

});

const emit = defineEmits(['paginate']);

const isCurrentPage = (page) => {
    return myPagination.pagination.current_page === page
};

const changePage = (page) => {
    if (page > myPagination.pagination.last_page) {
        page = myPagination.pagination.last_page;
    }
    myPagination.pagination.current_page = page;
    emit('paginate');
};

let pages =[];
let from = myPagination.pagination.current_page - Math.floor(myPagination.offset / 2)
if (from < 1) {
    from = 1
}
let to = from + myPagination.offset - 1
if (to > myPagination.pagination.last_page) {
    to = myPagination.pagination.last_page
}
while (from <= to) {
    pages.push(from)
    from++
}
</script>
import axios from 'axios'
import { defineStore } from 'pinia'

export const useStore = defineStore({
    id: 'students',

    state: () => {
        students: []
    },

    actions: {
        async storeData(data) {
            this.isLoading = true;
            const res = await axios.post('http://127.0.0.1:8000/api/student/store', data);
            if (res.data.success) {
                alert(res.data.message)
                data.name = ''
            } else {
                alert(res.data.message)
            }
        }
    }

})
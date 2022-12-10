import axios from "axios";
import { ref } from "vue";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';

export default function useStudents(){
    const student = ref([]);
    const students = ref([]);
    const errors = ref({});

    const getStudetns = async () => {
        const response = await axios.get('students');
        students.value = response.students;
    }

    const getStudent = async (id) =>{
        const response = await axios.get('student'+id);
        student.value = response.data;
    }

    const storeStudent = async (data) =>{
        try{
            await axios.post('student/store', data);
        }catch(error){
            if(error.response.status === 422){
                errors.value = error.response.error;
            }
        }
    }

    const updateStudent = async (id) =>{
        try{
            await axios.put('student/update'+ id, student.value)
        }catch(error){

        }
    }
    
    const destroyStudent = async (id) => {
        await axios.delete('student/destory'+id);
        await getStudent();
    }

    return {
        student,
        students,
        getStudent,
        getStudetns,
        storeStudent,
        updateStudent,
        destroyStudent,
        errors,
    }


}
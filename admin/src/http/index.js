import axios from "axios";
import Vue from 'vue';
import router from '../router'
const http = axios.create({
    baseURL:'http://localhost:3000/admin/api'
})

http.interceptors.request.use(config=>{
    if(localStorage.token){
        config.headers.Authorization = 'Bearer '+ localStorage.token
    }
    return config;
},error => {
    return Promise.reject(error)
})

http.interceptors.response.use(res=>{
    return res;
},error => {
    if(error.response.data.message){
        Vue.prototype.$message.error({
            type:'error',
            message:error.response.data.message
        })
        if(error.response.status ===401){
            router.push('/login')
        }
    }
    return Promise.reject(error)
})

export default http
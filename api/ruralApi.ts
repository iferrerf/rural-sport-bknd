
import axios from 'axios';


const ruralApi = axios.create({
    baseURL: '/api',
})


export default ruralApi;
import axios from 'axios';

const inst = axios.create({
    baseURL: 'http://localhost:9000',//deployed url
})

export default inst;
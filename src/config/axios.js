import axios from 'axios'

const AxiosClent = axios.create({
    baseURL: 'http://localhost:4000/'
})

export default AxiosClent

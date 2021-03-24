import axios from 'axios'

const AxiosClent = axios.create({
    baseURL: 'https://my-json-server.typicode.com/z-maker/ReactProductsCrud/'
})

export default AxiosClent

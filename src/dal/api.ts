import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localhost:3004/data",
})

export const dataApi = {
    getData() {
        return instance.get('')
            .then(res => res.data)
            .catch( e => {console.log(e)})
    }
}


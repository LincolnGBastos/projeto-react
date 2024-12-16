import axios from 'axios'


const app = axios.create({
    baseURL: 'https://the-one-api.dev/v2',
})

app.interceptors.request.use(async config => {

    config.headers.Authorization = `Bearer X9IxGSZdz9FcPnkE0_MN`;
    return config;
}

)

export default app
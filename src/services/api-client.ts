import axios from "axios";

export default axios.create({

    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '64d7d723aa8c47ce8f0d4253f7645abb'
    }
})

import axios from "axios"


export const sec2 = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/whyspring/sec2`)
}

export const sec5 = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/whyspring/sec5`)
}

export const sec7 = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/whyspring/sec7`)
}

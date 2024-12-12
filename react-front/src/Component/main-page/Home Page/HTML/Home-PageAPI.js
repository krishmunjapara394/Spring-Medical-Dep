
import axios from 'axios'

export const navbar1 = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/navbar1`)
}

export const sec2 = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/sec2`)
}

export const sec3 = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/sec3`)
}

export const sec4_1 = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/sec41`)
}

export const sec4_2 = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/sec42`)
}

export const sec6 = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/sec6`)
}

export const sec7_1 = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/sec71`)
}

export const sec7_2 = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/sec72`)
}

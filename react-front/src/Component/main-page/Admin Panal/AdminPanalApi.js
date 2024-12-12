
import axios from "axios";

export const Dashboard = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/getdata/dashboard`)
}
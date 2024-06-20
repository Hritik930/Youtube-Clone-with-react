import axios from "axios";
const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { hl: "en", gl: "US" },
    headers: {
        "X-RapidAPI-Key": 'a5e3db3675msh792403a073c750ap1d54fcjsn1e66c91ac443',
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com"
    },
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};

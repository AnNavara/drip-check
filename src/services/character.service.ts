import axios from "axios"

const API_URL = 'http://localhost:3004/';

axios.defaults.baseURL = API_URL;

export const CharacterService = {
    async getAll(accountName: string, realm: string) {
        return axios.get('/characters',{ params: { accountName, realm } })
    }

}
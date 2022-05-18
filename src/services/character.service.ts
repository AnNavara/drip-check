import axios from "axios"

const API_URL = 'http://localhost:3004/';

axios.defaults.baseURL = API_URL;

export interface ICharacters {
    name: string
    league: string
    classId: number
    ascendancyClass: number
    class: string
    level: number
    experience: number
}

export const CharacterService = {
    async getAll(accountName: string, realm: string) {
        return axios.get<ICharacters[]>('/characters',{ params: { accountName, realm } })
    }

}
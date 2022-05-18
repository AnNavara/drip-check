import axios from 'axios';

const API_URL = 'http://localhost:3004/';

axios.defaults.baseURL = API_URL;

export interface ICharacters {
    name: string;
    league: string;
    classId: number;
    ascendancyClass: number;
    class: string;
    level: number;
    experience: number;
}

export interface ICharacter {
    // FIX THIS
    data: ICharacter[];
    name: any;
    items: any[];
    passives: any[];
}

export const CharacterService = {
    async getAll(accountName: string, realm: string) {
        return axios.get<ICharacters[]>('/account', {
            params: { accountName, realm },
        });
    },

    async getOne(
        accountName: string,
        realm: string,
        characterName: string | undefined
    ) {
        return axios.get<ICharacter>('/character', {
            params: { accountName, realm, characterName },
        });
    },
};

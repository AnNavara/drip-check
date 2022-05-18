import { useQuery } from "react-query";
import { CharacterService, ICharacters } from "../services/character.service";

export const useAccount = (accountName: string, realm: string) => {
    const {
        isLoading,
        data: characters,
        refetch,
        isFetching
    } = useQuery(['character list'], () =>
        CharacterService.getAll(accountName, realm),
        {
            select:  ({ data }): ICharacters[] => {
                return data;
            },
            enabled: false
        }
    );

    return { isLoading, characters, refetch, isFetching }
}
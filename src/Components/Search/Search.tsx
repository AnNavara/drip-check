import React from 'react';
import { useQuery } from 'react-query';
import { CharacterService } from '../../services/character.service';
import Characters from '../Characters/Characters';
import styles from './Search.module.css';

type Props = {};

const Search = (props: Props) => {
    const {
        isLoading,
        data: response,
        // error,
    } = useQuery(['character list'], () =>
        CharacterService.getAll('dtnhdantalian', 'pc')
    );

    return (
        <>
            <>
                <label>
                    Account Name: &nbsp;
                    <input type="text" />
                </label>
                <button type="submit">Find Account</button>
            </>
            {isLoading ? (
                <div>Loading</div>
            ) : response?.data.length ? (
                <Characters characterList={response} />
            ) : (
                <div>Account not found</div>
            )}
        </>
    );
};

export default Search;

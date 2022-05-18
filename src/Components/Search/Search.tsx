import React, { useState } from 'react';
import { useAccount } from '../../hooks/useAccount';
import Characters from '../Characters/Characters';
import styles from './Search.module.css';

type Props = {};

const Search = (props: Props) => {
    const [account, setAccount] = useState<string>('');
    const { isLoading, characters, refetch, isFetching } = useAccount(account, 'pc');

    return (
        <>
            <>
                <label>
                    Account Name: &nbsp;
                    <input
                        value={account}
                        onChange={(event) => {
                            setAccount(event.target.value);
                        }}
                        type="text"
                    />
                </label>
                <button onClick={() => refetch()} type="button">
                    Find Account
                </button>
            </>
            {isLoading || isFetching ? (
                <div>Loading</div>
            ) : characters?.length ? (
                <Characters characterList={characters} />
            ) : (
                <div>Account not found</div>
            )}
        </>
    );
};

export default Search;

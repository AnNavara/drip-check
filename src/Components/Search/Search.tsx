import React, { useState } from 'react';
import { useAccount } from '../../hooks/useAccount';
import Characters from '../Characters/Characters';
import styles from './Search.module.css';

type Props = {};

const Search = (props: Props) => {
    const [account, setAccount] = useState<string>('');
    const { isLoading, characters, refetch, isFetching } = useAccount(
        account,
        'pc'
    );

    return (
        <>
            <div className={styles.seach}>
                <label>
                    Account Name: &nbsp;
                    <input
                        className={styles.input}
                        value={account}
                        onChange={(event) => {
                            setAccount(event.target.value);
                        }}
                        type="text"
                    />
                </label>
                <button className={styles.btn} onClick={() => refetch()} type="button">
                    Find Account
                </button>
            </div>
            <Characters isFetching={isFetching} isLoading={isLoading} characters={characters} />
        </>
    );
};

export default Search;

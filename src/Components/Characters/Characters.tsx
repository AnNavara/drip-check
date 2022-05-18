import React from 'react';
import { Link } from 'react-router-dom';
import { ICharacters } from '../../services/character.service';
import styles from './Characters.module.css';

type Props = {
    isLoading: boolean;
    isFetching: boolean;
    characters: ICharacters[] | undefined;
};

const Characters = ({ isLoading, isFetching, characters }: Props) => {
    return (
        <div className={styles.character__wrapper}>
            {isLoading || isFetching ? (
                <div>Loading</div>
            ) : characters?.length ? (
                <div className={styles.character__wrapper}>
                    {characters.map((character: ICharacters) => {
                return (
                    <Link key={character.name} className={styles.character} to={`characters/${character.name}`}>
                        <div>{character.class}&nbsp;</div>
                        <div>{character.league}</div>
                        <header>
                            <h2>{character.name}</h2>
                        </header>
                        <div>{character.level}</div>
                    </Link>
                );
            })}
                </div>
            ) : (
                <div>Account not found</div>
            )}
        </div>
    );
};

export default Characters;

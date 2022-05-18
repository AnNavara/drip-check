import React from 'react';
import { ICharacters } from '../../services/character.service';
import styles from './Characters.module.css';

type Props = {
    characterList: ICharacters[];
};

const Characters = ({ characterList }: Props) => {
    return (
        <div className={styles.character__wrapper}>
            {characterList.map((character: ICharacters) => {
                return (
                    <section key={character.name} className={styles.character}>
                        <div>{character.class}&nbsp;</div>
                        <div>{character.league}</div>
                        <header>
                            <h2>{character.name}</h2>
                        </header>
                        <div>{character.level}</div>
                    </section>
                );
            })}
        </div>
    );
};

export default Characters;

import React from 'react';
import styles from './Characters.module.css';

type Props = {
    characterList: any;
};

const Characters = ({ characterList }: Props) => {
    return (
        <div className={styles.character__wrapper}>
            {characterList.data.map((character: any) => {
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

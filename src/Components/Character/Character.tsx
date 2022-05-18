import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import JSONPretty from 'react-json-prettify';
import { CharacterService, ICharacter } from '../../services/character.service';

type Props = {};

const Character = (Props: Props) => {
    const { character: characterName } = useParams();
    const { data: character, isFetching } = useQuery(
        ['single character'],
        () => CharacterService.getOne('Navara', 'pc', characterName),
        {
            // select:  ({ data }): ICharacter[] => {
            //     return data;
            // },
            enabled: true,
        }
    );

    return <JSONPretty json={character} />;
};

export default Character;

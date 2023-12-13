import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { Text, list } from '@chakra-ui/react';

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {
  const [game, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient.get<FetchGamesResponse>('/gamesx')
    .then(response => setGames(response.data.results))
    .catch(error => setError(error.message));
  })
  
    return (
        <>
        {error && <Text>{error}</Text>}
    <ul>
        {game.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
    </>
  )
}

export default GameGrid
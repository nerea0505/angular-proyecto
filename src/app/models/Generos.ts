export enum Generos {
    Rock = 'Rock',
    Pop = 'Pop',
    Jazz = 'Jazz',
    Hip_Hop = 'Hip-Hop',
    Clasica = 'Clasica',
    Electronica = 'Electronica',
    Reggaeton = 'Reggaeton',
  }

  export const GeneroList = Object.entries(Generos).map(([keyof, value]) => (value));

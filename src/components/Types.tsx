export interface Film{
    id: number;
    title: string;
    releaseYear: number;
    description: string;
    cast: ActorData[];
    language: {
        id: number;
        name: string;
    }
    rentalDuraction: number;
    rentalRate: number;
    length: number;
    replacementCost: number;
    rating: "G" | "PG_13" | "PG" | "R" | "NC_17";
    specialFeatures: string[];
}

export interface ActorData {
    id: number;
    firstName: string;
    lastName: string;
    films: Film[];
}
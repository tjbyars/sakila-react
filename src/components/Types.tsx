export interface Film{
    id: number;
    title: string;
    release_year: number;
    description: string;
    cast: ActorData[];
    language: {
        id: number;
        name: string;
    }
    rental_duration: number;
    rental_rate: number;
    length: number;
    replacement_cost: number;
    rating: "G" | "PG_13" | "PG" | "R" | "NC_17";
    special_features: string[];
}

export interface ActorData {
    id: number;
    firstName: string;
    lastName: string;
    films: Film[];
}
export type SportApiResponse = {
    id: string;
    name: string;
}

export type SportsApiResponse = {
    sports: SportApiResponse[];
}
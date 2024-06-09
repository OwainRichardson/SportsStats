export type TournamentApiResponse = {
    id: string;
    name: string;
    location: string;
    date: string
}

export type TournamentsApiResponse = {
    sports: TournamentApiResponse[];
}
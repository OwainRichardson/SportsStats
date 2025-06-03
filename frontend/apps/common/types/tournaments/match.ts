import { Team } from "../teams/team";

export interface Match {
    id: string,
    homeTeamId: string,
    homeTeam?: Team,
    awayTeamId: string,
    awayTeam?: Team,
    homeTeamScore?: number,
    awayTeamScore?: number,
    pitch: string,
    time: string
    isComplete: boolean;
}
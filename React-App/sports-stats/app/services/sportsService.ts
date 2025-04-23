import { ISportsResponse } from "../types/response/ISportsResponse";

export async function getSports(): Promise<ISportsResponse[]> {
    const response = await fetch("http://localhost:5253/sports");

    if (response.status == 200) {
        let sports: Array<ISportsResponse> = await response.json();

        return sports;
    }

    return [];
}

export async function getSport(sportId: string): Promise<ISportsResponse | undefined> {
    const response = await fetch(`http://localhost:5253/sports/${sportId}`);

    if (response.status == 200) {
        let sport: ISportsResponse = await response.json();

        return sport;
    }

    return undefined;
}
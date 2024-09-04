// export function getSports() {
//     const sports = [{"id": 1, "name": 'Touch Rugby'}, {"id": 2, "name": 'Rugby Union'}, {"id": 3, "name": 'Ultimate Frisbee'}];
    
//     return sports;
// }

import { ISportsResponse } from "../types/response/ISportsResponse";

export async function getSports(): Promise<ISportsResponse[]> {
    const response = await fetch("http://localhost:5253/sports");

    if (response.status == 200) {
        let sports: Array<ISportsResponse> = await response.json();

        return sports;
    }

    return [];
}
import { ISportSettingsInput } from "../types/inputs/ISportSettingsInput";
import { ISportSettingsResponse } from "../types/response/ISportSettingsResponse";

export async function getSportSettings(sportId: string): Promise<ISportSettingsResponse[]> {
    const response = await fetch(`http://localhost:5253/sports/${sportId}/settings`);

    if (response.status == 200) {
        let sports: Array<ISportSettingsResponse> = await response.json();

        return sports;
    }

    return [];
}

export async function updateSportSetting(model: ISportSettingsInput): Promise<void> {
    const response = await fetch(`http://localhost:5253/sports/${model.sportId}/settings/${model.id}`,
                                    {
                                        method: 'PUT',
                                        headers: {
                                            "Content-type": "application/json",
                                        },
                                        body: JSON.stringify(model)
                                    }
    );
}
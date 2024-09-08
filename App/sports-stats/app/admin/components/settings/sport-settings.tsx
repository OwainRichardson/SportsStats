import { useQuery, useMutation } from "react-query";
import { getSportSettings, updateSportSetting } from "@/app/services/sportSettingsService";
import {ISportSettingsInput} from "@/app/types/inputs/ISportSettingsInput";
import FormInput from "@/app/admin/components/form-input";
import SettingsBox from "./settings-box";

export default function SportSettings({ sportId }: ISportSettingsInput) {
    const { data, status, error } = useQuery("sportSettings", () => getSportSettings(sportId));
    const mutation = useMutation(updateSportSetting);
    
  if (status == "loading") {
    return (
        <SettingsBox>
            <span>Loading...</span>
        </SettingsBox>
    )
  }

  if (error) {
    return (
        <SettingsBox>
            <span>Error!</span>
        </SettingsBox>
    );
  }
  
  if (data) {
    return (
        <SettingsBox>
          {
            data.map((input) => {
              return (

                // ToDo: Work out how to pass the event here too to get the updated value
                // onChange={(e) => {
                //   console.log({ field: e.target.name, value: e.target.value });
                // }}
                <FormInput label={input.name} value={input.value} key={input.id} onChange={() => mutation.mutate(input)} />
              );
            })
          }
        </SettingsBox>
        );
    }
}
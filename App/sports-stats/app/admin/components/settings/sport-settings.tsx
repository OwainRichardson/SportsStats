import { useQuery, useMutation } from "react-query";
import { getSportSettings, updateSportSetting } from "@/app/services/sportSettingsService";
import {ISportSettingsInput} from "@/app/types/inputs/ISportSettingsInput";
import FormInput from "@/app/admin/components/form-input";
import SettingsBox from "./settings-box";

export default function SportSettings({ sportId }: ISportSettingsInput) {
  const { data, status, error } = useQuery("sportSettings", () => getSportSettings(sportId));
  const mutation = useMutation(updateSportSetting);
  
  function handleOnChange(event: any, input: ISportSettingsInput) {
    console.log(event.target);
    input.value = event.target.value;

    mutation.mutate(input);
  }

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
                <FormInput label={input.name} value={input.value} id={input.name} key={input.id} onChange={(event: any) => handleOnChange(event, input)} />
              );
            })
          }
        </SettingsBox>
        );
    }
}
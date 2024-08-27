import { IShowHideCheckboxProps } from '@/app/types/IShowHideCheckboxProps';

export default function ShowHideCheckbox({value, showHideState, setShowHideState}: IShowHideCheckboxProps) {

    const toggleIsScoreModifier = () => {
        setShowHideState(!showHideState);
    }

    return (

        <div>
            <div className="flex flex-column mb-4 h-8 items-center p-2">
                <label className="w-1/6">Modify score:</label>
                <input className="hover:cursor-pointer" type="checkbox" defaultChecked={showHideState} onChange={toggleIsScoreModifier} />
            </div>
                {
                    showHideState && 
                    <div className={`flex flex-column mb-4 h-8 items-center p-2 ${showHideState ? 'visible' : 'hidden'}`}>
                        <label className="w-1/6">Modify score by: </label>
                        <input className="h-full border-2 rounded border-gray-300 pl-2 py-4 focus:outline-none focus:border-orange-500 focus:ring-0" type="text" defaultValue={value}></input>
                    </div> 
                }
            </div>
        );
}
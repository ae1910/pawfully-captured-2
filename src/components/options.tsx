import { petType } from '../types/types';
import { StyledButton } from '../components/styles/button.styles'
import down from "../img/down.png";

type optionsType = {
    pets: petType[]
    setPets: React.Dispatch<React.SetStateAction<petType[] | any[]>>
    list: petType[]
    isCheck: string[]
    setIsCheckState: React.Dispatch<React.SetStateAction<string[]>>
    isCheckAll: boolean
    setIsCheckAll: React.Dispatch<React.SetStateAction<boolean>>
    handleDownload: (image: string, filename: string) => void
}

function Options({pets, setPets, isCheck, setIsCheckState, isCheckAll, setIsCheckAll, list, handleDownload}: optionsType) {
    //Filtering and Sorting
    const handleChange = (value: string) => {  //sorts the data
        let tempArr = [...pets];
        if (value === 'a-z') {
          tempArr.sort((a, b) => a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1);
        } else {
          tempArr.sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? 1 : -1);
        }
        return setPets(tempArr);
    };

    //Selecting Images
    const handleSelectAll = () => {  //handles select all and clear all function
        console.log(isCheckAll, isCheck, list)
        setIsCheckAll(!isCheckAll);
        setIsCheckState(list?.map(li => li.title));
        if (isCheckAll) {
            setIsCheckState([]);
        }
    };

    //Downloading Images
    const handleDownloadChecked = () => {
        isCheck.forEach(name => {
            pets.forEach(pet => pet.title.includes(name) ? handleDownload(pet.url, pet.title.split(" ").join("").toLowerCase()) : -1);
        })
    };
    return (
        <div className='results-options'>
            <div>
                <StyledButton className='select-button' name="selectAll" onClick={handleSelectAll} $margin="10px" disabled={pets?.length == 0}>
                    {isCheckAll ? "Clear All" : "Select All"}
                </StyledButton>
                {isCheck?.length !== 0 ? <StyledButton onClick={handleDownloadChecked} $margin="10px">Download</StyledButton> : ""}
            </div>
            <div className='select-container'>
                <select name="sort-by" className="sort-by" defaultValue="" onChange={(e) => handleChange(e.target.value)}>
                    <option value="" disabled hidden>Sort by...</option>
                    <option value="a-z">Sort by A-Z</option>
                    <option value="z-a">Sort by Z-A</option>
                </select>
                <div>
                    <img src={down} alt='down caret'/>
                </div>
            </div>
        </div>
    )
}

export default Options
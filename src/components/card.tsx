import { useState, useEffect } from 'react';
import { StyledButton } from './styles/button.styles';
import { StyledCard } from './styles/cards.styles';
import { HiOutlineDownload } from "react-icons/hi";
import { BsCheck } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { cardProps } from '../types/types';


const PetCard = ({id, title, description, url, onOpen, handleSave, handleToggle, isChecked, handleDownload, isAFave}: cardProps) => {
    const [padding, setPadding] = useState(0);

    const imgRatio = {paddingBottom: padding + '%'};

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    useEffect(() => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            setPadding((img.height / img.width) * 100);
        };
    }, [url]);


    return (
        <StyledCard className='card-container'>
            <div onClick={() => onOpen(title, description, url)} className="pet-card">
                    <div className="image-container" style={imgRatio}>
                        {(id < 6) ?
                            <img loading="eager" src={url} alt={title} />
                            : <img loading="lazy" src={url} alt={title} />
                        }
                        <div className='card-options'>
                            <div className='top-options'>
                                <div className='check-container' onClick={handleClick}> 
                                    <label className='checkbox'>
                                        <input name={title} type="checkbox" onChange={handleToggle} checked={isChecked}/>
                                        <span className="checkmark"><BsCheck /></span> 
                                    </label>
                                </div>
                                {isAFave ?
                                    <StyledButton className="save-button active" $padding="0 2px" onClick={(e) => {handleClick(e); handleSave();}}>
                                        <FaHeart />
                                    </StyledButton>
                                    : <StyledButton className="save-button" $padding="0 2px" onClick={(e) => {handleClick(e); handleSave();}}>
                                        <FaRegHeart />
                                    </StyledButton>
                                }
                            </div>
                            <StyledButton className="download-button" $padding="4px 8px" onClick={(e) => {handleDownload(url, title.split(" ").join("").toLowerCase()); handleClick(e);}}>
                                <HiOutlineDownload />
                            </StyledButton>
                        </div>
                    </div>
                <div className="mobile-options">
                    {isAFave ?
                        <StyledButton className="save-button active" $padding="0 2px" onClick={(e) => {handleClick(e); handleSave();}}>
                            <FaHeart />
                        </StyledButton>
                        : <StyledButton className="save-button" $padding="0 2px" onClick={(e) => {handleClick(e); handleSave();}}>
                            <FaRegHeart />
                        </StyledButton>
                    }
                    <StyledButton className="download-button" $padding="3px 10px" onClick={(e) => {handleDownload(url, title.split(" ").join("").toLowerCase()); handleClick(e)}}>
                        <HiOutlineDownload />
                    </StyledButton>
                </div>
                <div className="card-info">
                    <h3 className="title">{title}</h3>
                    <p className="description">{description}</p>
                </div>
            </div>
        </StyledCard>
        
    );
}
export default PetCard;
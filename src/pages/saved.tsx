import { faveFunctionType } from '../types/types';
import Masonry , { ResponsiveMasonry } from "react-responsive-masonry";
import PetCard from '../components/card';
import Options from '../components/options';
import PetModal from '../components/modal';
import { useEffect } from 'react';


function Saved({faves, setFaves, addFave, openModal, handleOpen, handleClose, handleToggle, info, handleDownload, list, isCheck, setIsCheckState, isCheckAll, setIsCheckAll}: faveFunctionType) {

    useEffect(() => {
        localStorage.setItem("faves", JSON.stringify(faves));
    }, [faves]);

    return (
        <div id='favorites-page'>
            <h1>Favorites</h1>
            <Options 
                pets={faves} 
                setPets={setFaves}
                list={list}
                isCheck={isCheck}
                setIsCheckState={setIsCheckState}
                isCheckAll={isCheckAll}
                setIsCheckAll={setIsCheckAll}
                handleDownload={handleDownload}/>
            {faves.length == 0 ?
            <div className='gallery-container error-container'>
                <p>No, furry friends here yet.</p>
            </div>
            :    <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 680: 3, 950: 4, 1200: 5 }}>
                    <Masonry className='gallery-container' gutter="15px">
                        {faves.map((pet, i) => (
                            <PetCard 
                                key={i}
                                id={i}
                                title={pet.title}
                                description={pet.description}
                                url={pet.url}
                                onOpen={handleOpen}
                                handleSave={() => addFave(pet)}
                                handleToggle={handleToggle}
                                isChecked={isCheck.includes(pet.title)}
                                handleDownload={handleDownload}
                                isAFave={faves.some((fave: any) => fave.title === pet.title)}/>
                            )
                        )}
                    </Masonry>
                </ResponsiveMasonry>}
            {info ?
                <PetModal 
                    title={info.title}
                    description={info.description}
                    url={info.url}
                    open={openModal}
                    onClose={handleClose}
                    handleDownload={handleDownload}/>
            : <></> }
        </div>
    )
}

export default Saved
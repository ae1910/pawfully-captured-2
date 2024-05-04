import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { petType, homeFunctionType } from '../types/types';
import Masonry , { ResponsiveMasonry } from "react-responsive-masonry";
import PetCard from "../components/card";
import PetModal from "../components/modal";
import SearchBar from "../components/search-bar";
import hero from '../img/hero.png'
import Loader from '../components/loader';
import Options from '../components/options';

const FETCH_STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error"
};


const Home = ({faves, setFaves, addFave, openModal, handleOpen, handleClose, handleToggle, info, handleDownload, list, setList, isCheck, setIsCheckState, isCheckAll, setIsCheckAll}: homeFunctionType) => {
  const [pets, setPets] = useState<petType[]>([]);  // managing the output of the data
  
  const [status, setStatus] = useState(FETCH_STATUS.LOADING);

  const { state } = useLocation();

  //Fetch Search
  const searchPets = async (query: string): Promise<any> => {  //fetching the data and returning the data depending if the user uses the search bar or not
    try {
      setStatus(FETCH_STATUS.LOADING);

      const response = await fetch("https://eulerity-hackathon.appspot.com/pets");
      const json = await response.json();

      if(query) {
        setPets(json.filter((pet: {title: string, description: string}) => pet.title.toLowerCase().includes(query.toLowerCase()) || pet.description.toLowerCase().includes(query.toLowerCase())));
        setStatus(FETCH_STATUS.SUCCESS);
      } else {
        setPets(json);
        setStatus(FETCH_STATUS.SUCCESS);
      }
    } catch(err) {
      setStatus(FETCH_STATUS.ERROR);
      console.log(err);
    }
  };

  useEffect(() => {
    searchPets(state);
  }, [state]);


  //Filtering and Sorting
  const loadPets = async (): Promise<any> => {  //fetching the data and returning the data depending if the user uses the search bar or not
    try {
      const response = await fetch("https://eulerity-hackathon.appspot.com/pets");
      const json = await response.json();
      setPets(json);
    } catch(err) {
      console.log(err);
    }
  }
  useEffect(() => {
    loadPets();
  }, []);

  useEffect(() => {
    setList(pets);
  }, [list, pets]);

  const isLoading = status === FETCH_STATUS.LOADING;
  const isSuccess = status === FETCH_STATUS.SUCCESS;
  const isError = status === FETCH_STATUS.ERROR;


  useEffect(() => {
      localStorage.setItem("faves", JSON.stringify(faves));
  }, [faves]);

  return (
    <div>
      <div id="homepage">
        <div>
          <img src={hero} alt='Cute Dog'/>
        </div>
        <h1>Meet Our Pets</h1>
      </div>
      <div className='search-container'>
          <SearchBar onSearch={(query) => searchPets(query)}/>
      </div>
      <Options
        pets={pets}
        setPets={setPets}
        list={list}
        isCheck={isCheck}
        setIsCheckState={setIsCheckState}
        isCheckAll={isCheckAll}
        setIsCheckAll={setIsCheckAll}
        handleDownload={handleDownload}/>
      {isLoading && (
        <div className='gallery-container loading-container'>
          <Loader />
        </div>
      )}
      {isSuccess && (
        <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 680: 3, 950: 4, 1200: 5 }}>
            <Masonry className='gallery-container' gutter="15px">
                {pets.map((pet, i) => (
                    <PetCard 
                      key={i}
                      id={i}
                      title={pet.title}
                      description={pet.description}
                      url={pet.url}
                      onOpen={handleOpen}
                      handleSave={() => addFave(pet)}
                      handleToggle={handleToggle}
                      isChecked={isCheck?.includes(pet.title)}
                      handleDownload={handleDownload}
                      isAFave={faves.some((fave) => fave.title === pet.title)}/>
                  )
                )}
            </Masonry>
        </ResponsiveMasonry>
      )}
      {isError && (
        <div className='gallery-container error-container'>
          <h3>Something went wrong.</h3>
          <p>An unexpected error occurred. Please try again later.</p>
        </div>
      )}
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
  );
}

export default Home;
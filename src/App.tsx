import './App.css';
import {  useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/header";
import Home from "./pages";
import About from "./pages/about";
import Saved from "./pages/saved";
import Footer from "./components/footer";
import { petType } from './types/types';
import toast, { Toaster } from 'react-hot-toast';

const initFaves = {
  faves: [],
};
// const getInitialState = () => {
//   const faves = localStorage.getItem("faves");
//   return faves ? JSON.parse(faves) : initFaves;
// };

function App() {
  const [faves, setFaves] = useState<petType[]>([]);

  const [list, setList] = useState<petType[]>([]);

  //Modal Controls
  const [openModal, setOpenModal] = useState(false);  // the opening and closing of modals for each image
  const [info, setInfo] = useState({title: "", description: "", url: ""});

  const handleClose = () => {  //closes modal
    setOpenModal(false);
  };
  const handleOpen = (title: string, description: string, url: string) => {  //opens modal and fills it it based on the image chosen
    setOpenModal(true);
    setInfo((prevState) => ({...prevState, title: title, description: description, url: url}));
  };

  //Selecting Images
  const [isCheck, setIsCheckState] = useState<string[]>([]);
  const [isCheckAll, setIsCheckAll] = useState(false);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {  //keeps track of each checked checkbox
    const { name, checked } = e.target;
    setIsCheckState([...isCheck, e.target.name]);
    if (!checked) {
      setIsCheckState(isCheck.filter(item => item !== name));
    }
    if(isCheckAll) {
        setIsCheckAll(false);
    }
  };

  //Download
  const handleDownload = (image: string, filename: string) => {  //fetches the image and converts it into a blob url in order to download it
    fetch(image)
      .then(response => {
          return response.blob();
      })
      .then(blob => {
          const blobURL = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = blobURL;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
      })
      .catch((err) => console.log(err));
  };

  //Favorites
  const addFave = (pet: petType) => {
    if(!faves.includes(pet)) {
      setFaves([...faves, pet]);
      toast.success('Saved to Favorites');
    } else {
      setFaves([...faves.filter(item => item !== pet)])
      toast('Removed from Favorites');
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("faves");
    if(data !== null) {
      setFaves(JSON.parse(data))
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("faves", JSON.stringify(faves));
  }, [faves]);

  return (
      <Router basename="/pawfully-captured-2">
        <Header />
        <Routes>
          <Route path="/" element={
            <Home 
              faves={faves}
              setFaves={setFaves}
              addFave={addFave}
              openModal={openModal}
              handleOpen={handleOpen}
              handleClose={handleClose}
              handleToggle={handleToggle}
              info={info}
              handleDownload={handleDownload}
              list={list}
              setList={setList}
              isCheck={isCheck}
              setIsCheckState={setIsCheckState}
              isCheckAll={isCheckAll}
              setIsCheckAll={setIsCheckAll}/>
            }/>
          <Route path="/about" element={<About />}/>
          <Route path="/favorites" element={
            <Saved 
              faves={faves}
              setFaves={setFaves}
              addFave={addFave}
              openModal={openModal}
              handleOpen={handleOpen}
              handleClose={handleClose}
              handleToggle={handleToggle}
              info={info}
              handleDownload={handleDownload}
              list={list}
              isCheck={isCheck}
              setIsCheckState={setIsCheckState}
              isCheckAll={isCheckAll}
              setIsCheckAll={setIsCheckAll}/>
            }/>
        </Routes>
        <Footer />
        <Toaster 
        toastOptions={{
          className: '',
          position: "bottom-center",
          style: {
            padding: '8px 10px',
            background: '#3D0B0B',
            color: ' #FDFAF4',
    },
  }}/>
      </Router>
  );
}

export default App;

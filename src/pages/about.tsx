import '../App.css';
import runningPets from '../img/runningpets.png';
import download from '../img/download.png';
import confused from '../img/confused.png';
import photo from '../img/photo.png';

const About = () => {
  return (
    <div id='about-page'>
        <h1 className='about-title'>Get to Know Us</h1>
        <p>We believe that pets are not just animals, but beloved members of our families. Our goal is to make the world a happier place, one pet photo at a time. That's why we're dedicated to capturing their unique personalities and playful spirits through our photography.</p>
        <div className="hero-image">
            <img src={runningPets} alt='Dog running after while cat is running after a gerbil'/>
        </div>
        <div className='about-section first'>
            <div className='about-item'>
                <h2 className='section-title'>What is Pawfectly Captured?</h2>
                <p>Pawfectly Captured is a platform where pet lovers can discover images that capture the essence of some of our furry friends. We offer a wide variety of pet photos to suit every taste and style. From playful pups and cuddly kitties to magnificent reptiles and feathery friends, we welcome any pet that holds a special place in your heart. </p>
            </div>
            <div>
            <img src={confused} alt='Confused Dog'/>
            </div>
        </div>
        <div className='about-section'>
            <div>
                <img src={photo} alt='Photo of a Dog'/>
            </div>
            <div className='about-item'>
                <h2 className='section-title'>Save the Photos</h2>
                <p>Once you've found a photo you like, you can download it for free.</p>
                <br/>
                <p>You can click the <span><img src={download}/></span> Download button on the top right of the image. Another way to do it is to click the Download button if you click the image to enlarge it.</p>
                <br/>
                <p>If you want to download more than image, instead of doing one by one, just select all the images you want to download. If you want certain images, click the checkbox at the top left of the image, then click Download button at the top. If you want the whole collection just click Select All, then click the Download button.</p>
            </div>
        </div>
    </div>
  );
}

export default About;
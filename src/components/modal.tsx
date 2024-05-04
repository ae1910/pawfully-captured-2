import { modalProps, FaveType } from '../types/types';
import { StyledModal } from './styles/modals.styles';
import { StyledButton } from './styles/button.styles';
import { HiOutlineDownload } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { WhatsappShareButton, WhatsappIcon, FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, PinterestShareButton, PinterestIcon, EmailShareButton, EmailIcon } from 'react-share'
import { FaHeart, FaRegHeart } from 'react-icons/fa6';


const PetModal = ({title, description, url, open, onClose, handleDownload}: modalProps) => {
    if(!open) return  null;
    return (
        <StyledModal onClick={onClose}>
            <div className='modal-container' onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>
                    <IoClose />
                </span>
                <div className="modal-image-container">
                    <img src={url} alt={title}/>
                </div>
                <div className="card-info">
                    <div>
                        <h3 className="modal-title">{title}</h3>
                        <p className="modal-description">{description}</p>
                    </div>
                    <div className='modal-buttons'>
                        <StyledButton className="download-button" onClick={(e) => {handleDownload(url, title.split(" ").join("").toLowerCase());}}>
                            <HiOutlineDownload />
                            Download
                        </StyledButton>
                        <p>Share on:</p>
                        <div className='social-media-buttons'>
                            <WhatsappShareButton url={url} >
                                <WhatsappIcon size={28} round={true} />
                            </WhatsappShareButton>
                            <FacebookShareButton url={url} >
                                <FacebookIcon size={28} round={true} />
                            </FacebookShareButton>
                            <TwitterShareButton url={url} >
                                <TwitterIcon size={28} round={true} />
                            </TwitterShareButton>
                            <PinterestShareButton url={url} media={url}>
                                <PinterestIcon size={28} round={true} />
                            </PinterestShareButton>
                            <EmailShareButton url={url} >
                                <EmailIcon size={28} round={true} />
                            </EmailShareButton>
                        </div>
                    </div>
                </div>
            </div>
        </StyledModal>
    );
}
export default PetModal;
import React from 'react';
import {styled } from "frontity";
import { IconContext } from "react-icons";
import { FaTripadvisor, FaInstagram, FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa';
import {ImLocation2} from 'react-icons/im';
import {IoMdBusiness} from 'react-icons/io';


const InfoFooter = () => {

    return ( 
        <ContactContainer>
            <ContactElement>
                <h2>Contact</h2>
                <h3>Stay in touch</h3>
                <ul>
                    <li>
                        <a href="https://wa.me/+51974773203" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2rem" } }>
                            <FaWhatsapp /> <span>+51 945160616</span>
                        </IconContext.Provider>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:wildfreewalkingtours@gmail.com/" alt="gmail" aria-label="Link to gmail" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2rem" } }>
                            <FaEnvelope /><span>machupicchutravellers@gmail.com</span>
                        </IconContext.Provider> 
                        </a>
                    </li>
                    <li>
                        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2rem" } }>
                            <IoMdBusiness /><span>Operated by Wild Peru Travel</span>
                        </IconContext.Provider> 
                    </li>
                    <li>
                        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2rem" } }>
                            <ImLocation2 /><span>Calle Marquez Nº 219 (Galerias Bocangel), int. 2do Piso office #206, Cusco, Peru.</span>
                        </IconContext.Provider> 
                    </li>
                </ul>
            </ContactElement>

            <ContactElement>
                <h2>Social Media</h2>
                <h3>Follow us to stay tuned about our latest features and releases</h3>
            
                <ul>
                    <li>
                        <a href="https://www.facebook.com/WildFreeWalkingTourCusco/" alt="Share on Facebook" aria-label="Link to Facebook" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2rem" } }>
                            <FaFacebook /><span>Facebook</span>
                        </IconContext.Provider> 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d12493345-Reviews-Wild_Free_Walking_Tour_Cusco-Cusco_Cusco_Region.html" alt="Share on TripAdvisor" aria-label="Link to TripAdvisor" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2rem" } }>
                            <FaTripadvisor /><span>TripAdvisor</span>
                        </IconContext.Provider> 
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/accounts/login/?next=/wildfreewalkingtourscusco/" alt="Share on Instagram" aria-label="Link to Instagram" target="_blank" rel="noreferrer">
                        <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "2rem" } }>
                            <FaInstagram /><span>Instagram</span>
                        </IconContext.Provider>
                        </a>
                    </li>
                </ul>
            </ContactElement>
        </ContactContainer >

    );
}

export default InfoFooter;

const ContactContainer = styled.div`
    display: flex;
    background-color: #333333;
    color: #fff;
    justify-content: space-around;
    align-content: center;

    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`;

const ContactElement = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem 0;

    @media(max-width: 768px) {
        padding: 1rem;
        h2 {
            font-size: 1.2rem;
        }
        margin: .5rem 0;
    }

    ul {
        margin: 0;
        padding: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

        li {
            margin: .5rem 0;
            list-style: none;

            a {
                color : #fff;
                font-size: 1rem;
                margin-right: .5rem;
                text-decoration: none;
                span {
                    margin-left: .5rem;
                }
            }
        }

    }

    h2 {
        font-weight: 700;
        letter-spacing: 1px;
    }

    h3 {
        margin-top: 0;
        font-size: 1rem;
        font-weight: 400;
    }
`;



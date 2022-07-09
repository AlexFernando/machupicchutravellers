import React from "react";
import { connect, styled } from "frontity";
import { FaTripadvisor, FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { IconContext } from "react-icons";

const SocialMediaSuperiorMobile = ({ state }) => {

  return (
      <SocialMediaSuperior>
          <li>
            <a href="https://wa.me/+51974773203" alt="WhatsApp" aria-label="Link to WhatsApp" target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ color: "black", className: "global-class-name", size: "2rem" } }>
                <FaWhatsapp />
              </IconContext.Provider>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/WildFreeWalkingTourCusco/" alt="Share on Facebook" aria-label="Link to Facebook" target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ color: "black", className: "global-class-name", size: "2rem" } }>
                <FaFacebook />
              </IconContext.Provider> 
            </a>
          </li>
          <li>
            <a href="https://www.tripadvisor.com.pe/Attraction_Review-g294314-d12493345-Reviews-Wild_Free_Walking_Tour_Cusco-Cusco_Cusco_Region.html" alt="Share on TripAdvisor" aria-label="Link to TripAdvisor" target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ color: "black", className: "global-class-name", size: "2rem" } }>
                <FaTripadvisor />
              </IconContext.Provider> 
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/accounts/login/?next=/wildfreewalkingtourscusco/" alt="Share on Instagram" aria-label="Link to Instagram" target="_blank" rel="noreferrer">
              <IconContext.Provider value={{ color: "black", className: "global-class-name", size: "2rem" } }>
                <FaInstagram />
              </IconContext.Provider>
            </a>
          </li>
      </SocialMediaSuperior>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(SocialMediaSuperiorMobile);

const SocialMediaSuperior = styled.ul`

    display: flex;
    z-index: 999;
    justify-content: center;

    @media(min-width: 768px) {
        display: none;
    }

    li {
        list-style: none;
        font-weight: 100;
        margin-right: 1rem;
        letter-spacing: 1px;
        font-size: 1rem;

        a {
            text-decoration: none;
            color: #262626;
        }
    }
`

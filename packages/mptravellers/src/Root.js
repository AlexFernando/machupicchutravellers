import React, {useEffect} from 'react';
import { Head, connect, Global, css, styled } from "frontity";
import Header from './components/header/header'
import InfoFooter from './components/InfoFooter'
import Footer from './components/footer';

import Home from './components/Home';
import ClassicMPTours from './components/ClassicTours'
import HikingsMPTours from './components/HikingsTours';
import TourDetails from './components/ToursDetails';
import Blog from './components/blog'
import PostDetails from './components/PostDetails';
import GeneralContact from './components/GeneralContact'



import LatoLight from './google-fonts/S6u9w4BMUTPHh7USSwaPGQ3q5d0N7w.woff2'
import LatoLight2 from './google-fonts/S6u9w4BMUTPHh7USSwiPGQ3q5d0.woff2'
import LatoRegular from './google-fonts/S6uyw4BMUTPHjxAwXiWtFCfQ7A.woff2';
import LatoRegular2 from './google-fonts/S6uyw4BMUTPHjx4wXiWtFCc.woff2';
import LatoBold from './google-fonts/S6u9w4BMUTPHh6UVSwaPGQ3q5d0N7w.woff2';
import LatoBold2 from './google-fonts/S6u9w4BMUTPHh6UVSwiPGQ3q5d0.woff2';
import MontserratCyrrilicExt from './google-fonts/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2'
import MontserratCyrrilic from './google-fonts/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2'
import MontserratVietnamese from './google-fonts/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2'
import MontserratLatinExt from './google-fonts/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2'
import MontserratLatin from './google-fonts/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2';


const Root = ({state, actions}) => {

    const data = state.source.get(state.router.link);
    
    return (
      <>
      <Global
                styles={css`

                    :root {
                        --brand: #0c884a; //#5B3BE8;
                        
                        --black: #000000;
                        --white: #ffffff;
                        --bodycolor: #343434;
                    }

                    /* latin-ext */
                    @font-face {
                        font-family: 'Lato';
                        font-style: normal;
                        font-weight: 300;
                        font-display: swap;
                        src: url(${LatoLight}) format('woff2');
                        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                    }

                      /* latin */
                    @font-face {
                        font-family: 'Lato';
                        font-style: normal;
                        font-weight: 300;
                        font-display: swap;
                        src: url(${LatoLight2}) format('woff2');
                        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                    }

                      /* latin-ext */
                    @font-face {
                        font-family: 'Lato';
                        font-style: normal;
                        font-weight: 400;
                        font-display: swap;
                        src: url(${LatoRegular}) format('woff2');
                        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                    }

                     /* latin */
                    @font-face {
                        font-family: 'Lato';
                        font-style: normal;
                        font-weight: 400;
                        font-display: swap;
                        src: url(${LatoRegular2}) format('woff2');
                        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                    }

                      /* latin-ext */
                    @font-face {
                        font-family: 'Lato';
                        font-style: normal;
                        font-weight: 700;
                        font-display: swap;
                        src: url(${LatoBold}) format('woff2');
                        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                    }

                      /* latin */
                    @font-face {
                        font-family: 'Lato';
                        font-style: normal;
                        font-weight: 700;
                        font-display: swap;
                        src: url(${LatoBold2}) format('woff2');
                        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                    }

                      /* cyrillic-ext */
                    @font-face {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 300;
                        font-display: swap;
                        src: url(${MontserratCyrrilicExt}) format('woff2');
                        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                    }

                    /* cyrillic */
                    @font-face {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 300;
                        font-display: swap;
                        src: url(${MontserratCyrrilic}) format('woff2');
                        unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                    }

                      /* vietnamese */
                    @font-face {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 300;
                        font-display: swap;
                        src: url(${MontserratVietnamese}) format('woff2');
                        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
                    }

                      /* latin-ext */
                    @font-face {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 300;
                        font-display: swap;
                        src: url(${MontserratLatinExt}) format('woff2');
                        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                    }

                      /* latin */
                    @font-face {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 300;
                        font-display: swap;
                        src: url(${MontserratLatin}) format('woff2');
                        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                    }

                                        /* cyrillic-ext */
                    @font-face {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 400;
                        font-display: swap;
                        src: url(${MontserratCyrrilicExt}) format('woff2');
                        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                    }
                    /* cyrillic */
                    @font-face {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 400;
                        font-display: swap;
                        src: url(${MontserratCyrrilic}) format('woff2');
                        unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                    }
                    /* vietnamese */
                    @font-face {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 400;
                        font-display: swap;
                        src: url(${MontserratVietnamese}) format('woff2');
                        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
                    }
                    /* latin-ext */
                    @font-face {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 400;
                        font-display: swap;
                        src: url(${MontserratLatinExt}) format('woff2');
                        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                    }
                    /* latin */
                    @font-face {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 400;
                        font-display: swap;
                        src: url(${MontserratLatin}) format('woff2');
                        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                    }
                    /* cyrillic-ext */
                    @font-face {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 700;
                        font-display: swap;
                        src: url(${MontserratCyrrilicExt}) format('woff2');
                        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
                    }
                    /* cyrillic */
                    @font-face {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 700;
                        font-display: swap;
                        src: url(${MontserratCyrrilic}) format('woff2');
                        unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
                    }
                    /* vietnamese */
                    @font-face {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 700;
                        font-display: swap;
                        src: url(${MontserratVietnamese}) format('woff2');
                        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
                    }
                    /* latin-ext */
                    @font-face {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 700;
                        font-display: swap;
                        src: url(${MontserratLatinExt}) format('woff2');
                        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
                    }
                    /* latin */
                    @font-face {
                        font-family: 'Montserrat';
                        font-style: normal;
                        font-weight: 700;
                        font-display: swap;
                        src: url(${MontserratLatin}) format('woff2');
                        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
                    }
  

                    body {
                        margin: 0;
                        font-family: 'Montserrat', sans-serif;
                        overflow-x: hidden;
                        width: 100%;
                        /*height: 100%;*/
                    }

                
                    /* * {
                        border: 1px solid #f00 !important;
                    }     */
                     
                    p {
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 400;
                    }
                `}
            />

            <Head>
                <title>{state.frontity.title}</title>
                <meta name="description" content={state.frontity.description} />
                <html lang="en" />
                <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
            </Head>

            <Header />

            {data.isHomePage && <Home /> }
            {state.router.link === "/classic-machu-picchu/" && <ClassicMPTours />}
            {state.router.link === "/hiking-machu-picchu/" && <HikingsMPTours />}
            {state.router.link === "/blog/" && <Blog />}
            {state.router.link === "/contact/" && <GeneralContact />}
            {(data.isClassictours || data.isHikingtours) && <TourDetails />}
            {data.isBlogposts && <PostDetails />}

            <InfoFooter />
            <Footer title= "Machu Picchu Travellers" />    
      </>
    );
  };

  export default connect(Root);
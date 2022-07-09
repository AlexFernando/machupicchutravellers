import React, {useEffect} from 'react';
import { connect, styled, css, Global } from "frontity";
import Image from "@frontity/components/image";
import Loading from './Loading';
import mp from '../images/mp_background.jpg'
import Link from './Link'
import LinkMoreInfo from './LinkMoreInfo'
import { IconContext } from "react-icons";
import {GrLanguage} from 'react-icons/gr'
import LinkButtonView from './LinkButtonView'

const HomePage = ({state, actions, libraries}) => {

    useEffect(() => {
        actions.source.fetch("/classictours")
        actions.source.fetch("/hikingtours")
    }, []);
    
    const data = state.source.get('/classictours');
    const dataHikingTours = state.source.get('/hikingtours');

    return ( 

        <>
            <ContainerBackground>
                <picture>
                    <source media="(max-width: 767px)" srcSet={mp}/>
                    <source media="(max-width: 1599px)" srcSet={mp} />
                    <source media="(max-width: 2048px)" srcSet={mp} />

                    <ImageTag
                        src={mp} alt="background cover" width="1800" height="1103"
                    />
                </picture>

                <TextBackground>
                    <h1> Machu Picchu Travellers</h1>
                    <h3>Enjoy your holidays, discovering Machu Picchu and the most outstanding spots in Perú</h3>
                    <h4>Book your trip now and travel when you want</h4>
                    <LinkButtonView href="/contact/">Get Contact</LinkButtonView>
                </TextBackground>
            </ContainerBackground>

            <MarginPaddingContainer>

                <h2>Why to travel to Machu Picchu with us?</h2>

                <IconsContainer>
            
                    <IconsInfo>
                        <h3>Trustworthy and Security</h3>
                        <IconContext.Provider value={{ color: "#484848", className: "global-class-name", size: "2rem" } }>
                            <GrLanguage /> 
                        </IconContext.Provider>
                        
                        <p>This is provisional description, because I don't what to write. Will change soon.</p>
                    </IconsInfo>

                    <IconsInfo>
                        <h3>Local Guides</h3>
                        <IconContext.Provider value={{ color: "#484848", className: "global-class-name", size: "2rem" } }>
                            <GrLanguage /> 
                        </IconContext.Provider>
                        
                        <p>This is provisional description, because I don't what to write. Will change soon.</p>
                    </IconsInfo>

                    <IconsInfo>
                        <h3>Best Prices</h3>
                        <IconContext.Provider value={{ color: "#484848", className: "global-class-name", size: "2rem" } }>
                            <GrLanguage /> 
                        </IconContext.Provider>
                        
                        <p>This is provisional description, because I don't what to write. Will change soon.</p>
                    </IconsInfo>

                    <IconsInfo>
                        <h3>Responsable Tourism</h3>
                        <IconContext.Provider value={{ color: "#484848", className: "global-class-name", size: "2rem" } }>
                            <GrLanguage /> 
                        </IconContext.Provider>
                        
                        <p>This is provisional description, because I don't what to write. Will change soon.</p>
                    </IconsInfo>

                </IconsContainer>

                {/* classic MP Tours */}
                <ContainerToursHome>
                    <h2>Trips to Machu Picchu by train or bus ...</h2>
                
                    <ToursHomeWrap>
                        {
                            data.isReady ?

                                data.items.map( ({type, id}) => {

                                    const singleTour = state.source[type][id];
                                        
                                    return (
                                        <TourHomeItem>
                                            <Link href={singleTour.link}>
                                        
                                                <picture>
                                                    <source media="(max-width: 799px)" srcSet={singleTour.acf.image_card.sizes.medium} />
                                                    <source media="(min-width: 800px)" srcSet={singleTour.acf.image_card.sizes.medium_large} />
                                                    <ImageTourCard src={singleTour.acf.image_card.sizes.medium} alt="hometour" />
                                                </picture>

                                                <InfoHomeTour>
                                                    <span>{singleTour.acf.price}</span>
                                                    <h3>{singleTour.acf.title}</h3>
                                                    <LastInfo>
                                                        <p>English, Spanish</p>
                                                        <LinkMoreInfo href={singleTour.link}>+ Info</LinkMoreInfo>
                                                    </LastInfo>    
                                                </InfoHomeTour>
                                            </Link>
                                        </TourHomeItem>
                                    )
                                })
                             
                            :null
                        }
                    </ToursHomeWrap>
                </ContainerToursHome>

                {/* HIKING TOURS BRIEF */}

                <ContainerToursHome>
                    <h2>Hiking trails to Machu Picchu, for the most adventurous travellers ...</h2>
                
                    <ToursHomeWrap>
                        {
                            dataHikingTours.isReady ?

                                dataHikingTours.items.map( ({type, id}) => {

                                    const singleTour = state.source[type][id];
                                        
                                    return (
                                        <TourHomeItem>
                                            <Link href={singleTour.link}>
                                        
                                                <picture>
                                                    <source media="(max-width: 799px)" srcSet={singleTour.acf.image_card.sizes.medium} />
                                                    <source media="(min-width: 800px)" srcSet={singleTour.acf.image_card.sizes.medium_large} />
                                                    <ImageTourCard src={singleTour.acf.image_card.sizes.medium} alt="hometour" />
                                                </picture>

                                                <InfoHomeTour>
                                                    <span>{singleTour.acf.price}</span>
                                                    <h3>{singleTour.acf.title}</h3>
                                                    <LastInfo>
                                                        <p>English, Spanish</p>
                                                        <LinkMoreInfo href={singleTour.link}>+ Info</LinkMoreInfo>
                                                    </LastInfo>    
                                                </InfoHomeTour>
                                            </Link>
                                        </TourHomeItem>
                                    )
                                })
                            
                            :null
                        }
                    </ToursHomeWrap>
                </ContainerToursHome>
            </MarginPaddingContainer>
        </>


     );
}
 
export default connect(HomePage);


export const ContainerBackground = styled.div`
    display: flex;
    overflow: hidden;
    position: relative;
    width: 100vw;
    height: 80vh;
    margin-top: 2rem;
    background: linear-gradient( to top, rgba(34,49,63,.5), rgba(34,49,63,.5) );


    @media (max-width: 768px){
     
        height: 476px;
    }

    img {
        width: 100vw;
        height: 80vh;
        pointer-events: none;
        position: absolute;
        z-index: -1;
        object-fit: cover;

        @media (max-width: 768px){
        
            height: 476px;
        }
    }
    text-align: center;
`
export const TextBackground = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    padding: 0 30rem;

    h1 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 1.4rem;
        font-weight: 500;
    }

    h4 {
        font-size: 1.2rem;
        margin-bottom: 4rem;
        font-weight: 500;
    }


    @media (max-width: 768px){
        padding: 3rem 1rem 0rem 1rem;

        h1 {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 1.2rem;
        }

        h4 {
            font-size: 1rem;
        }
    }


    @media (min-width:769px) and (max-width: 1200px){
        padding: 3rem 5rem 0rem 5rem;

        h1 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.5rem;
        }

        h4 {
            font-size: 1.2rem;
        }
    }

    @media (min-width:1201px) and (max-width: 1500px){
        padding: 3rem 20rem 0rem 20rem;

        h1 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.5rem;
        }

        h4 {
            font-size: 1.2rem;
        }
    }
`
export const ImageTag = styled(Image)`
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    position: absolute;
    z-index: -1;
    object-fit: cover;

    @media (max-width: 767px){
       
        width: auto;
        height: 276px;
    }
`

export const MarginPaddingContainer = styled.div`
    max-width: 77.5rem;
    margin: 5% auto;

    h2 {
        text-align: center;
    }
`

export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    margin-top: 2rem;
    padding:calc(1.5rem/2); ;
    border: 1px solid gray;
    border-radius: 5px;

    h2 {
        font-size: 1.2rem;
    }

    div {
        text-align: center;
    }

    @media(max-width: 768px) {
        flex-direction: column;
    }
`

/**ABOUT STYLES */

export const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4rem 0;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const IconsInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
 
    @media(max-width: 768px) {
        margin: 1rem 0;
    }

    h3 {
        font-size: 1.4rem;
        font-weight: 400;
    }

    p {
        font-size: 1.2rem;
        color: #6c757d;
        text-align: center;
        margin-left: 2rem;
        margin-right: 2rem;

        @media(max-width: 768px) {
            p {
                margin-left: 0;
                margin-right: 0;
            }
        }
    }   
`

/**END ABOUT STYLES */

/**HOME TOURS STYLES */

const ContainerToursHome = styled.div`
        margin: 4rem 0;
`

export const ToursHomeWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    background-color: #fff;
    color: #444;


    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);

    @media (max-width: 576px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }

    @media (min-width: 576px) and (max-width: 768px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
    }
`;

export const TourHomeItem = styled.div`
    margin: 2rem 0;
    box-shadow: 0 .8px 5px .8px grey;
    border-radius: .5rem;
`;

export const InfoHomeTour = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    span {
        color:gray;
        font-weight: bold;
        margin: 0;
        font-size: 1.5vh;

        @media (max-width: 768px) {
            font-size: 2vh;
        } 
    }

    h3{
        color: #484848;
        margin: .5rem 0;
        font-size: 1.8vh;

        @media (max-width: 768px) {
            font-size: 2.5vh;
        } 
    }

    p {
        color: var(--brand);
        font-weight: bold;
        margin: 0;
        font-size: 1.5vh;

        @media (max-width: 768px) {
            font-size: 2vh;
        } 
    }

    li {
        color: #484848;
        text-transform: capitalize;

        font-size: 2vh;

            @media (max-width: 768px) {
                font-size: 2vh;
            } 
    }

`

export const LastInfo = styled.div`
    display: flex;
    justify-content: space-around;
    align-content: center;
`

export const ImageTourCard = styled(Image)`
    width: 100%;
    height: 25vh;
    border-radius:.5rem .5rem 0 0;

    @media (max-width: 767px) {
        width: 100%;
        height: 30vh;
    } 
`
/**END HOME TOURS STYLES */

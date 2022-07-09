import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global, loadable } from "frontity";
import Image from "@frontity/components/image";

import { IconContext } from "react-icons";
import {GrLanguage} from 'react-icons/gr'
import {BiTimeFive} from 'react-icons/bi'
import {MarginPaddingContainer} from './Home'
import Loading from './Loading';

//IMAGE SLIDER
import { Zoom } from 'react-slideshow-image';
import ImageSliderStyles from 'react-slideshow-image/dist/styles.css'

const TourDetails = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const idTour = data.id;

    const postTour = state.source[data.type][idTour];

    const Html2react = libraries.html2react.Component;

    const arrImages = []
    
    if(typeof postTour !== "undefined") {
        Object.keys(postTour.acf.carousel_images_section).map(elem => {
            arrImages.push(postTour.acf.carousel_images_section[elem].sizes.medium_large)
        })
    }


    const zoomInProperties = {
        indicators: true,
        scale: 1.4
    }

    return (
        <>         
        {typeof postTour === "undefined" ? <Loading /> : 

            <MarginPaddingContainer>

                <HeaderDetails>
                    <h1>{postTour.acf.title}</h1>
                    <span>By Wild Free Walking Tours</span>
                    <p>
                        <IconContext.Provider value={{ color: "#484848", className: "global-class-name", size: "1rem" } }>
                            <GrLanguage />  {postTour.acf.language}
                        </IconContext.Provider>
                    </p>

                    <p>
                        <IconContext.Provider value={{ color: "#484848", className: "global-class-name", size: "1rem" } }>
                            <BiTimeFive />    {postTour.acf.duration}
                        </IconContext.Provider>
                      
                    </p>
                </HeaderDetails>
        
                <Content>
                    <Html2react html={postTour.content.rendered} />
                </Content>

                <ImagesContainerSlider>
                    <h2>Gallery</h2>
                    <Global styles={ImageSliderStyles} />
                    <Zoom {...zoomInProperties}>
                        {arrImages.map((each, index) => (
                        <div key={index} style={{width: "100%"}}>
                            <Image style={{ objectFit: "cover", width: "100%" }} src={each} />
                        </div>
                        ))}
                    </Zoom>
                </ImagesContainerSlider>
       
            </MarginPaddingContainer>
        }
        </>

    )
}

const HeaderDetails = styled.div`
    margin-top: 20vh;
    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);
    color: #484848;
    line-height: 1.5;

    h1 {
        margin-bottom: 0;
    }
    span {
        color: gray;
        margin-top: 0;
    }
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    color: #484848;
    margin-top: 2rem;
    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);
    line-height: 1.5;

    @media(max-width: 1200px) {
        flex-direction: column;
        align-content: center;
    }

    .wp-block-group {

        &:nth-of-type(1){
            
            padding-right: calc(3rem/2);
            margin-right: calc(3rem/2);
            text-align: justify;

            h2 {
                font-size: 1.5rem;
                border-top: 1px solid rgb(204, 204, 204);
                padding-top: 1rem;
                padding-right: calc(1.5rem/2);
                margin-right: calc(1.5rem/2);
            }

            h4 {
            
            }

            ul{
                &:last-of-type {

                    li {
                        list-style: none;
                        padding: 0;

                        padding-bottom: 1.5rem;
                        border-left: 1px solid #abaaed;
                        position: relative;
                        padding-left: 20px;
                        margin-left: 10px;

                        &:before {
                            content: '';
                            width: 15px;
                            height: 15px;
                            background: white;
                            border: 1px solid #4e5ed3;
                            box-shadow: 3px 3px 0px #bab5f8;
                            box-shadow: 3px 3px 0px #bab5f8;
                            border-radius: 50%;
                            position: absolute;
                            left: -10px;
                            top: 0px;
                        }

                        &:last-of-type {
                            border: 0px;
                            padding-bottom: 0;
                        }

                        h3 {
                            margin-top: 0;
                        }
                    }
                }
            }
        }
        
    }

    .wp-block-group {

        &:nth-of-type(2){

            flex-basis: 80%;
            padding-left: calc(3rem/2);
            margin-left: calc(3rem/2);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            align-self: flex-start;
            font-size: 1.5rem;

            @media(max-width: 768px) {
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                padding: 0rem;
            }
        }
    }

    .wp-block-contact-form-7-contact-form-selector {
        flex-basis: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        font-size: 1.5rem;

        @media(max-width: 768px) {
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            padding: 0rem;
        }

        .wp-block-group {

            @media(max-width: 768px) {
            
                    width: 100%;
                    height: 100%;       
            }
        }

        .wpcf7  {
            border-radius: .4rem;
            box-shadow: 0 2px 5px 1px grey;
            background: rgba(255, 255, 255, 0.90);
            padding: 1rem 3rem 1rem 2rem;
            margin: 1rem 0rem;


            @media(max-width: 768px) {
                iframe {
                    width: 100%;
                    height: 100%;
                }
            }

            h3 {
                margin-bottom: 4rem;
            }
        }

        label {
            font-size: 1rem;
        }

        input, textarea, select {
            height: 100%;
            padding:10px;
            margin:10px 0; 
            border: 1px solid rgba(97, 97, 97, 0.7);
            
            //box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
            border-radius:5px;
            width:100%;
            font-family:inherit;
            font-size: 1rem;
        }

        @media(max-width: 768px) {
            input, textarea {
                width: 100%;
            }
        }

        textarea {
            height: 150px;
        }

        input[type="submit"] { 
            width: auto;
            background-color: #f4623a;
            height: 48px;  
            padding: 1.5rem;
            text-transform: none;
            border: 1px solid #fff;
            font-weight: 500;
            font-size: 1rem;
            text-transform: capitalize;
            color: #FFF;
            cursor: pointer;
            font-family: 'Montserrat', sans-serif;
            text-align: center;
            padding: 2px 24px;
            position: relative;

            @media(max-width: 768px) {
                width: 100%;
                
            }
        
            &:hover {
                background-color: #ee3e0d;
                transition: all 0.4s;
            }
        }

        a {
            text-decoration: none;
            color: #ff8562;
        }
    }
`;


const ImagesContainerSlider = styled.div`
    width: 600px;
    height: 420px;
    margin: 5% auto 10rem auto;
    
    @media(max-width: 1200px) {
        width: 100%;
        height: 100%;
        margin: 0;
    }
`


export default connect(TourDetails);


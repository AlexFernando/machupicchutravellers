import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global, loadable } from "frontity";
import Image from "@frontity/components/image";

import { IconContext } from "react-icons";
import {GrLanguage} from 'react-icons/gr'
import {BiTimeFive} from 'react-icons/bi'
import {MarginPaddingContainer} from './Home'
import Loading from './Loading';


const PostDetails = ({state, actions, libraries}) => {

    const data = state.source.get(state.router.link);

    const idTour = data.id;

    const postTour = state.source[data.type][idTour];

    const Html2react = libraries.html2react.Component;

    return (
        <>         
        {typeof postTour === "undefined" ? <Loading /> : 

            <MarginPaddingContainer>

                <HeaderDetails>
                    <h1>{postTour.title.rendered}</h1>
                    <span>By Wild Free Walking Tours</span>
                </HeaderDetails>
        
                <Content>
                    <Html2react html={postTour.content.rendered} />
                </Content>
       
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
    color: #484848;
    margin-top: 2rem;
    padding-left: calc(1.5rem/2);
    padding-right: calc(1.5rem/2);
    line-height: 1.5;

    @media(max-width: 1200px) {
        flex-direction: column;
        align-content: center;
    }
`;




export default connect(PostDetails);


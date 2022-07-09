import React, {useEffect} from 'react';
import {connect, styled, css} from "frontity";

import Loading from './Loading';

const GeneralContact = ({state, actions, libraries}) => {

    useEffect( () => {
        actions.source.fetch("/contact")       
    }, [])

    const Html2react = libraries.html2react.Component;

    const contentForm = state.source.page["6"];

    return ( 
        <>
            {typeof contentForm === "undefined" ? <Loading /> 
                :
                <Content>
                    <h2>Nice to Meet you</h2>
                    <h3>Enjoy travelling with us</h3>
                    <Html2react html={contentForm.content.rendered} />
                </Content>
            }
        </>
    );
}
 
const Content = styled.div`

    h2 {
        color: var(--brand);
    }

    h3 {
        color: #000;
        margin-bottom: 3rem;
    }


    font-size: 1.1rem;
    padding-left: 10rem;

    @media(max-width: 768px) {
        padding-left: 1rem;
    }
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 6rem;

    @media(max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0rem;
    }

    .wp-block-group {

        display: flex;
        justify-content: space-around;
        margin: 3rem 0rem;

        @media(max-width: 768px) {
            flex-direction: column;
            width: 100%;
            height: 100%;
        }
    }

    .wpcf7  {
        border-radius: .4rem;
        box-shadow: 0 15px 30px 1px grey;
	    background: rgba(255, 255, 255, 0.90);
        padding: 3rem;
        width: 70%;
        font-size: 1rem;

        @media(max-width: 768px) {
            width: 50%;
            iframe {
                width: 100%;
                height: 100%;
            }
        }

        h3 {
            margin-bottom: 4rem;


        }
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
        font-size: inherit;
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
`;


export default connect(GeneralContact);
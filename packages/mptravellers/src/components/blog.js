import React, {useState, useEffect} from 'react';
import {Global, connect, styled, css } from "frontity";
import Image from "@frontity/components/image";
import {ContainerBackground, ImageTag, TextBackground} from './Home';

//icons
import { IconContext } from "react-icons";
import { AiFillClockCircle } from 'react-icons/ai';
import {BiMoney} from 'react-icons/bi';

import Loading from './Loading';
import Link from './Link';
import LinkMoreInfo from './LinkMoreInfo';

const Blog = ({state, actions, libraries}) => {

    useEffect( () => {
        actions.source.fetch("/blogposts")
    }, [])

    const data = state.source.get('/blogposts');


    let myPosts = [];

    if(data.isReady) {
        
        data.items.map( ({id}) => {

            const singlePost = state.source.blogposts[id];
            myPosts.push(singlePost);
            console.log("posts : ", myPosts)
        })
    }

    const pageBlog = state.source.page[46];

    const Html2react = libraries.html2react.Component;

    return ( 
        <>
        {data.isReady ?
            <>           
                {typeof pageBlog === "undefined" ? <Loading /> : 
                    <>
                        {
                            data.isReady && myPosts.length > 0? 
        
                                <div>
                                    {
                                        myPosts.map( post => {
                                            return(
                                                <div>
                                                    <h1>{post.title.rendered}</h1>

                                                    <Content>
                                                        <Html2react html={post.excerpt.rendered} />
                                                    </Content>

                                                    <Link href={post.link}>
                                                        Link to
                                                    </Link>
                                                </div>

                                            )
                                        })
                                    }
                                </div>
        
                            :null
                        }
                    </>
                }
            </>

        : <Loading />}
        </>
    );
}

export default connect(Blog);

const Content = styled.div`

`
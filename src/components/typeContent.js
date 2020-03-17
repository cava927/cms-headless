import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export const Text = (props) => {
    let {content} = props;
    return <div className={content.styleClass}>
                <h2>{content.title}</h2>
                <p>{content.body}</p>
            </div>;
};

export const Media = (props) => {
    let {content} = props;
    let src = 'http://localhost:1337' + content.media.url;
    return <>
    {
        content.mediaType ==='img' ?
         <> 
            { content.hasLink ?
                <Link to={`/${content.link}`}>
                    <img src={src} alt={content.description}/>
                </Link> : <img src={src} alt={content.description}/>
            }
            {content.body ?
            <>  <div className={content.styleClass}>
                    <h3>{content.body}</h3>
                    <p>{content.description}</p>
                </div>
            </>
                : null
            }
        </> : 
        <video poster="" autoPlay  className="videoGrid" playsInline muted src={src}>
            <source   src={src} type="video/mp4"></source>    
        </video>
    }
</>
};

export const Card = (props) => {
    let {content} = props;
    let imgSrc = 'http://localhost:1337' + content.media.url;
    // const goToPage= content =>{
    //     return <Link to='/Landing' />
    // }
    return  <Link to={`/section/${content.title.toLowerCase().trim()}`}>
                <div className="cardGrid">
                        <Media content={content}/>
                        <div className="containerCard">
                            <h4><b>{content.title}</b></h4>
                            <p>{content.body}</p>
                        </div>
                    </div>
            </Link>
};


import React from 'react';
import { Helmet } from 'react-helmet';
import * as Images from '../../assets';

const WebPage = ({ title, description, imageName }) => {


    const imageUrl = `${Images.logo}`;
    return (
        <div className='hidden'>
            <Helmet>
                <title>{title}</title>
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={Images.logo} />
                <meta property="og:url" content={`https://headway.org.in/#/`} />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={imageUrl} />
            </Helmet>

            <h1>{title}</h1>
            <p>{description}</p>
            <img src={imageUrl} alt={title} />
        </div>
    );
};

export default WebPage;

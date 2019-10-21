import React from 'react';
import Helmet from 'react-helmet'

import SocialImg from '../../assets/images/social.png';

const SeoInfos = (props) => {
    return(
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <link rel="canonical" href={props.canonical} />

            <meta property="og:locale" content="pt_BR" />
            <meta property="article:publisher" content="https://www.facebook.com/maappz/ " />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:site_name" content="MAAPPZ" />
            <meta property="og:url" content={props.canonical} />
            <meta property="og:image" content={SocialImg} />
            <meta property="og:image:width" content="950" />
            <meta property="og:image:height" content="236" />

            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:card" content={SocialImg} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:image" content={SocialImg} />
            <meta name="twitter:site" content={props.canonical} />
            <meta name="twitter:creator" content="@maappz" />
        </Helmet>
    );
}

export default SeoInfos;
import React from 'react';
import AboutLaunch from '../AboutLaunch/AboutLaunch';
import NftContent from '../NftContent/NftContent';
import Simplicity from '../Simplicity/Simplicity';
import FuturePreNft from '../FuturePreNft/FuturePreNft';
import CreateContent from '../ContentPlatform/CreateContent';

const Home = () => {
    return (
        <div>
           <AboutLaunch></AboutLaunch>
           <NftContent></NftContent>
           <Simplicity></Simplicity>
           <FuturePreNft></FuturePreNft>
           <CreateContent></CreateContent>
        </div>
    );
};

export default Home;
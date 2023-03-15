import React from 'react';
import Search from '../SearchBar/Search';

const Home = () => {
    return (
        <div>
            <h1 className='text-center mt-4 text-4xl'>Welcome to MoviesRealm</h1>
            <Search />
        </div>
    );
};

export default Home;
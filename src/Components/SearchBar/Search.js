import { Input } from '@material-tailwind/react';
import axios from 'axios';
import React, { useState } from 'react';

const Search = () => {

    let [name, setName] = useState('');
    const [movie, setMovie] = useState({});

    /* The handleChange() function to set a new state for input */
    const handleChange = (event) => {
        setName(event.target.value);
        console.log(name)

        axios.get(`https://omdbapi.com/?t=${name}&apikey=64b3de92`)
            .then(function (response) {
                // handle success
                console.log("Res", response.data);
                setMovie(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.movie.value;
        axios.get(`https://omdbapi.com/?t=${title}&apikey=64b3de92`)
            .then(function (response) {
                // handle success
                console.log("Res", response.data);
                setMovie(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });



    }
    // https://omdbapi.com/?t=b&apikey=64b3de92


    return (
        <>
            <form onSubmit={handleOnSubmit}>
                { /* The handleChange() is triggered when text is entered */}
                <div>
                    <h1>My Name is <span style={{ color: 'red' }} >
                        {name}</span></h1>
                    <div className="w-72 mx-auto mt-10">
                        <Input
                            type="text"
                            value={name}
                            onChange={handleChange}
                            label='Search for movies'
                            name='movie'
                        />
                        <h1></h1>
                    </div>

                    <div className='flex flex-col gap-3 items-center justify-center mt-10'>
                        <div>
                            <img src={movie.Poster} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>{movie.Title}</h1>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Search;
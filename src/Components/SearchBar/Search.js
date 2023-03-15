import { Button, Input } from '@material-tailwind/react';
import axios from 'axios';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'

const Search = () => {

    let [name, setName] = useState('');
    let [show, setShow] = useState(false);
    const [movie, setMovie] = useState({ Title: "Search" });


    /* The handleChange() function to set a new state for input */
    const handleChange = (event) => {
        setName(event.target.value);
        console.log(name)
        setMovie({ Title: "Searching....." })
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
                    <h1 className='text-center mt-4'>Find your favourite movies</h1>
                    <div className="w-72 flex justify-start gap-4 items-center mx-auto mt-10">
                        <Input
                            type="text"
                            value={name}
                            onChange={handleChange}
                            label='Search for movies'
                            name='movie'
                        />
                        <h1><FaSearch className='text-2xl' /></h1>
                    </div>

                    <div className='flex flex-col gap-3 items-center justify-center mt-10'>
                        <div>
                            <img src={movie.Poster} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>{movie.Title}</h1>
                        </div>
                        {movie ?
                            <>
                                {show ? <div className='mt-3'>
                                    <Button onClick={() => setShow(!show)}>Hide details</Button>
                                </div> :
                                    <Button className='mb-3' onClick={() => setShow(!show)}>Show details</Button>
                                }
                            </> : ""}

                        {
                            show ? <>
                                <div class="flex flex-col max-w-7xl mb-10">
                                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                            <div class="overflow-hidden">
                                                <table class="min-w-full mb-10">
                                                    <thead class="bg-white border-b">

                                                    </thead>
                                                    <tbody>

                                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 text-start">
                                                                Genre:
                                                            </td>

                                                            <td class="text-sm text-gray-900 font-medium px-6 py-4 text-start">
                                                                {movie.Genre}
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 text-start">
                                                                Year:
                                                            </td>

                                                            <td class="text-sm text-gray-900 font-medium px-6 py-4 text-start">
                                                                {movie.Year}
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 text-start">
                                                                IMDB Ratings:
                                                            </td>

                                                            <td class="text-sm text-gray-900 font-medium px-6 py-4 text-start">
                                                                {movie.imdbRating}
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 text-start">
                                                                Language:
                                                            </td>

                                                            <td class="text-sm text-gray-900 font-medium px-6 py-4 text-start">
                                                                {movie.Language}
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 text-start">
                                                                Country:
                                                            </td>

                                                            <td class="text-sm text-gray-900 font-medium px-6 py-4 text-start">
                                                                {movie.Country}
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 text-start">
                                                                Plot:
                                                            </td>

                                                            <td class="text-sm text-gray-900 font-medium px-6 py-4 text-start">
                                                                {movie.Plot}
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 text-start">
                                                                Director:
                                                            </td>

                                                            <td class="text-sm text-gray-900 font-medium px-6 py-4 text-start">
                                                                {movie.Director}
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 text-start">
                                                                Writer:
                                                            </td>

                                                            <td class="text-sm text-gray-900 font-medium px-6 py-4 text-start">
                                                                {movie.Writer}
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 text-start">
                                                                Cast:
                                                            </td>

                                                            <td class="text-sm text-gray-900 font-medium px-6 py-4 text-start">
                                                                {movie.Actors}
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                                            <td class="text-sm text-gray-900 font-semibold px-6 py-4 text-start">
                                                                Released Date:
                                                            </td>

                                                            <td class="text-sm text-gray-900 font-medium px-6 py-4 text-start">
                                                                {movie.Released}
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </> : ''
                        }
                    </div>
                </div>
            </form>
        </>
    );
};

export default Search;
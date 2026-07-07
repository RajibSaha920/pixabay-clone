import React, { useContext } from 'react'
import Search from './Search'
import pixabayContext from '../context/pixabayContext'
import { useNavigate } from "react-router-dom";



const Navbar = () => {

    const navigate = useNavigate();

    const { fetchImageData } = useContext(pixabayContext);
    const handleCategory = (category) => {
        fetchImageData(category);
        navigate(`/category/${category}`);
    };
    return (
        <>

            <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    {/* Logo */}
                    <a href="/" className="text-2xl font-bold text-blue-600">
                        Pixabay Clone
                    </a>


                    {/* Menu */}
                    <ul className="hidden items-center gap-8 md:flex">
                        <li>
                            <button
                                onClick={() => handleCategory("fashion")}
                                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                Fashion
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => handleCategory("nature")}
                                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                Nature
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => handleCategory("science")}
                                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                Science
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleCategory("education")}
                                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                Education
                            </button>

                        </li>
                        <li>
                            <button
                                onClick={() => handleCategory("feelings")}
                                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                Feelings
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => handleCategory("Animals")}
                                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                Animals
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => handleCategory("places")}
                                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                places
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => handleCategory("health")}
                                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                health
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => handleCategory("religion")}
                                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                religion
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => handleCategory("industry")}
                                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                industry
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => handleCategory("sports")}
                                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                sports
                            </button>
                        </li>

                        <li>
                            <button
                                onClick={() => handleCategory("travel")}
                                className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                travel
                            </button>
                        </li>
                                            {/* backgrounds, fashion, nature, science, education, feelings, health, people, religion, 
                                            places, animals, industry, computer, food, sports, transportation, travel, buildings, business, music */}


                    </ul>

                    {/* Search */}

                </div>
            </nav>


        </>
    )
}

export default Navbar

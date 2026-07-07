import React, { useContext, useState } from "react";
import loadingGif from "../assets/loading.gif";
import pixabayContext from "../context/pixabayContext";
import Search from "./Search";

const Images = () => {
    const { searchData, searchLoading, searchError } =
        useContext(pixabayContext);
    console.log(searchData?.hits[0]?.webformatURL);


    return (
        <div className="container mx-auto px-4 py-8">

            {/* Search Section */}  
            

            {/* Loading */}
            {searchLoading && <img src={loadingGif} alt="Loading..." className="mx-auto" />}

            {searchError && <p>{searchError.message}</p>}

            {!searchLoading && searchData?.hits?.length > 0 && (
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 px-7 py-10 my-7">
                    {searchData.hits.map((hit) => (
                        <div className="mb-4 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                        <img
                            key={hit.id}
                            src={hit.webformatURL}
                            alt={hit.tags}
                            loading="lazy"
                            className="w-full rounded-xl hover:scale-105 transition-transform duration-300"
                        />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Images;
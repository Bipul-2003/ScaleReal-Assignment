import React, { useState } from 'react'
import MovieContainer from '../MovieContainer'
import { useSelector } from 'react-redux'
import Loading from '../Loading'

const Layout = () => {
    const { searchResult, loading } = useSelector(state => state.movie)
    const [movie, setMovie] = useState(null)

    const onClickHadel = (epId) => {
        // console.log(epId)
        const data = searchResult.find((movie) => movie.episode_id === epId)
        // console.log(data)
        setMovie({ ...data })
        // console.log(movie)
    }
    return (
        <div className='container h-full w-screen grid grid-cols-2'>
            <div className="border-2 border-gray-200 col-span-1 w-full">
                {!loading ? <div className="">
                    {searchResult.map((episode) => (
                        <MovieContainer key={episode.episode_id} epId={episode.episode_id} release_date={episode.release_date} title={episode.title} onClick={() => onClickHadel(episode.episode_id)} />
                    ))}
                </div> :
                    <div className="w-full h-full relative">
                        <Loading />
                    </div>
                }

            </div>
            {movie ? <div className="border-2 border-gray-200 p-8 col-span-1">
                <h2 className='font-semibold text-2xl'>{movie.title}</h2>

                {/* Here I formated the opening_crawl  */}
                <p className='py-4 antialiased text-gray-500' dangerouslySetInnerHTML={{
                    __html: movie.opening_crawl.replace(/\r\n/g, ' ')
                }}></p>
                <p className='text-gray-500'>Directed by: {movie['director']} </p>
            </div> : <div className='flex justify-center items-center text-gray-500'>No movie selected</div>}

        </div>
    )
}

export default Layout
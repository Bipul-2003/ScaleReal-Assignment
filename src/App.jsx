import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import axios from 'axios';
import { fetchedData } from './store/movieSlice';
import { useDispatch } from 'react-redux'
import Layout from './components/Layout/Layout'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const apiReq = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/films/?format=json")
        const data = response.data?.results
        dispatch(fetchedData([...data]))
      } catch (error) {
        console.log("API Fetching error!", error)
      }

    }

    apiReq()
  }, [])

  return (

    <div className="h-screen w-screen flex flex-col">
      <div className="">
        <Navbar />
      </div>
      <div className="flex-grow w-screen">
        
        <Layout />
      </div>
    </div>
  )
}

export default App
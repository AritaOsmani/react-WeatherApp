import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import DayForecast from './pages/DayForecast'
import Intro from './pages/Intro'
import Main from './pages/Main'

function App() {

  const [search, setSearch] = useState('')
  // const [weatherData, setWeatherData] = useState(null)
  const [isCelcius, setIsCelcius] = useState(true)
  const [searchedCities, setSearchedCities] = useState([])


  // useEffect(() => {
  //   if (search === '') return
  //   fetch(`https://api.weatherapi.com/v1/forecast.json?key=ad30963771034a06809133027222701&q=${search}&days=7&alerts=yes`).then(res => res.json()).then(res => {
  //     setWeatherData(res)
  //     addNewSearchedCity(res.location.name, res.location.country, res.current['temp_c'], res.current.condition.icon, res.current.condition.text)
  //   })
  // }, [search])

  useEffect(() => {
    fetch(`http://localhost:3001/searched`).then(res => res.json()).then(city => setSearchedCities(city))
  }, [])

  // function addNewSearchedCity(city, country, temp, icon, text) {
  //   const match = searchedCities.find(item => item.city === city)
  //   if (match) return
  //   return fetch(`http://localhost:3001/searched`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ city: city, country: country, temp: temp, icon: icon, text: text })
  //   }).then(res => res.json()).then(res => {
  //     const copy = JSON.parse(JSON.stringify(searchedCities))
  //     copy.push(res);
  //     setSearchedCities(copy)
  //   })
  // }

  function deleteSearchedCity(city) {
    return fetch(`http://localhost:3001/searched/${city.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then(res => {
      let copy = JSON.parse(JSON.stringify(searchedCities))
      copy = copy.filter(item => item.id !== city.id)
      setSearchedCities(copy)
    })
  }
  function addNewSearchedCity(city, country, temp, icon, text) {
    const match = searchedCities.find(item => item.city === city)
    if (match) return
    return fetch(`http://localhost:3001/searched`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ city: city, country: country, temp: temp, icon: icon, text: text })
    }).then(res => res.json()).then(res => {
      const copy = JSON.parse(JSON.stringify(searchedCities))
      copy.push(res);
      setSearchedCities(copy)
    })
  }

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to='/home' />} />
        <Route path='/home' element={
          <Intro
            setSearch={setSearch}
            recentList={searchedCities}
            deleteSearchedCity={deleteSearchedCity}
          />}>

        </Route>
        <Route path='/home/:search'
          element={
            <Main
              searchedCities={searchedCities}
              setSearchedCities={setSearchedCities}
              search={search}
              setSearch={setSearch}
              isCelcius={isCelcius}
              setIsCelcius={setIsCelcius}
              addNewSearchedCity={addNewSearchedCity}
            />} />
        <Route path='/day/:search/:date' element={
          <DayForecast
            isCelcius={isCelcius}
            setIsCelcius={setIsCelcius} />} />
      </Routes>
    </div>
  )
}

export default App

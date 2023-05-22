/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import './App.css'
import HeroSection from './components/HeroSection'
import Seasons from './components/Seasons'
import { API_KEY } from './config';
function App() {
	const seasonData = {
		get: 'seasons',
		parameters: [],
		errors: [],
		results: 9,
		response: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
	}
	const [season, setSeason] = useState([])
	const myHeaders = new Headers()
	myHeaders.append('x-rapidapi-key', API_KEY)
	myHeaders.append('x-rapidapi-host', 'v1.formula-1.api-sports.io')

	const requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
	}

	useEffect(() => {
		fetch('https://v1.formula-1.api-sports.io/seasons', requestOptions)
			.then((data) => {
				console.log(data)
				setSeason(() => [...seasonData.response])
			})
			.catch((error) => console.log('error', error))
	}, [])

	return (
		<Container fluid>
			<HeroSection />
			<Seasons season={season} />
		</Container>
	)
}

export default App

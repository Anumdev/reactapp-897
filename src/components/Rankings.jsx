/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
import { API_KEY } from './../config.js'

const Rankings = (props) => {
	let teamData = {
		get: 'rankings',
		parameters: {
			season: '2019',
		},
		errors: [],
		results: 10,
		response: [
			{
				position: 1,
				team: {
					id: 5,
					name: 'Mercedes-AMG Petronas',
					logo: 'https://media.api-sports.io/formula-1/teams/5.png',
				},
				points: 739,
				season: 2019,
			},
			{
				position: 2,
				team: {
					id: 3,
					name: 'Scuderia Ferrari',
					logo: 'https://media.api-sports.io/formula-1/teams/3.png',
				},
				points: 504,
				season: 2019,
			},
			{
				position: 3,
				team: {
					id: 1,
					name: 'Red Bull Racing',
					logo: 'https://media.api-sports.io/formula-1/teams/1.png',
				},
				points: 417,
				season: 2019,
			},
			{
				position: 4,
				team: {
					id: 2,
					name: 'McLaren Racing',
					logo: 'https://media.api-sports.io/formula-1/teams/2.png',
				},
				points: 145,
				season: 2019,
			},
			{
				position: 5,
				team: {
					id: 13,
					name: 'Renault F1 Team',
					logo: 'https://media.api-sports.io/formula-1/teams/13.png',
				},
				points: 91,
				season: 2019,
			},
			{
				position: 6,
				team: {
					id: 7,
					name: 'Scuderia Toro Rosso',
					logo: 'https://media.api-sports.io/formula-1/teams/7.png',
				},
				points: 85,
				season: 2019,
			},
			{
				position: 7,
				team: {
					id: 17,
					name: 'Racing Point F1 Team',
					logo: 'https://media.api-sports.io/formula-1/teams/17.png',
				},
				points: 73,
				season: 2019,
			},
			{
				position: 8,
				team: {
					id: 18,
					name: 'Alfa Romeo',
					logo: 'https://media.api-sports.io/formula-1/teams/18.png',
				},
				points: 57,
				season: 2019,
			},
			{
				position: 9,
				team: {
					id: 14,
					name: 'Haas F1 Team',
					logo: 'https://media.api-sports.io/formula-1/teams/14.png',
				},
				points: 28,
				season: 2019,
			},
			{
				position: 10,
				team: {
					id: 12,
					name: 'Williams F1 Team',
					logo: 'https://media.api-sports.io/formula-1/teams/12.png',
				},
				points: 1,
				season: 2019,
			},
		],
	}
	let driverData = {
		get: 'rankings',
		parameters: {
			season: '2019',
		},
		errors: [],
		results: 20,
		response: [
			{
				position: 1,
				driver: {
					id: 20,
					name: 'Lewis Hamilton',
					abbr: 'HAM',
					number: 44,
					image: 'https://media.api-sports.io/formula-1/drivers/20.png',
				},
				team: {
					id: 5,
					name: 'Mercedes-AMG Petronas',
					logo: 'https://media.api-sports.io/formula-1/teams/5.png',
				},
				points: 413,
				wins: 11,
				behind: 0,
				season: 2019,
			},
			{
				position: 2,
				driver: {
					id: 5,
					name: 'Valtteri Bottas',
					abbr: 'BOT',
					number: 77,
					image: 'https://media.api-sports.io/formula-1/drivers/5.png',
				},
				team: {
					id: 5,
					name: 'Mercedes-AMG Petronas',
					logo: 'https://media.api-sports.io/formula-1/teams/5.png',
				},
				points: 326,
				wins: 3,
				behind: 87,
				season: 2019,
			},
			{
				position: 3,
				driver: {
					id: 25,
					name: 'Max Verstappen',
					abbr: 'VER',
					number: 1,
					image: 'https://media.api-sports.io/formula-1/drivers/25.png',
				},
				team: {
					id: 1,
					name: 'Red Bull Racing',
					logo: 'https://media.api-sports.io/formula-1/teams/1.png',
				},
				points: 278,
				wins: 3,
				behind: 135,
				season: 2019,
			},
			{
				position: 4,
				driver: {
					id: 34,
					name: 'Charles Leclerc',
					abbr: 'LEC',
					number: 16,
					image: 'https://media.api-sports.io/formula-1/drivers/34.png',
				},
				team: {
					id: 3,
					name: 'Scuderia Ferrari',
					logo: 'https://media.api-sports.io/formula-1/teams/3.png',
				},
				points: 264,
				wins: 2,
				behind: 149,
				season: 2019,
			},
			{
				position: 5,
				driver: {
					id: 19,
					name: 'Sebastian Vettel',
					abbr: 'VET',
					number: 5,
					image: 'https://media.api-sports.io/formula-1/drivers/19.png',
				},
				team: {
					id: 3,
					name: 'Scuderia Ferrari',
					logo: 'https://media.api-sports.io/formula-1/teams/3.png',
				},
				points: 240,
				wins: 1,
				behind: 173,
				season: 2019,
			},
			{
				position: 6,
				driver: {
					id: 24,
					name: 'Carlos Sainz Jr',
					abbr: 'SAI',
					number: 55,
					image: 'https://media.api-sports.io/formula-1/drivers/24.png',
				},
				team: {
					id: 2,
					name: 'McLaren Racing',
					logo: 'https://media.api-sports.io/formula-1/teams/2.png',
				},
				points: 96,
				wins: 0,
				behind: 317,
				season: 2019,
			},
			{
				position: 7,
				driver: {
					id: 36,
					name: 'Pierre Gasly',
					abbr: 'GAS',
					number: 10,
					image: 'https://media.api-sports.io/formula-1/drivers/36.png',
				},
				team: {
					id: 1,
					name: 'Red Bull Racing',
					logo: 'https://media.api-sports.io/formula-1/teams/1.png',
				},
				points: 95,
				wins: 0,
				behind: 318,
				season: 2019,
			},
			{
				position: 8,
				driver: {
					id: 50,
					name: 'Alexander Albon',
					abbr: 'ALB',
					number: 23,
					image: 'https://media.api-sports.io/formula-1/drivers/50.png',
				},
				team: {
					id: 7,
					name: 'Scuderia AlphaTauri Honda',
					logo: 'https://media.api-sports.io/formula-1/teams/7.png',
				},
				points: 92,
				wins: 0,
				behind: 321,
				season: 2019,
			},
			{
				position: 9,
				driver: {
					id: 14,
					name: 'Daniel Ricciardo',
					abbr: 'RIC',
					number: 3,
					image: 'https://media.api-sports.io/formula-1/drivers/14.png',
				},
				team: {
					id: 13,
					name: 'Alpine F1 Team',
					logo: 'https://media.api-sports.io/formula-1/teams/13.png',
				},
				points: 54,
				wins: 0,
				behind: 359,
				season: 2019,
			},
			{
				position: 10,
				driver: {
					id: 10,
					name: 'Sergio Perez',
					abbr: 'PER',
					number: 11,
					image: 'https://media.api-sports.io/formula-1/drivers/10.png',
				},
				team: {
					id: 17,
					name: 'Aston Martin F1 Team',
					logo: 'https://media.api-sports.io/formula-1/teams/17.png',
				},
				points: 52,
				wins: 0,
				behind: 361,
				season: 2019,
			},
			{
				position: 11,
				driver: {
					id: 49,
					name: 'Lando Norris',
					abbr: 'NOR',
					number: 4,
					image: 'https://media.api-sports.io/formula-1/drivers/49.png',
				},
				team: {
					id: 2,
					name: 'McLaren Racing',
					logo: 'https://media.api-sports.io/formula-1/teams/2.png',
				},
				points: 49,
				wins: 0,
				behind: 364,
				season: 2019,
			},
			{
				position: 12,
				driver: {
					id: 7,
					name: 'Kimi Raikkonen',
					abbr: 'RAI',
					number: 7,
					image: 'https://media.api-sports.io/formula-1/drivers/7.png',
				},
				team: {
					id: 18,
					name: 'Alfa Romeo',
					logo: 'https://media.api-sports.io/formula-1/teams/18.png',
				},
				points: 43,
				wins: 0,
				behind: 370,
				season: 2019,
			},
			{
				position: 13,
				driver: {
					id: 9,
					name: 'Daniil Kvyat',
					abbr: 'KVY',
					number: 26,
					image: 'https://media.api-sports.io/formula-1/drivers/9.png',
				},
				team: {
					id: 7,
					name: 'Scuderia AlphaTauri Honda',
					logo: 'https://media.api-sports.io/formula-1/teams/7.png',
				},
				points: 37,
				wins: 0,
				behind: 376,
				season: 2019,
			},
			{
				position: 14,
				driver: {
					id: 6,
					name: 'Nico Hulkenberg',
					abbr: 'HUL',
					number: 27,
					image: 'https://media.api-sports.io/formula-1/drivers/6.png',
				},
				team: {
					id: 13,
					name: 'Alpine F1 Team',
					logo: 'https://media.api-sports.io/formula-1/teams/13.png',
				},
				points: 37,
				wins: 0,
				behind: 376,
				season: 2019,
			},
			{
				position: 15,
				driver: {
					id: 31,
					name: 'Lance Stroll',
					abbr: 'STR',
					number: 18,
					image: 'https://media.api-sports.io/formula-1/drivers/31.png',
				},
				team: {
					id: 17,
					name: 'Aston Martin F1 Team',
					logo: 'https://media.api-sports.io/formula-1/teams/17.png',
				},
				points: 21,
				wins: 0,
				behind: 392,
				season: 2019,
			},
			{
				position: 16,
				driver: {
					id: 2,
					name: 'Kevin Magnussen',
					abbr: 'MAG',
					number: 20,
					image: 'https://media.api-sports.io/formula-1/drivers/2.png',
				},
				team: {
					id: 14,
					name: 'Haas F1 Team',
					logo: 'https://media.api-sports.io/formula-1/teams/14.png',
				},
				points: 20,
				wins: 0,
				behind: 393,
				season: 2019,
			},
			{
				position: 17,
				driver: {
					id: 29,
					name: 'Antonio Giovinazzi',
					abbr: 'GIO',
					number: 99,
					image: 'https://media.api-sports.io/formula-1/drivers/29.png',
				},
				team: {
					id: 18,
					name: 'Alfa Romeo',
					logo: 'https://media.api-sports.io/formula-1/teams/18.png',
				},
				points: 14,
				wins: 0,
				behind: 399,
				season: 2019,
			},
			{
				position: 18,
				driver: {
					id: 16,
					name: 'Romain Grosjean',
					abbr: 'GRO',
					number: 8,
					image: 'https://media.api-sports.io/formula-1/drivers/16.png',
				},
				team: {
					id: 14,
					name: 'Haas F1 Team',
					logo: 'https://media.api-sports.io/formula-1/teams/14.png',
				},
				points: 8,
				wins: 0,
				behind: 405,
				season: 2019,
			},
			{
				position: 19,
				driver: {
					id: 52,
					name: 'Robert Kubica',
					abbr: 'KUB',
					number: 88,
					image: 'https://media.api-sports.io/formula-1/drivers/52.png',
				},
				team: {
					id: 12,
					name: 'Williams F1 Team',
					logo: 'https://media.api-sports.io/formula-1/teams/12.png',
				},
				points: 1,
				wins: 0,
				behind: 412,
				season: 2019,
			},
			{
				position: 20,
				driver: {
					id: 51,
					name: 'George Russell',
					abbr: 'RUS',
					number: 63,
					image: 'https://media.api-sports.io/formula-1/drivers/51.png',
				},
				team: {
					id: 12,
					name: 'Williams F1 Team',
					logo: 'https://media.api-sports.io/formula-1/teams/12.png',
				},
				points: null,
				wins: 0,
				behind: 413,
				season: 2019,
			},
		],
	}

	const [teams, setTeams] = useState(false)
	const myHeaders = new Headers()
	myHeaders.append('x-rapidapi-key', API_KEY)
	myHeaders.append('x-rapidapi-host', 'v1.formula-1.api-sports.io')
	const [drivers, setDrivers] = useState([])
	const [teamArray, setTeamArray] = useState([])
	const requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow',
		data: { season: props.year },
	}

	const fetchApi = (url, keyName) => {
		fetch(url, requestOptions)
			.then((data) => {
				console.log(...teamData.response)
				keyName === 'teams'
					? setTeamArray([...teamData.response])
					: setDrivers(driverData.response)
			})
			.catch((error) => {
				console.log('error', error)
			})
	}

	useEffect(() => {
		fetchApi(
			`https://v1.formula-1.api-sports.io/rankings/teams?season=${props.year}`,
			'teams :'
		)
		fetchApi(
			`https://v1.formula-1.api-sports.io/rankings/drivers?season=${props.year}`,
			'Drivers : '
		)
		// due to api issue we used saved response
		setTeamArray(teamData.response)
		setDrivers(driverData.response)
	}, [props.year])

	return (
		<Container>
			<Row>
				<Col>
					<h2>Rankings</h2>
				</Col>
				<Col>
					<Form>
						<Form.Switch
							type="switch"
							reverse
							id="custom-switch"
							label="Teams: "
							clas
							value={teams}
							onChange={() => setTeams(!teams)}
						/>
					</Form>
				</Col>
			</Row>
			<Row>
				{teams ? (
					<Table responsive="xl" className="bg-light">
						<thead>
							<tr>
								<th>
									<Dropdown>
										<Dropdown.Toggle variant="light" id="dropdown-basic">
											Position
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item href="#/action-1">Ascending</Dropdown.Item>
											<Dropdown.Item href="#/action-2">
												Descending
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</th>
								<th>
									<Dropdown>
										<Dropdown.Toggle variant="light" id="dropdown-basic">
											Name
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item href="#/action-1">Ascending</Dropdown.Item>
											<Dropdown.Item href="#/action-2">name</Dropdown.Item>
											<Dropdown.Item href="#/action-3">name</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</th>
								<th>Logo</th>
								<th>
									<Dropdown>
										<Dropdown.Toggle variant="light" id="dropdown-basic">
											Points
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item href="#/action-1">Ascending</Dropdown.Item>
											<Dropdown.Item href="#/action-2">
												Descending
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</th>
							</tr>
						</thead>
						<tbody>
							{teamArray?.map((item, index) => {
								return (
									item.season === props.year && (
										<tr key={index}>
											<td>{item.position}</td>
											<td>{item.team.name}</td>
											<td>
												<img src={item.team.logo} height={50} alt="logo" />
											</td>
											<td>{item.points}</td>
										</tr>
									)
								)
							})}
						</tbody>
					</Table>
				) : (
					<Table responsive="xl" className="bg-light">
						<thead>
							<tr>
								<th>
									<Dropdown>
										<Dropdown.Toggle variant="light" id="dropdown-basic">
											Position
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item href="#/action-1">Ascending</Dropdown.Item>
											<Dropdown.Item href="#/action-2">
												Descending
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</th>
								<th>
									<Dropdown>
										<Dropdown.Toggle variant="light" id="dropdown-basic">
											Name
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item href="#/action-1">Ascending</Dropdown.Item>
											<Dropdown.Item href="#/action-2">name</Dropdown.Item>
											<Dropdown.Item href="#/action-3">name</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</th>
								<th>Logo</th>
								<th>Number</th>
								<th>
									<Dropdown>
										<Dropdown.Toggle variant="light" id="dropdown-basic">
											Points
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item href="#/action-1">Ascending</Dropdown.Item>
											<Dropdown.Item href="#/action-2">
												Descending
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</th>
							</tr>
						</thead>
						<tbody>
							{drivers?.map((item, index) => {
								return (
									item.season === props.year && (
										<tr key={index}>
											<td>{item.position}-</td>
											<td>{item.driver.name}-</td>
											<td>
												<img src={item.driver.image} height={50} alt="logo" />
											</td>
											<td>{item.driver.number}</td>
											<td>{item.points}</td>
										</tr>
									)
								)
							})}
						</tbody>
					</Table>
				)}
			</Row>
		</Container>
	)
}

export default Rankings

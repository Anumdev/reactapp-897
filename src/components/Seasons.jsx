import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Rankings from './Rankings'

const Seasons = (props) => {
	const [year, setYear] = useState()

	return (
		<Container>
			<Row className="mb-3">
				<h2>Seasons</h2>
			</Row>
			<Row className="mb-5">
				{props.season?.map((item, index) => {
					return (
						<Col>
							<Button variant="light" onClick={() => setYear(item)}>
								{item}
							</Button>
						</Col>
					)
				})}
			</Row>
			<Rankings year={year} />
		</Container>
	)
}

export default Seasons

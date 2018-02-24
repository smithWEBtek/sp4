import React, { Component } from 'react'
import { Container, Row, Col, Carousel } from 'reactstrap'
import './Inspection.css'

class Inspection extends Component {
	render() {
		return (
			<div>
				<Container>
					<Row >
						<Col xs={12} md={8}>
							<code>&lt;{'Col xs={12} md={8}'} /">&gt;</code>
						</Col>
						<Col xs={6} md={4}>
							<code>&lt;{'Col xs={6} md={4}'} /">&gt;</code>
						</Col>
					</Row>

					<Row >
						<Col xs={6} md={4}>
							<code>&lt;{'Col xs={6} md={4}'} /">&gt;</code>
						</Col>
						<Col xs={6} md={4}>
							<code>&lt;{'Col xs={6} md={4}'} /">&gt;</code>
						</Col>
						<Col xsHidden md={4}>
							<code>&lt;{'Col xsHidden md={4}'} /">&gt;</code>
						</Col>
					</Row>

					<Row >
						<Col xs={6} xsOffset={6}>
							<code>&lt;{'Col xs={6} xsOffset={6}'} /">&gt;</code>
						</Col>
					</Row>

					<Row >
						<Col md={6} mdPush={6}>
							<code>&lt;{'Col md={6} mdPush={6}'} /">&gt;</code>
						</Col>
						<Col md={6} mdPull={6}>
							<code>&lt;{'Col md={6} mdPull={6}'} /">&gt;</code>
						</Col>
					</Row>
				</Container>;
			</div>
		)
	}
}

export default Inspection
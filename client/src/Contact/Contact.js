import React, { Component } from 'react'
import './Contact.css'
import { Col, Container, Row } from 'reactstrap'
import './Contact.css'

class Contact extends Component {

	render() {
		return (
			<Container>
				<Row>
					<Col xs="3">
						<div>
							<p>Brad Smith</p>
							<p>24 Servant Street</p>
							<p>Bedford, NH 03110</p>
							<p>(603)494-4147</p>
							<p>brad@smithpiano.com</p>
						</div>
					</Col>
					<Col xs="9">
						<img
							src="http://res.cloudinary.com/smithwebtek/image/upload/v1519490174/sp-site/card.png"
							alt='smithpiano-card-alt'
							title='smithpiano-card-title'
							width="225px"
							height="400px" />
					</Col>
				</Row>
			</Container>
		)
	}
}

export default Contact
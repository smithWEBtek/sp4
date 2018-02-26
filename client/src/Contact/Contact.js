import React, { Component } from 'react'
import './Contact.css'
import { Col, Container, Row } from 'reactstrap'
import './Contact.css'

class Contact extends Component {

	render() {
		return (
			<Container>
				<Row>
					<span>
						<Col xs="auto">
							<p>Brad Smith</p>
							<p>24 Servant Street</p>
							<p>Bedford, NH 03110</p>
							<p>(603)494-4147</p>
							<p>brad@smithpiano.com</p>
							<img
								src="http://res.cloudinary.com/smithwebtek/image/upload/v1519490174/sp-site/card.png"
								alt='smithpiano-card-alt'
								title='smithpiano-card-title'
								width="225px"
								height="400px" />
						</Col>
					</span>
				</Row>
			</Container>
		)
	}
}

export default Contact
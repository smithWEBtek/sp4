import React, { Component } from 'react'

class Album extends Component {
	render() {
		return (
			<div>
				<Row>
					<Col xs="2">
						<img src="./Assets/Images/rec/simone.jpg" className='img' />
					</Col>
					<Col xs="4">
						<strong>{props.title}</strong>
						<p>{props.artist}<br />
							Recorded at Blue Jay Studios, Carlisle, MA 1996</p>
					</Col>
					<Col xs="4">
						<p>Simone Waddel (vocals, composer), Jim Stinnett (bass, arranger), Tony Fesmire and Dennis Montgomery (vocals), Marco Abreu (guitar), Charles Haynes (drums), Germmain Nelson (piano), Brad Smith (piano and keyboards)</p>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Album
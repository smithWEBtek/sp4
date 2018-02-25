import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
// import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

class Discography extends Component {
	state = {
		assets: []
	}

	componentDidMount() {
		this.props.onFetchAssets()
		this.setState({ assets: this.props.assets })
		console.log('[Discography] this.state.assets', this.state.assets);
	}

	render() {
		return (
			<div>
				<Container>
					<Row>
						<Col xs="6">
							<h3>Discography</h3>
							<h5>II III II III II III II III II III II III II III</h5>
							<iframe
								title='blum recording'
								width="500"
								height="200"
								src="https://www.youtube.com/embed/OSkmEbcF0A0?rel=0"
								frameBorder="0" allowFullScreen></iframe>
						</Col>
						<Col xs="6">
							<p><strong>Michael Blum Quartet, recording Michael's tune "Don't Ever Go" upcoming album: Wes'n: A Tribute to Wes Montgomery</strong></p>
							<p>Michael Blum (guitar), Chip McNeill (sax), Jim Stinnett (bass), Brad Smith (piano), Dave DiCenso (drums)</p>
							<p>Recorded at Jon Chase Studio 2017</p>
						</Col>
					</Row>

					<Row>
						<Col xs="2">
							{/* <img src="./Assets/Images/rec/album-blum-oscar" className='img' /> */}
						</Col>
						<Col xs="4">
							<strong>Chasin' Oscar</strong>
							<p>Michael Blum Quartet<br />
								Recorded at Jon Chase Studio July 2016</p>
						</Col>
						<Col xs="4">
							<p>Michael Blum (guitar), Jim Stinnett (bass), Dom Moio (drums), Brad Smith (piano</p>
						</Col>
					</Row>

					<Row>
						<Col xs="2">
							{/* <img src="./Assets/Images/rec/blum-commit.jpg" className='img' /> */}
						</Col>
						<Col xs="4">
							<strong>Commitment</strong>
							<p>Michael Blum<br />
								DOWNBEAT MAGAZINE <br />
								2015 “RISING STAR”<br />
								Recorded at Jon Chase Studio Jan 2015</p>
						</Col>
						<Col xs="4">
							<p>Michael Blum (guitar), Jim Stinnett (bass), Dom Moio (drums), Brad Smith (piano</p>
						</Col>
					</Row>

					<Row>
						<Col xs="2">
							{/* <img src="./Assets/Images/rec/blum-init.jpg" className='img' /> */}
						</Col>
						<Col xs="4">
							<strong>Initiation</strong>
							<p>Michael Blum Quartet<br />
								Recorded at Jon Chase Studio 2014<br />
								See review of this album in the November 2014 issue of DownBeat </p>
						</Col>
						<Col xs="4">
							<p>Michael Blum (guitar), Jim Stinnett (bass), Dom Moio (drums), Brad Smith (piano)</p>
						</Col>
					</Row>

					<Row>
						<Col xs="2">
							{/* <img src="./Assets/Images/rec/chris.jpg" className='img' /> */}
						</Col>
						<Col xs="4">
							<strong>Chris Plays Ray</strong>
							<p>Chris Mewhinney Quartet/Quintet/Trio<br />
								Recorded at Jon Chase Studio 2013</p>
						</Col>
						<Col xs="4">
							<p>Chris Mewhinney (bass), Jim Stinnett (bass), Michael Blum (Guitar), Dom Moio (drums), Brad Smith (piano)</p>
						</Col>
					</Row>

					<Row>
						<Col xs="2">
							{/* <img src="./Assets/Images/rec/bees.jpg" className='img' /> */}
						</Col>
						<Col xs="4">
							<strong>Live Evil</strong>
							<p>Bees Deluxe<br />
								Recorded live at “The Grog” Newburyport, MA 2013</p>
						</Col>
						<Col xs="4">
							<p>Conrad Warre, (guitar, vocal), Brad Smith (keys/bass),P(atrick Sanders (drums)</p>
						</Col>
					</Row>

					<Row>
						<Col xs="2">
							{/* <img src="./Assets/Images/rec/simone.jpg" className='img' /> */}
						</Col>
						<Col xs="4">
							<strong>Take My Love</strong>
							<p>Simone Waddel<br />
								Recorded at Blue Jay Studios, Carlisle, MA 1996</p>
						</Col>
						<Col xs="4">
							<p>Simone Waddel (vocals, composer), Jim Stinnett (bass, arranger), Tony Fesmire and Dennis Montgomery (vocals), Marco Abreu (guitar), Charles Haynes (drums), Germmain Nelson (piano), Brad Smith (piano and keyboards)</p>
						</Col>
					</Row>

					<Row>
						<Col xs="2">
							{/* <img src="./Assets/Images/rec/alphonso.jpg" className='img' /> */}
						</Col>
						<Col xs="4">
							<p>At The Edge</p>
							<p>Alfonso Villalonga and The Cabaret Rose</p>
							<p>Recorded at Blue Jay Studios, Carlisle, MA 1990</p>
						</Col>
						<Col xs="4">
							<p>Alfonso Villalonga (vocalist, composer, arranger, conductor), Alan Bern (accordion), Bob Nieske (bass), Matt Wilson (drums), Johaness Ammon (violin), Jeff Warschauer (mandolin), Bryndis Baldursson (cello), Cece Giannotti (guitar), Dr No (drums), Roy Okutani (trumpet), Billy Novick (clarinet), Curtis Hasselbrink (trombone), Bevan Manson and Brad Smith (piano)</p>
						</Col>
					</Row>
				</Container>
			</div >
		)
	}
}

const mapStateToProps = state => {
	return {
		assets: () => state.ast.assets
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchAssets: () => dispatch(actions.fetchAssets())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Discography)
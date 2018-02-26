import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
// import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

class Recordings extends Component {
	state = {
		assets: []
	}

	componentDidMount() {
		this.props.onFetchAssets()
		this.props.onFetchRecordings()
		this.setState({
			assets: this.props.assets,
			recordings: this.props.recordings
		})
	}

	render() {
		let renderedRecordings = this.props.recordings.map((rec, index) => {
			return (
				<Container>
					<Row key={index} className='Album'>
						<Col className="col-xs-3">
							{rec.asset.format === 'jpg' ? <img src={rec.asset.url} width='190' height='190' alt="recording" /> :
								<iframe title="video" width="190" height="190"
									src="https://www.youtube.com/embed/OSkmEbcF0A0"
									frameBorder="0" allow="autoplay"></iframe>}
						</Col>
						<Col className="col-xs-4">
							<h3>{rec.title}</h3>
							<h4>{rec.artist}</h4>
							<p>{rec.year} : {rec.location}</p>
						</Col>
						<Col className="col-xs-4">
							<p>{rec.credits}</p>
						</Col>
					</Row >
				</Container >
			)
		})

		return (
			<div>
				{renderedRecordings}
			</div >
		)
	}
}

const mapStateToProps = state => {
	return {
		assets: state.ast.assets,
		recordings: state.rec.recordings
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchAssets: () => dispatch(actions.fetchAssets()),
		onFetchRecordings: () => dispatch(actions.fetchRecordings())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Recordings)
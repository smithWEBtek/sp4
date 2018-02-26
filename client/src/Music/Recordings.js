import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
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
				<Row key={index} className='Album'>
					<Col xm="3">
						{rec.asset.base_url ? <img src={rec.asset.url} width='215' height='215' alt="recording" /> :
							<iframe title="video" width="215" height="215"
								src="https://www.youtube.com/embed/OSkmEbcF0A0"
								frameBorder="0" allow="autoplay"></iframe>}
						<h3>{rec.title}</h3>
					</Col>
					<Col xs="4">
						<h4>{rec.artist}</h4>
						<p>{rec.year} : {rec.location}</p>
					</Col>
					<Col xs="4">
						{rec.credits}
					</Col>
				</Row>
			)
		})


		return (
			<div>
				<h4>recordings...</h4>
				{renderedRecordings}
			</div>
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
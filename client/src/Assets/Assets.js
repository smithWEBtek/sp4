import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import * as actions from '../store/actions/index'
import Aux from '../hoc/Aux'

class Assets extends Component {
	state = {
		assets: []
	}

	componentDidMount() {
		this.props.onFetchAssets()
		this.setState({ assets: this.props.assets })
	}

	render() {
		let { assets } = this.props
		let sortedAssets = assets.sort((a, b) => a.id > b.id ? -1 : a.id < b.id ? 1 : 0)
		let list = sortedAssets.map((asset, index) => {
			return (
				<Aux key={index}>
					<tr>
						<th scope="row">{asset.id}</th>
						<td>
							{asset.public_id}
						</td>
						<td>
							{asset.format}
						</td>
						<td>
							{asset.base_url ? <img src={asset.url} width='215' height='215' alt="asset.version" /> :
								<iframe title="video" width="215" height="215"
									src="https://www.youtube.com/embed/OSkmEbcF0A0"
									frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>}
						</td>
					</tr>
				</Aux>
			)
		})

		return (
			<div>
				<Table striped size="sm" className="CustomersList">
					<thead>
						<tr>
							<th>public_id</th>
							<th>format</th>
							<th>url</th>
						</tr>
					</thead>
					<tbody>
						{list}
					</tbody>
				</Table>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		assets: state.ast.assets
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchAssets: () => dispatch(actions.fetchAssets())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Assets)

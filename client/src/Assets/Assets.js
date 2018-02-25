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
		console.log('[Discography] this.state.assets', this.state.assets);
	}

	render() {
		let list = this.state.assets.map((asset, index) => {
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
							{asset.base_url}
						</td>
						<td>
							{asset.url}
						</td>
						<td>
							{asset.version}
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
							<th>base_url</th>
							<th>url</th>
							<th>version</th>
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
		assets: () => state.ast.assets
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onFetchAssets: () => dispatch(actions.fetchAssets())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Assets)

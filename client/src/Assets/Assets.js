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
							{asset.format === 'jpg' ? <img src={asset.url} width='80' height='80' alt="asset.version" /> :
								asset.format === 'vid' ?
									<iframe title="video" width="80" height="80"
										src={asset.url}
										frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> : null}
						</td>
						<td>
							{asset.title}
						</td>
						<td>
							{asset.category}
						</td>
						<td>
							{asset.description}
						</td>
						<td>
							{asset.format}
						</td>
					</tr>
				</Aux>
			)
		})

		// ["title", "category", "description", "format", "url"],
		return (
			<div>
				<Table striped size="sm" className="CustomersList">
					<thead>
						<tr>
							<th>id</th>
							<th>asset</th>
							<th>title</th>
							<th>category</th>
							<th>description</th>
							<th>format</th>
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

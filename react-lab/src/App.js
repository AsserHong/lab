import React, { PureComponent } from 'react'
import './App.css'
import { Table, Button, Col, Row } from 'antd'
import axios from 'axios'
import OptBox from './components/opt-box'

const getCols = () => {
	return [
		{
			title: '内容',
			key: 'content',
			dataIndex: 'content'
		},
		{
			title: '操作',
			key: 'opt',
			dataIndex: 'opt',
			render: (text, record) => {
				const handleOk = value => {
					console.log(value)
				}
				const hasFooter = !!record.content ? [] : undefined
				return (
					<OptBox
						content={record.content}
						title='编辑框'
						confirm={handleOk}
						footer={hasFooter}
					>
						<Button>编辑</Button>
					</OptBox>
				)
			}
		}
	]
}
const getData = async num => {
	let { data } = await axios.get(`/api/get-list${num}`)
	return data.data.list
}
class App extends PureComponent {
	state = {
		data: []
	}
	rq1 = async () => {
		const data = await getData(1)
		this.setState({
			data
		})
	}
	rq2 = async () => {
		const data = await getData(2)
		this.setState({
			data
		})
	}
	render = () => {
		return (
			<>
			<Row style={{marginBottom: 20}}>
				注意: 内容字段为0时，编辑框显示确认按钮；为1时，不显示确认按钮
			</Row>
			<Row gutter={24}>
				<Col span={4}>
					<Button type='primary' onClick={this.rq1}>请求列表</Button>
				</Col>
				<Col span={4}>
					<Button type='default' onClick={this.rq2}>单独请求</Button>
				</Col>
			</Row>

			<Table
				dataSource={this.state.data}
				columns={getCols()}
				rowKey={record => record.index}
			></Table>
			</>
		)
	}
}

export default App

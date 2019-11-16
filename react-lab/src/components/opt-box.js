import React, { PureComponent } from "react";
import { Modal, Button } from 'antd'
import { string, func, number } from 'prop-types';

class OptBox extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            value: props.content,
            footer: props.footer || [
                <Button type='primary' onClick={this.handleOk}>确定</Button>,
                <Button type='default' onClick={this.handleCancel}>取消</Button>
            ]
        }
    }
    handleOk = () => {
        this.props.confirm(this.state.value)
        this.setState(state => {
            return {
                visible: false
            }
        })
    }
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }
    showModal = () => {
        this.setState({
            visible: true
        })
    }
    render = () => {
        return (
            <>
                <Modal
                    visible={this.state.visible}
                    title={this.props.title}
                    footer={this.state.footer}
                    onCancel={this.handleCancel}
                >
                    { this.props.content }
                </Modal>
                <div onClick={this.showModal}>
                    { this.props.children }
                </div>
            </>
        )
    }
}

OptBox.propTypes = {
    title: string,
    confirm: func,
    content: number
}
export default OptBox
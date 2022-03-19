import React, { Component } from 'react';
import axios from 'axios';

class Awscladata extends Component {
    constructor(props){
        super(props)
        this.state = {
            mygetdata : "get 초기 DB 값",
            myawsdata : "post 초기 DB 값"
        }
    }
    componentDidMount = async () => {
        const getget = await axios.get('/get')
        this.setState({ mygetdata : getget.data})
        const getaws = await axios.post('/post')
        this.setState({ myawsdata : getaws.data.cla})
    }

    render() {
        return (
            <div>
                <h2>클래스형 컴포넌트</h2>
                <p>get으로 받아오기 : {this.state.mygetdata}</p>
                <p>post로 받아오기 : {this.state.myawsdata}</p>
            </div>
        );
    }
}

export default Awscladata;
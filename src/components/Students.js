import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap';
import axios from 'axios'
import Detail from './Detail'


class Students extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [],
            studentId: null,
            studentDetail: null
        }
    }

    getStudents() {
        axios.get('/api/v1/students')
            .then(response => {
                this.setState({students: response.data})
            })
            .catch(error => console.log(error))
    }

    showDetails(id){
        axios.get('/api/v1/students/'+ id)
            .then(response => {
                this.setState({studentDetail: response.data});
                this.setState({studentId: id});
            })
            .catch(error => console.log(error))
    }

    reset(){
        this.setState({studentId: null});
    }

    componentDidMount() {
        this.getStudents()
    }

    render() {
        return (
            <conatiner>
                <br/>
                {(() => {
                    if(this.state.studentId == null){
                        return (
                            <div>
                                <row>
                                    <h1>
                                        Students List
                                    </h1>
                                </row>
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <td> ID </td>
                                            <td> Name </td>
                                            <td>Roll Number</td>
                                            <td>House</td>
                                            <td>Show Details</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.students.map((student) => {
                                            return(
                                                <tr className="task" key={student.id}>
                                                    <td>{student.id}</td>
                                                    <td>{student.name}</td>
                                                    <td>{student.roll_number}</td>
                                                    <td>{student.house}</td>
                                                    <td>
                                                        <button onClick={() => this.showDetails(student.id)}>Show Details</button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )
                    }else{
                        return(
                            <div>
                                <row>
                                    <h1> {this.state.studentDetail.student.name}'s Details </h1>
                                </row>
                                <br />
                                <Detail studentDetail={this.state.studentDetail}/>
                                <hr/>
                                <button onClick={() => this.reset()}>Back To List</button>
                            </div>
                        )
                    }
                })()}
            </conatiner>
        )
    }
}


export default Students
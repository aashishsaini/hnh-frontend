import React, { Component } from 'react'

const Detail = ({studentDetail}) => {
    return (
        <div>
            <div>Roll Number: {studentDetail.student.roll_number}</div>
            <div>House: {studentDetail.student.house}</div>
            <b>Courses</b>
            {studentDetail.courses.map((subject) => {
                return(
                    <div>
                        <hr/>
                        <div>Name: {subject.name}</div>
                        <div>Description: {subject.description}</div>
                        <b> Taught by </b>
                        {subject.teachers.map((teacher) => {
                            return (
                                <span>
                                    <span>
                                        <b className={'App-link'}>{teacher.name}</b> who is <b className={'App-link'}>{teacher.education}</b> in this subject</span>
                                </span>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Detail
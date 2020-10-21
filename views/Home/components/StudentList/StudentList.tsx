import React from 'react';
import Student from '../../../../interfaces/Student';
import studentData from '../../../../utils/studentData.json';
import StudentCard from '../StudentCard';
import { FlexContainer, FlexColumn } from '../../../../components/Layout/Flex';

function StudentList() {
    return (
            <FlexContainer alignX="center">
                {studentData.map((student: Student) => (
                    <FlexColumn key={student.id}>
                        <StudentCard student={student}/>
                    </FlexColumn>
                ))}
            </FlexContainer>            
    );
}

export default StudentList;
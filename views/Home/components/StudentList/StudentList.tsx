import React from 'react';
import student from '../../../../interfaces/Student';
import StudentCard from '../StudentCard';
import { FlexContainer, FlexColumn } from '../../../../components/Layout/Flex';

type Props = {
    students: student[]
}

function StudentList({students}: Props) {
    return (
            <FlexContainer alignX="center">
                {students.map((student: student) => (
                    <FlexColumn key={student.id}>
                        <StudentCard student={student}/>
                    </FlexColumn>
                ))}
            </FlexContainer>            
    );
}

export default StudentList;
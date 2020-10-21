import Link from 'next/link';
import React from 'react';
import Card, { ColorSection } from '../../../../components/Card';
import { FlexContainer } from '../../../../components/Layout/Flex';
import Student from '../../../../interfaces/Student';
import stydentCardStyles from './student-card.module.scss';

type Props = {
    student:Student
}

function StudentCard({student}: Props) {
    return (
        <Link href={`/precharge`} >
            <div className={stydentCardStyles.container}>
                <Card lg width="270px">
                    <ColorSection theme="main">
                        <img className={stydentCardStyles['profile-img']} src={student.profileImg} alt={student.name}/>
                        <h5>{student.name}</h5>
                        <h6>{student.career}</h6>
                    </ColorSection>
                        <FlexContainer alignX="space-between">
                            <div className={stydentCardStyles.indicator}>
                                <p>{student.semester}°</p>
                                <label>Semestre</label>
                            </div>
                            <div className={stydentCardStyles.indicator}>
                                <p>8</p>
                                <label>Aprobadas</label>
                            </div>
                            <div className={stydentCardStyles.indicator}>
                                <p>0</p>
                                <label>Reprobadas</label>
                            </div>
                        </FlexContainer>
                </Card>
            </div>
        </Link>
    );
}

export default StudentCard;
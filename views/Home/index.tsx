import React from 'react';
import StudentList from './components/StudentList';
import styles from './home.module.scss';
import student from '../../interfaces/Student';

type Props = {
    students: student[]
}

function Home({students}: Props) {
    return (
        <div className={styles.container}>
            <h3>Selecciona un estudiante</h3>
            <StudentList students={students} />
        </div>
    );
}

export default Home;
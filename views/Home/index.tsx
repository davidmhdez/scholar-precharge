import React from 'react';
import StudentList from './components/StudentList';
import styles from './home.module.scss';

function Home() {
    return (
        <div className={styles.container}>
            <h3>Selecciona un estudiante</h3>
            <StudentList/>
        </div>
    );
}

export default Home;
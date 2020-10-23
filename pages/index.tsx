import { GetStaticProps } from 'next';
import BaseLayout from '../components/Layout/BaseLayout';
import Student from '../entities/Student';
import Home from '../views/Home';
import student from '../interfaces/Student';

type Props = {
  students: student[]
}

const IndexPage = ({students}: Props) => (
  <BaseLayout >
    <Home students={students}/>
  </BaseLayout>
);

export const getStaticProps: GetStaticProps = async () => {

  const students = await Student.getAllStudents();

  return{
    props: {
      students
    }
  }
};


export default IndexPage
 
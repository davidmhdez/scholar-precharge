import student from '../interfaces/Student';
import { request } from '../config/datocms';

export default class Student {
    constructor(){

    }

    static async getAllStudents(): Promise<student[]> {

        const query = `query{
                        allStudents{
                            id,
                            name,
                            lastname,
                            career,
                            semester,
                            profileimg{
                                url
                            }
                        }
                    }`;

        const { allStudents } = await request({query});

        return allStudents;
    }
}
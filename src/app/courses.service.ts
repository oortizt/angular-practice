
export class CoursesService {

    getCourses() {
        let courses = [
        {
            id: 1,
            name: "Course 1",
            seat: 50,
            price: 99.99,
            rating: 4.7823,
            releaseDate: new Date(2017, 9, 28),
            isFavorite: false,
            teacher: { id: 1, name: 'John Smith'}
        },
        {
            id: 2,
            name: "Course 2",
            seat: 40,
            price: 49.99,
            rating: 4.1598,
            releaseDate: new Date(2017, 9, 19),
            isFavorite: true
        },
        {
            id: 3,
            name: "Course 3",
            seat: 35,
            price: 29.99,
            rating: 3.9765,
            releaseDate: new Date(2017, 9, 22),
            isFavorite: false,
            teacher: { id: 3, name: 'Fernando Strand'}
        }
    ];
        return courses;
    }

    isStarted(course: Course): boolean {
        if (!course.releaseDate)
            return false;
        if (new Date().getTime() <= course.releaseDate.getTime())
            return true;
        return false;
    }
}

export interface Course {
    id: number,
    name: string,
    seat: number,
    price: number,
    rating: number,
    releaseDate: Date,
    isFavorite: boolean,
    teacher: Teacher
}

export interface Teacher {
    id: number,
    name: string
}
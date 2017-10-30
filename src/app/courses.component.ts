import { Component } from '@angular/core';
import { CoursesService, Course } from './courses.service';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

@Component({
    selector: 'courses',
    templateUrl: './courses.component.html'
}) // Decorator
export class CoursesComponent {
    title = "List of Courses";
    courses;
    isActive = true;

    constructor (private coursesService: CoursesService) {
        this.courses = coursesService.getCourses();
    }

    getTitle(){
        return this.title;
    }

    onAdd($event) {
        $event.stopPropagation(); // Stop the bubbling up of the events
        this.courses.push({
            id: this.courses.length + 1,
            name: "Course " + (this.courses.length + 1),
            seat: 50,
            price: 99.99,
            rating: 4.7823,
            releaseDate: new Date(2017, 9, 28),
            isFavorite: false            
        });
    }

    onRemove(course: Course) {
        let index = this.courses.indexOf(course);
        this.courses.splice(index, 1);
    }

    // Perfomance point of view
    trackCourse(index, course) {
        return course ? course.id : undefined;
    }

    onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
        console.log("Favorite Changed!", eventArgs);
    }  
    
    isStarted(course: Course): boolean {
        return this.coursesService.isStarted(course);
    }
}


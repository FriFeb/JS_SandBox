class CalorieTracker {
    #calorieLimit = 1000;
    #totalCalories = 0;
    #meals = [];
    #workouts = [];

    constructor() {
        this.#displayCaloriesTotal();
        this.#displayCaloriesConsumed();
        this.#displayCaloriesBurned();
        this.#displayCaloriesReamining()
    }


    addMeal(meal) {
        this.#meals.push(meal);
        this.#totalCalories += meal.calories;
        this.#render();
    }

    addWorkout(workout) {
        this.#workouts.push(workout);
        this.#totalCalories -= workout.calories;
        this.#render();
    }

}

class Meal {
    constructor(name, calories) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    }
}

class Workout {
    constructor(name, calories) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    }
}

const tracker = new CalorieTracker();

const meal1 = new Meal('lunch', 300);
const meal2 = new Meal('dinner', 400);
const workout1 = new Meal('morning run', 300);

tracker.addMeal(meal1);
tracker.addMeal(meal2);
tracker.addWorkout(workout1);


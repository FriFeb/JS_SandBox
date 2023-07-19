class CalorieTracker {
    #calorieLimit = 1000;
    #totalCalories = 0;
    #meals = [];
    #workouts = [];

    constructor() {
        this.#render();
    }

    //  Public methods

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

    //  Private methods

    #displayCaloriesLimit() {
        const calorieLimitDOM = document.querySelector('#calories-limit');
        calorieLimitDOM.innerText = this.#calorieLimit;

    }

    #displayCaloriesTotal() {
        const totalCaloriesDOM = document.querySelector('#calories-total');
        totalCaloriesDOM.innerText = this.#totalCalories;
    }

    #displayCaloriesConsumed() {
        const caloriesConsumedDOM = document.querySelector('#calories-consumed');
        const consumed = this.#meals.reduce((acc, meal) => acc + meal.calories, 0);

        caloriesConsumedDOM.innerHTML = consumed;
    }

    #displayCaloriesBurned() {
        const caloriesBurnedDOM = document.querySelector('#calories-burned');
        const burned = this.#workouts.reduce((acc, meal) => acc + meal.calories, 0);

        caloriesBurnedDOM.innerHTML = burned;
    }

    #displayCaloriesRemaining() {
        const caloriesRemainingDOM = document.querySelector('#calories-remaining');
        const caloriesProgressDOM = document.querySelector('#calorie-progress')
        
        const remaining = this.#calorieLimit - this.#totalCalories;
        caloriesRemainingDOM.innerHTML = remaining;

        remaining <= 0
            ? (
                caloriesRemainingDOM.parentElement.classList.add('bg-danger'),
                caloriesProgressDOM.classList.add('bg-danger')
            )
            : (
                caloriesRemainingDOM.parentElement.classList.remove('bg-danger'),
                caloriesProgressDOM.classList.remove('bg-danger')
            )
    }

    #updateCaloriesProgress() {
        const caloriesProgressDOM = document.querySelector('#calorie-progress');

        const progress = this.#totalCalories < 0
            ? 0
            : this.#totalCalories / this.#calorieLimit * 100;

        caloriesProgressDOM.style.width = `${progress}%`;
    }

    #render() {
        this.#displayCaloriesLimit();
        this.#displayCaloriesTotal();
        this.#displayCaloriesConsumed();
        this.#displayCaloriesBurned();
        this.#displayCaloriesRemaining();
        this.#updateCaloriesProgress();
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

const meal2 = new Meal('dinner', 300);
const meal1 = new Meal('lunch', 2000);
const workout1 = new Meal('morning run', 200);
const workout2 = new Meal('morning run', 200);

tracker.addMeal(meal1);
tracker.addMeal(meal2);
tracker.addWorkout(workout1);
tracker.addWorkout(workout2);


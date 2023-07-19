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

class App {
    #tracker = new CalorieTracker();

    constructor() {
        document.querySelector('#meal-form').addEventListener('submit', this.#newItem.bind(this, 'meal'));
        document.querySelector('#workout-form').addEventListener('submit', this.#newItem.bind(this, 'workout'));
    };

    #newItem(type, e) {
        e.preventDefault();

        const name = document.querySelector(`#${type}-name`);
        const calories = document.querySelector(`#${type}-calories`);

        if (name.value === '' || calories.value === '') {
            alert('Please enter all fields');
            return;
        }

        type === 'meal'
            ? this.#tracker.addMeal(new Meal(name.value, +calories.value))
            : this.#tracker.addWorkout(new Workout(name.value, +calories.value));

        // this.#displayNewItemInDOM(type, name.value, calories.value);

        name.value = '';
        calories.value = '';

        const collapseMeal = document.querySelector(`#collapse-${type}`);
        new bootstrap.Collapse(collapseMeal, {
            toggle: true
        });
    }

    // #displayNewItemInDOM(type, name, calories) {
    //     const items = document.querySelector(`#${type}-items`);

    //     const div = document.createElement('div');
    //     div.classList.add('card', 'my-2');

    //     const bgType = type === 'meal'
    //         ? 'primary'
    //         : 'secondary';

    //     div.innerHTML = `
    //         <div class="card-body">
    //             <div class="d-flex align-items-center justify-content-between">
    //                 <h4 class="mx-1">${name}</h4>
    //                 <div class="fs-1 bg-${bgType} text-white text-center rounded-2 px-2 px-sm-5">
    //                 ${calories}</div>
    //                 <button class="delete btn btn-danger btn-sm mx-2">
    //                     <i class="fa-solid fa-xmark"></i>
    //                 </button>
    //             </div>
    //         </div>
    //         `;

    //     items.appendChild(div);
    // }
}

const app = new App();


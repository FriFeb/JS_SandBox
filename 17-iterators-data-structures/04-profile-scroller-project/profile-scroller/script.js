const people = [
  {
    name: 'Jamie Williams',
    age: 26,
    gender: 'female',
    location: 'London, UK',
    imageURL: 'https://randomuser.me/api/portraits/women/1.jpg',
    looking: 'Female looking for male',
  },
  {
    name: 'John Smith',
    age: 35,
    gender: 'male',
    location: 'New York, NY',
    imageURL: 'https://randomuser.me/api/portraits/men/1.jpg',
    looking: 'Male looking for female',
  },
  {
    name: 'Bob Johnson',
    age: 42,
    gender: 'male',
    location: 'Chicago, IL',
    imageURL: 'https://randomuser.me/api/portraits/men/2.jpg',
    looking: 'Male looking for male',
  },
  {
    name: 'Shannon Jackson',
    age: 29,
    gender: 'female',
    location: 'Los Angeles, CA',
    imageURL: 'https://randomuser.me/api/portraits/women/2.jpg',
    looking: 'Female looking for female',
  },
];

const container = document.querySelector('.container');
const img = document.querySelector('img');
const profileInfo = document.querySelector('.profile-info');
const nextBtn = document.querySelector('#next');

function* createPeopleGenerator(users) {
  let index = 1;
  while (true)
    yield users[index++ % users.length];
}

const iterator = createPeopleGenerator(people);

nextBtn.addEventListener('click', () => {
  const person = iterator.next().value;

  img.src = person.imageURL;
  profileInfo.querySelector('h3').innerText = person.name;

  const information = profileInfo.querySelectorAll('p');
  information[0].innerText = `${person.age} Years Old`;
  information[1].innerText = `From ${person.location}`;
  information[2].innerText = person.looking;
});
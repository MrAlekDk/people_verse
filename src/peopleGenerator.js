import { faker } from '@faker-js/faker';
import faker_zh_CN from '@faker-js/faker/locale/zh_CN';
import { Random } from '@faker-js/faker/random';

let listOfPeople = []

faker.setLocale("nb_NO")

function generatePerson(){

    const gender = faker.name.gender();
    const person = {
        firstName: faker.name.firstName(gender),
        lastName: faker.name.lastName(),
        age: Math.floor(Math.random() * 100), //get a random value between 1 and 100
        gender: gender,
        avatar: faker.image.avatar(),
        job: faker.name.jobArea()
    }
    listOfPeople.push(person);
}

for (let index = 0; index < 25; index++) {
    generatePerson()
}

export default{listOfPeople}
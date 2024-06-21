import { faker } from "@faker-js/faker";

function createRandomUser() {
  return {
    id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    sex: faker.person.sexType(),
    role: faker.helpers.arrayElement(["employee", "admin", "manager"]),
    subscription_tier: faker.helpers.arrayElement([
      "free",
      "basic",
      "business",
    ]),
  };
}

const user = createRandomUser();

const createNUsers = (count) => {
  const data = Array.from(Array(count)).map(() => {
    return createRandomUser();
  });
  return data;
};

export { user, createRandomUser, createNUsers };

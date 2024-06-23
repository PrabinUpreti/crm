import { faker } from "@faker-js/faker";

function createRandomContacts(value) {
  return {
    id: faker.string.uuid(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    address: `${faker.location.city()}, ${faker.location.country()}, ${faker.location.streetAddress()}`,
    phone: faker.phone.number(),
    profile_link: faker.internet.url(),
    customer_type: faker.helpers.arrayElement(["A", "B", "C", "D", "E"]),
    industry: faker.company.name(),
    lead_status: faker.helpers.arrayElement([
      "New",
      "Qualified",
      "Opportunity",
    ]),

    created_by: faker.date.past(),
  };
}

const user = createRandomContacts();

const createNRandomContacts = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomContacts(index + 1);
  });
  return data;
};

export { user, createRandomContacts, createNRandomContacts };

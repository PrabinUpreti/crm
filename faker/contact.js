import { faker } from "@faker-js/faker";

function createRandomContact(value) {
  return {
    id: faker.string.uuid(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    addresss: `${faker.addresss.city()}, ${faker.addresss.country()}, ${faker.addresss.streetAddress()}`,
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

const user = createRandomContact();

const createNRandomContact = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomContact(index + 1);
  });
  return data;
};

export { user, createRandomContact, createNRandomContact };

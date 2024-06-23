import { faker } from "@faker-js/faker";

// keys = ["facebook", "instagram", "website"];
function createRandomContacts(value) {
  return {
    id: faker.string.uuid(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    address: `${faker.location.city()}, ${faker.location.country()}, ${faker.location.streetAddress()}`,
    phone: faker.phone.number(),
    profile_link: faker.helpers.arrayElement([
      {},
      { facebook: faker.internet.url() },
      {
        facebook: faker.internet.url(),
        instagram: faker.internet.url(),
      },
      {
        facebook: faker.internet.url(),
        instagram: faker.internet.url(),
        website: faker.internet.url(),
      },
      {
        instagram: faker.internet.url(),
        website: faker.internet.url(),
      },
      {
        facebook: faker.internet.url(),

        website: faker.internet.url(),
      },
    ]),

    customer_type: faker.helpers.arrayElement([
      "Lead",
      "Opportunity",
      "Customer",
      "Advocate",
    ]),
    industry: faker.company.name(),

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

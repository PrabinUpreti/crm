import { faker } from "@faker-js/faker";

// keys = ["facebook", "instagram", "website"];
function createRandomContacts(value) {
  return {
    uuid: faker.string.uuid(),
    organization: number(1),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    city: faker.location.city(),
    street: faker.location.streetAddress(),
    address: faker.location.country(),
    phone: faker.phone.number(),
    company_name: faker.company.name(),
    company_position: faker.person.jobType(),
    next_comms_date: ;
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

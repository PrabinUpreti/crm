import { faker } from "@faker-js/faker";

function createRandomInventories() {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.product(),
    category: faker.helpers.arrayElement([
      "Software Licenses",
      "Cloud Services",
      "Subscriptions",
      "Digital Assets",
    ]),
    sub_category: faker.helpers.arrayElement([
      "Operating Systems",
      "Cloud Storage",
      "Technical Support Services",
      "Design File",
    ]),
    purchase_price: faker.commerce.price({ min: 100, max: 1000000 }),
    quantity: faker.number.int({ min: 1, max: 100 }),
    total_price: faker.commerce.price(),
    status: faker.helpers.arrayElement(["In Use", "Spare", "Maintenance"]),
    description: faker.lorem.words({ min: 20, max: 300 }),
  };
}

const inventories = createRandomInventories();

const createNInventories = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomInventories();
  });
  return data;
};

export { inventories, createRandomInventories, createNInventories };

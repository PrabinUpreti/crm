import { faker } from "@faker-js/faker";

function createRandomEquipments(value) {
  return {
    id: faker.string.uuid(),
    name: `Equipment ${value}`,
    category: faker.helpers.arrayElement([
      "Software Licenses",
      "Cloud Services",
      "Subscriptions",
      "Digital Assets",
    ]),
    subCategory: faker.helpers.arrayElement([
      "Operating Systems",
      "Cloud Storage",
      "Technical Support Services",
      "Design File",
    ]),
    unit_price: faker.commerce.price(),
    quantity: faker.number.int({
      min: 0,
      max: 100,
    }),
    total_price: faker.commerce.price({ min: 100, max: 1000000 }),
    status: faker.helpers.arrayElement(["Spare", "In-use", "Maintenance"]),
  };
}

const equipments = createRandomEquipments();

const createNEquipments = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomEquipments(index + 1);
  });
  return data;
};

export { equipments, createRandomEquipments, createNEquipments };

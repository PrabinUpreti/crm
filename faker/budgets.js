import { faker } from "@faker-js/faker";

function createRandomBudgets(value) {
  return {
    id: faker.string.uuid(),
    name: ` Budget ${value}`,
    allocated_amount: faker.number.int({ min: 100000, max: 10000000 }),
    last_used: faker.date.past(),
    spent_amount: faker.number.int({ min: 0, max: 10000000 }),
    remaining_amount: faker.number.int({ min: 0, max: 10000000 }),
    description: faker.lorem.words({ min: 50, max: 300 }),
    start_date: faker.date.recent(),
    end_date: faker.date.future(),
    notes: faker.lorem.words({ min: 50, max: 500 }),
    tags: faker.helpers.arrayElements(
      [
        "Operational Expenses",
        "Capital Expenses",
        "Fixed Costs",
        "Salary",
        "Overhead Costs",
        "Labor Cost",
        "Material Cost",
        "Equipment Cost",
        "Software",
        "Utility",
        "Monthly Budget",
        "Departmental Budget",
      ],
      {
        min: 3,
        max: 6,
      }
    ),
    attachments: new Array(4).map(() => {
      return faker.image.urlPicsumPhotos();
    }),
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now()),
    particulars: faker.helpers.arrayElements([
      {
        id: faker.string.uuid(),
        title: faker.helpers.arrayElement([
          "Salaries and Wages",
          "Employee Benefits",
          "Overtime Pay",
          "Training and Development",
          "Raw Materials",
          "Accommodation",
          "Software licenses and Subscriptions",
          "Advertising Costs",
          "Public Relations",
          "Market Research",
          "Artificial Intelligence",
          "Miscellaneous Expenses",
          "Client Payments",
          "Administrative Costs ",
        ]),
        estimated_expense: faker.number.int({ min: 10000, max: 100000 }),
      },
    ]),
  };
}

const user = createRandomBudgets();

const createNBudgets = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomBudgets(index + 1);
  });
  return data;
};

export { user, createRandomBudgets, createNBudgets };

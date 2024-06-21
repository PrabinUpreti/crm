import { faker } from "@faker-js/faker";

function createRandomBookmarkedProjects(value) {
  return {
    id: faker.string.uuid(),
    name: `Project ${value}`,
    created_by: faker.date.past(),
    start_date: faker.date.past(),
    status: faker.helpers.arrayElement([
      "Pending",
      "Not Started",
      "On Progress",
      "Completed",
    ]),
    due_date: faker.date.future(),
    priority: faker.helpers.arrayElement(["Low", "Normal", "High"]),
    description: faker.lorem.words({ min: 20, max: 500 }),
  };
}

const user = createRandomBookmarkedProjects();

const createNBookmarkedProjects = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomBookmarkedProjects(index + 1);
  });
  return data;
};

export { user, createRandomBookmarkedProjects, createNBookmarkedProjects };

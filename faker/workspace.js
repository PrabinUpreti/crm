import { faker } from "@faker-js/faker";
import { createNProjects } from "./project.js";

function createRandomWorkspaces(value) {
  return {
    id: faker.string.uuid(),
    name: `Workspace ${value}`,
    projects: createNProjects(4),
    description: faker.lorem.lines({ max: 5, min: 1 }),
    tags: faker.helpers.arrayElements([
      "marketing",
      "design",
      "2024Q2",
      "priority",
      "sales",
      "development",
      "testing",
    ]),
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now()),
    no_of_members: faker.number.int({ max: 20, min: 8 }),
    no_of_project: faker.number.int({ max: 20, min: 8 }),
    progress: faker.number.int({ max: 100, min: 0 }),
    priority: faker.helpers.arrayElement(["high", "low", "medium", "normal"]),
  };
}
const user = createRandomWorkspaces();
const createNWorkspaces = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomWorkspaces(index + 1);
  });
  return data;
};

export { user, createRandomWorkspaces, createNWorkspaces };

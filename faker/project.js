import { faker } from "@faker-js/faker";
import { createNTasks } from "./task.js";
import { createRandomUser } from "./user.js";
import { createNInventories } from "./inventories.js";
import { createNEquipments } from "./equipments.js";
import { createNHumanResources } from "./humanResource.js";

function createRandomProjects(value) {
  return {
    id: faker.string.uuid(),
    name: `Project ${value}`,
    created_by: faker.person.fullName(),
    start_date: faker.date.past(),
    status: faker.helpers.arrayElement([
      "Pending",
      "Not Started",
      "On Progress",
      "Completed",
    ]),
    due_date: faker.date.future(),
    priority: faker.helpers.arrayElement(["low", "normal", "high", "medium"]),
    description: faker.lorem.words({ min: 20, max: 500 }),
    progress: faker.number.int({ max: 100, min: 0 }),
    created_at: new Date(Date.now()),
    updated_at: new Date(Date.now()),
    type: faker.helpers.arrayElement([
      "Construction",
      "Infrastructure",
      "Software",
      "Renovation",
      "Public Health",
      "Advertising Campaigns",
      "Digital Marketing",
    ]),
    members: createNHumanResources(12),
    is_archived: faker.datatype.boolean(),
    is_bookmarked: faker.datatype.boolean(),
    client: createRandomUser(),
    tags: faker.helpers.arrayElement([
      "Construction",
      "Infrastructure",
      "Software",
      "Renovation",
      "Public Health",
      "Advertising Campaigns",
      "Digital Marketing",
    ]),
    attachments: new Array(4).map(() => {
      return faker.image.urlPicsumPhotos();
    }),
    dependencies: {
      tasks: createNTasks(2),
      inventories: createNInventories(2),
      equipments: createNEquipments(3),
    },
    estimated_completion_date: faker.date.soon(),
    notes: faker.lorem.words({ min: 50, max: 300 }),
    budgets: [],
    tasks: [{ sub_tasks: [] }],
  };
}

const projects = createRandomProjects();

const createNProjects = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomProjects(index + 1);
  });
  return data;
};

export { projects, createRandomProjects, createNProjects };

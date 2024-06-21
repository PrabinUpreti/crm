import { faker } from "@faker-js/faker";

import { createNEquipments } from "./equipments.js";
import { createNInventories } from "./inventories.js";
import { createNSubTasks } from "./subTasks.js";
import {
  createNHumanResources,
  createRandomHumanResource,
} from "./humanResource.js";

function createRandomTasks(value) {
  return {
    id: faker.string.uuid(),
    name: `Task ${value}`,
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
    members: createNHumanResources(10),
    is_archived: faker.datatype.boolean(),
    is_bookmarked: faker.datatype.boolean(),
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
      task: createNSubTasks(2),
      inventories: createNInventories(2),
      equipments: createNEquipments(3),
    },
    estimated_completion_date: faker.date.soon(),
    notes: faker.lorem.words({ min: 50, max: 300 }),
    comments: new Array(3).map(() => {
      return {
        user: createRandomHumanResource(),
        comment: {
          text: faker.lorem.words({ min: 10, max: 100 }),
          created_at: faker.date.recent(),
          updated_at: faker.date.recent(),
          replies: new Array(3).map(() => {
            return {
              user: createRandomHumanResource(),
              reply: {
                text: faker.lorem.words({ min: 10, max: 100 }),
                created_at: faker.date.recent(),
                updated_at: faker.date.recent(),
              },
            };
          }),
        },
      };
    }),
    estimated_hours: faker.number.int({ min: 10, max: 100 }),
  };
}

const tasks = createRandomTasks();

const createNTasks = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomTasks(index + 1);
  });
  return data;
};

export { tasks, createRandomTasks, createNTasks };

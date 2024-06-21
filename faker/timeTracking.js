import { faker } from "@faker-js/faker";

function createRandomTimeTrackings(value) {
  return {
    id: `Tracking No. ${value}`,
    start_time: faker.date.recent().getTime(),
    end_time: faker.date.recent().getTime(),
    created_by: faker.person.fullName(),
    date: faker.date.recent(),
  };
}

const data = createRandomTimeTrackings();

const createNTimeTrackings = (count) => {
  const data = Array.from(Array(count)).map((_, index) => {
    return createRandomTimeTrackings(index + 1);
  });
  return data;
};

export { data, createRandomTimeTrackings, createNTimeTrackings };

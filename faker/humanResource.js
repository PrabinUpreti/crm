import { faker } from "@faker-js/faker";

function createRandomHumanResource() {
  return {
    id: faker.string.uuid(),
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    email: faker.internet.email(),
    phone_number: faker.phone.number(),
    birthday: faker.date.birthdate(),
    sex: faker.person.sexType(),
    role: faker.helpers.arrayElement([
      "frontend",
      "backend",
      "QA",
      "Project Manager",
    ]),
    job_title: faker.helpers.arrayElement([
      "frontend",
      "backend",
      "QA",
      "Project Manager",
    ]),
    allocated_Effort: faker.number.int({ max: 100, min: 0 }),
    start_date: faker.date.past(),
    end_date: faker.date.future(),
    employment_type: faker.helpers.arrayElement([
      "Intern",
      "Permanent",
      "Temporary",
      "Full Time ",
      "Part Time",
      "Trainee",
      "Remote",
      "Freelancer",
    ]),
    location: faker.location.city(),
    skills: faker.helpers.arrayElements([
      "Feedback Mechanisms",
      "Payroll Management",
      "Career Pathing",
      "Verbal Communication",
      "Active Listening",
      "Public Speaking",
      "Empathy",
      "Analytical Thinking",
      "Problem Solving",
      "Creative Solutions",
      "Strategic Planning",
      "Date Management",
      "Metrics and KPIs",
      "Project Planning",
      "Relationship Management",
      "Social Skills",
    ]),
    bio: faker.lorem.words({ min: 20, max: 300 }),
  };
}

const humanResource = createRandomHumanResource();

const createNHumanResources = (count) => {
  const data = Array.from(Array(count)).map(() => {
    return createRandomHumanResource();
  });
  return data;
};

export { humanResource, createRandomHumanResource, createNHumanResources };

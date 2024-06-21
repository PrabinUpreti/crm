import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { WorkspaceIcon } from "../icons/commonIcons";
import { faker } from "@faker-js/faker";
import Tags from "../Tags/Tags";
import moment from "moment";
import { getTagVariantForValues } from "@/lib/utils";

const timelineData = [
  {
    id: "project-initiation" as const,
    title: "Project Initiation",
    description: faker.lorem.words({ min: 40, max: 100 }),
    expected_achievement_date: faker.date.future(),
    status: "Achieved",
    priority: "High",
  },
  {
    id: "requirement-approval" as const,
    title: "Approval",
    description: faker.lorem.words({ min: 40, max: 100 }),
    expected_achievement_date: faker.date.future(),
    status: "Achieved",
    priority: "High",
  },
  {
    id: "design-completion" as const,
    title: "Design Completion",
    description: faker.lorem.words({ min: 40, max: 100 }),
    expected_achievement_date: faker.date.future(),
    status: "Achieved",
    priority: "High",
  },
  {
    id: "prototype-completion" as const,
    title: "Prototype Completion",
    description: faker.lorem.words({ min: 40, max: 100 }),
    expected_achievement_date: faker.date.future(),
    status: "Not Achieved",
    priority: "High",
  },
  {
    id: "testing" as const,
    title: "Testing",
    description: faker.lorem.words({ min: 40, max: 100 }),
    expected_achievement_date: faker.date.future(),
    status: "Not Achieved",
    priority: "High",
  },
  {
    id: "project-launch" as const,
    title: "Project Launch",
    description: faker.lorem.words({ min: 40, max: 100 }),
    expected_achievement_date: faker.date.future(),
    status: "Not Achieved",
    priority: "High",
  },
  {
    id: "project-closure" as const,
    title: "Project Closure",
    description: faker.lorem.words({ min: 10, max: 30 }),
    expected_achievement_date: faker.date.future(),
    status: "Not Achieved",
    priority: "High",
  },
];

const colors = {
  achievedColor: `green`,
  notAchievedColor: `red`,
};
const Timeline = () => {
  const descriptionLength = 200;
  return (
    <div className="max-h-[450px] overflow-auto">
      <VerticalTimeline animate={true} lineColor="purple">
        {timelineData.map((timeline) => {
          return (
            <VerticalTimelineElement
              key={timeline.id}
              className="vertical-timeline-element--work "
              date={moment(timeline.expected_achievement_date).format("LL")}
              iconStyle={{
                background:
                  timeline.status === "Achieved"
                    ? colors.achievedColor
                    : colors.notAchievedColor,
                color: "#fff",
              }}
              icon={<WorkspaceIcon />}
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <h1 className="font-semibold text-lg">{timeline.title}</h1>
                  <div className="flex items-center gap-[1rem]">
                    <Tags
                      value={timeline.status}
                      variant={getTagVariantForValues(timeline.status)}
                      className="vertical-timeline-element-title mb-[1rem]"
                    />
                    {/* <Tags
                      value={timeline.priority}
                      className="vertical-timeline-element- mb-[1rem]"
                    /> */}
                  </div>
                </div>
                <div className="vertical-timeline-element-subtitle text-sm text-foreground/80">
                  {timeline.description.length > descriptionLength ? (
                    <div className="flex items-end text-ellipsis gap-2">
                      {timeline.description.slice(0, descriptionLength)}
                      {/* <EllipsisIconHorizontal /> */}
                    </div>
                  ) : (
                    <div>{timeline.description}</div>
                  )}
                </div>
                <div></div>
              </div>
            </VerticalTimelineElement>
          );
        })}
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkspaceIcon />}>
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkspaceIcon />}>
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2008 - 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkspaceIcon />}>
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkspaceIcon />}>
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2013"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="November 2012"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        /> */}
      </VerticalTimeline>
      ;
    </div>
  );
};

export default Timeline;

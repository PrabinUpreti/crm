import BasicTable from "@/components/custom/common/Tables/BasicTable/BasicTable";
import AreaCharts from "@/components/custom/common/charts/AreaChart/AreaCharts";
import BarChart from "@/components/custom/common/charts/BarChart/BarChart";
import LineChart from "@/components/custom/common/charts/LineChart/LineChart";
import PieChart from "@/components/custom/common/charts/PieChart/PieChart";
import { Card } from "@/components/ui/Card/card";
import i18n from "@/intl/i18n";
import {
  barChartData,
  overdueProjectData,
  cardData,
  pieChartData,
  upcomingDeadlineData,
} from "@/data";
import CreateWorkspaceForm from "./CreateWorkspaceForm";
import {
  IOverdueProjectColumn,
  IOverdueProjectData,
  IOverdueProjectTableProps,
} from "@/@types";
import {
  IUpcomingDeadlineColumn,
  IUpcomingDeadlineData,
  IUpcomingDeadlineTableProps,
} from "@/@types";
import WidgetWrapper from "@/components/custom/common/WidgetWrapper/WidgetWrapper";
import { cn } from "@/lib/utils";

const Analytics = () => {
  return (
    <div className=" flex flex-col gap-[1.5rem]">
      {/* <ThreeVerticalDots className="ml-auto" /> */}
      <CreateWorkspaceForm />
      <div className="grid grid-cols-4  gap-[1.8rem] ">
        {cardData.map((cardDataItem, index) => {
          return (
            // <WidgetWrapper>
            <Card
              key={index}
              className="flex justify-between px-[1rem] h-auto  items-center  py-[1rem] gap-[1rem] "
            >
              <div className="flex flex-col  ">
                <p className="text-foreground">{cardDataItem.label}</p>
                <p className="font-semibold text-3xl">{cardDataItem.count}</p>
              </div>
              <div
                className={cn(
                  "text-3xl bg-primary text-primary-foreground h-14 w-14 rounded-md text-center flex items-center justify-center",
                  cardDataItem.className,
                )}
              >
                {cardDataItem.icon}
              </div>
            </Card>
            // </WidgetWrapper>
          );
        })}
      </div>
      <div className="grid grid-cols-2 py-[2rem] gap-[2rem] overflow-hidden ">
        <WidgetWrapper>
          <div className="w-full    p-[2rem] border rounded-lg ">
            <PieChart
              data={pieChartData}
              title={i18n.t(
                "component.home.text.projectStatus",
                "Project Status",
              )}
            />
          </div>
        </WidgetWrapper>
        <WidgetWrapper>
          <div className="w-full p-[2rem] border rounded-lg ">
            <AreaCharts />
          </div>
        </WidgetWrapper>
        <WidgetWrapper>
          <BasicTable<
            IUpcomingDeadlineTableProps["tableCaption"],
            IUpcomingDeadlineColumn,
            IUpcomingDeadlineData
          >
            {...upcomingDeadlineData}
          />
        </WidgetWrapper>
        <WidgetWrapper>
          <BasicTable<
            IOverdueProjectTableProps["tableCaption"],
            IOverdueProjectColumn,
            IOverdueProjectData
          >
            {...overdueProjectData}
          />
        </WidgetWrapper>

        <WidgetWrapper>
          <div className="w-full col-span-2  p-[2rem] border rounded-lg ">
            <BarChart
              title={i18n.t(
                "component.home.text.budgetEstimation",
                "Budget Estimation",
              )}
              data={barChartData}
            />
          </div>
        </WidgetWrapper>

        <WidgetWrapper>
          <div className="w-full col-span-2  p-[2rem] border rounded-lg ">
            <LineChart />
          </div>
        </WidgetWrapper>
      </div>
    </div>
  );
};

export default Analytics;

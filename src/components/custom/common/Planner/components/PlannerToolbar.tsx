import React, { useEffect, useState } from "react";
import { useCalendar } from "../contexts/PlannerContext";
import { cn } from "@/lib/utils";
import { DateRange } from "react-day-picker";
import { endOfDay, endOfWeek, startOfWeek } from "date-fns";
import AddAppointmentDialog from "./AddAppointmentDialog";
import { DateRangePicker } from "../../FormElements/DateRangePicker/DateRangePicker";

interface CalendarToolbarProps extends React.HTMLAttributes<HTMLDivElement> {}

 
const CalendarToolbar: React.FC<CalendarToolbarProps> = ({
  className,
  ...props
}) => {
  const { setDateRange } = useCalendar();

  const [range] = useState<DateRange>({
    from: startOfWeek(new Date(), {
      locale: { options: { weekStartsOn: 1 } },
    }),
    to: endOfWeek(new Date()),
  });
  const handleDateRangeUpdate = (range: DateRange) => {
    const from = range.from;
    const to = range.to ?? endOfDay(range.from as Date);
    setDateRange({
      from: from,
      to: to,
    });
  };
  useEffect(() => {
    setDateRange(range);
  }, [range, setDateRange]);

  return (
    <div
      className={cn("flex items-center justify-end space-x-2", className)}
      {...props}
    >
      <AddAppointmentDialog />
      <DateRangePicker
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onUpdate={(value: any) => handleDateRangeUpdate(value.range)}
        initialDateFrom={range.from}
        initialDateTo={range.to}
        align="start"
        showCompare={false}
      />
    </div>
  );
};

 
export default React.memo(CalendarToolbar);

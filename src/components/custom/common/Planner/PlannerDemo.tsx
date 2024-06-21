import React, { useEffect, useState } from "react";
import { Appointment, Resource } from "./models";
import { generateAppointments, generateResources } from "./utils/fakeData";
import Planner from "./components/Planner";

const PlannerDemo = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const initResources = generateResources(4); // Generate 10 resources
    const initAppointments = generateAppointments(100, initResources); // Generate 20 appointments linked to the resources
    setResources(initResources);
    setAppointments(initAppointments);
  }, []);
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      {appointments.length > 0 && (
        <Planner
          initialResources={resources}
          initialAppointments={appointments}
        />
      )}
    </main>
  );
};

export default PlannerDemo;

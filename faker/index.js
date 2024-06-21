import { createNUsers } from "./user.js";
import fs from "fs";
import { createNWorkspaces } from "./workspace.js";
import { createNBookmarkedProjects } from "./bookmarked.js";
import { createNArchivedProjects } from "./archive.js";
import { createNInventories } from "./inventories.js";
import { createNEquipments } from "./equipments.js";
import { createNHumanResources } from "./humanResource.js";
import { createNBudgets } from "./budgets.js";
import { createNSubTasks } from "./subTasks.js";
import { createNTasks } from "./task.js";
import { createNProjects } from "./project.js";
import { createNTimeTrackings } from "./timeTracking.js";
import { createNRandomContact } from "./contact.js";

(() => {
  fs.writeFileSync(
    "./db.json",
    JSON.stringify({
      users: createNUsers(20),
      workspaces: createNWorkspaces(5),
      bookmarks: createNBookmarkedProjects(20),
      archives: createNArchivedProjects(22),
      inventories: createNInventories(22),
      equipments: createNEquipments(22),
      humanResources: createNHumanResources(22),
      budgets: createNBudgets(22),
      subTasks: createNSubTasks(22),
      tasks: createNTasks(22),
      projects: createNProjects(22),
      timeTrackings: createNTimeTrackings(22),
      contact: createNRandomContact(22),
    })
  );
})();

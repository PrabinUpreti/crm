import { ButtonProps } from "@/components/ui/Button/button";
import { AvatarProps } from "@radix-ui/react-avatar";
import { ColDef } from "@ag-grid-community/core";
import React from "react";
type TDropdownSize = "lg" | "md" | "sm" | "default";
type TDropdownVariant = "primary" | "secondary" | "default";
export interface IDropdownMenuItem {
  id: number | string;
  isLink: boolean;
  label: string;
  link?: string;
  icon?: React.ReactNode;
}

export interface IDropdownMenuProps {
  menu: {
    label: string;
    items: IDropdownMenuItem[];
  };
  dropdownSize: TDropdownSize;
  dropdownVariant: TDropdownVariant;
  dropdownTriggerSize: ButtonProps["size"];
  dropdownTriggerVariant: ButtonProps["variant"];
  className?: string;
  onSelect?: (e: Event) => void;
}
export interface ICheckboxDropdownMenuProps {
  menu: {
    label: string;
    items: IDropdownMenuItem[];
  };
  dropdownSize: TDropdownSize;
  dropdownVariant: TDropdownVariant;
  dropdownTriggerSize: ButtonProps["size"];
  dropdownTriggerVariant: ButtonProps["variant"];
  className?: string;
  icon?: React.ReactNode;
  onSelect?: (e: Event) => void;
}

export interface IIconDropdownMenuProps {
  menu: {
    items: IDropdownMenuItem[];
  };
  dropdownSize?: TDropdownSize;
  dropdownVariant?: TDropdownVariant;
  icon: React.ReactNode;
  className?: string;
}

export interface IAvatarDropdownProps {
  menu: {
    // label: string;
    items: IDropdownMenuItem[];
  };
  dropdownSize: TDropdownSize;
  dropdownVariant: TDropdownVariant;
  avatarSize: TDropdownSize;
  name: string;
  imgSrc?: string;
}

export interface SidebarItemProps {
  label: string;
  link?: string;
  icon?: React.ReactElement;
  items?: SidebarItemProps[];
}
export interface SidebarProps {
  path: string;
  items: SidebarItemProps[];
}

export interface IConfig {
  APP_NAME: string;
  LOGO: string;
  sidebarWidth: string;
  sidebarMaxWidth: string;
  sidebarMinWidth: string;
}

export interface IUser {
  name: string;
  username: string;
  email: string;
}

export interface IHeaderProps {
  // user: IUser;
}

export interface IProject {
  id: string;
  name: string;
  created_by: string;
  start_date: Date;
  status: "On Progress" | "Not Started" | "Completed" | "Pending";
  due_date: Date;
  priority: "Low" | "Normal" | "High";
  tasks?: [];
}
export interface IInventories {
  id: string;
  itemName: string;
  category: string;
  subCategory: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}
export interface IEquipment {
  id: string;
  name: string;
  category: string;
  status: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export interface IBudget {
  id: string;
  name: string;
  totalBudget: number;
  lastUsed: Date;
  budgetSpent: number;
}

export interface IHumanResource {
  id?: string;
  name?: string;
  username?: string;
  email?: string;
  last_name?: string;
  sex?: "male" | "female" | "other";
  role?: "frontend" | "backend" | "QA" | "Project Manager";
  allocated_effort?: number;
  start_date?: Date;
  due_date?: Date;
}
export interface IBookmark {
  id: string;
  name: string;
  created_by: string;
  start_date: string;
  due_date: string;
  status: string;
  priority: string;
  members: string;
  tasks: ITaskRowData[];
  description: string;
}

export interface IArchive {
  id: string;
  name: string;
  created_by: string;
  start_date: string;
  due_date: string;
  status: string;
  priority: string;
  members: string;
  tasks: ITaskRowData[];
  description: string;
}

export interface IAvatarProps extends AvatarProps {
  imgSrc?: string;
  name: string;
}

export interface IRowData {
  id?: string;
  make: string;
  model: string;
  price: number;
  electric: boolean;
  month: string;
}

export interface IWorkspaceRowData {
  id: string;
  name: string;
  created_by: string;
  start_date: string;
  due_date: string;
  status: string;
  priority: string;
}

export interface ISubTaskRowData {
  id: string;
  subTaskName: string;
  created_by: string;
  start_date: string;
  due_date: string;
  status: string;
  priority: string;
}

export interface ISubTask {
  id: string;
  subTaskName: string;
  created_by: string;
  start_date: string;
  due_date: string;
  status: string;
  priority: string;
}

export interface ITimeTracking {
  id: string;
  start_time: string;
  end_time: string;
  created_by: string;
  date: Date;
}

export interface ITimeTrackingRowData {
  id: string;
  start_time: string;
  end_time: string;
  created_by: string;
  date: Date;
}
export interface ITask {
  id: string;
  name: string;
  created_by: string;
  start_date: string;
  due_date: string;
  status: string;
  priority: string;
  members: string;
  subTasks: ISubTask[];
  timeTrackings: ITimeTracking[];
}
export interface ITaskRowData {
  id: string;
  name: string;
  created_by: string;
  start_date: string;
  due_date: string;
  status: string;
  priority: string;
  members: string;
  subTasks: ISubTaskRowData[];
}

export interface IProjectRowData {
  id: string;
  name: string;
  created_by: string;
  start_date: string;
  due_date: string;
  status: string;
  priority: string;
  members: string;
  tasks: ITaskRowData[];
}
export interface IBookmarkRowData {
  id: string;
  name: string;
  created_by: string;
  start_date: string;
  due_date: string;
  status: string;
  priority: string;
  members: string;
  tasks: ITaskRowData[];
}

export interface IArchiveRowData {
  id: string;
  name: string;
  created_by: string;
  start_date: string;
  due_date: string;
  status: string;
  priority: string;
  members: string;
  tasks: ITaskRowData[];
}

export interface IInventoriesRowData {
  id: string;
  itemName: string;
  category: string;
  subCategory: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}
export interface IEquipmentRowData {
  id: string;
  name: string;
  category: string;
  status: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export interface IBudgetRowData {
  id: string;
  name: string;
  totalBudget: number;
  lastUsed: Date;
  budgetSpent: number;
}
export interface IHumanResourceRowData {
  id: string;
  name: string;
  username: string;

  email: string;
  first_name: string;
  last_name: string;
  sex: "male" | "female" | "other";
  role: "frontend" | "backend" | "QA" | "Project Manager";
  allocatedEffort: number;
  start_date: Date;
  due_date: Date;
}

export type RowModelType =
  | "infinite"
  | "viewport"
  | "clientSide"
  | "serverSide";

export type IsRowSelectable = boolean;

export type IAgGridTableRow<T> = {
  data: T;
};

export type IAgGridTableProps<T> = {
  heading?: string;
  dropdownMenus?: {
    items?: IDropdownMenuProps["menu"]["items"];
  };
  theme?:
    | "ag-theme-quartz"
    | "ag-theme-alpine"
    | "ag-theme-quartz-dark"
    | "ag-theme-quartz-alpine";
  height?: number;
  TableToolbarHOC: React.Component;
  // rowData?: IRowData[];
  rowData?: IAgGridTableProps<T>[];
  colDefs?: ColDef[];
  rowSelection?: "multiple" | "single";
  sidebar?: string | boolean;
  suppressRowClickSelection?: boolean;
  pagination?: boolean;
  paginationPageSize?: number;
  paginationPageSizeSelector?: number[];
  variant?: "primary" | "secondary";
  rowBuffer?: number;
  rowModelType?: RowModelType;
  rowHeight?: number;
  isRowSelectable?: IsRowSelectable;
  rowMultiSelectWithClick?: boolean;
  enableAdvanceFilter?: boolean;
  suppressMenuHide?: boolean;
  rowDragMultiRow?: boolean;
  onGridReady?: () => void;
  onCellClicked?: () => void;
  onCellValueChanged?: () => void;
  onFilterOpened?: () => void;
  onRowSelected?: () => void;
};

export interface IBadgeProps {
  label?: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
}

export type TRole =
  | "admin"
  | "user"
  | "manager"
  | "client-admin"
  | null
  | undefined;

export interface ICarouselItem {
  content?: React.ReactNode;
  key: string;
}

export interface ICarouselProps {
  carouselData: ICarouselItem[];
}

export interface IComboboxItem {
  icon?: React.ReactNode;
  label?: string;
  value?: string;
}

export interface IComboboxGroup {
  heading: string;
  comboboxItems: IComboboxItem[];
}
export interface IComboboxProps {
  placeholder: string;
  defaultText: string;
  emptyText: string;
  comboboxGroups: IComboboxGroup[];
}

export interface IAlertProps {
  title: string;
  description: string;
}

export interface IAlertDialogProps {
  trigger: React.ReactNode;
  title: string;
  //   headerTitleClasses: string;
  description: string;
  CancelText: string;
  actionText: string;
}

export interface ICommandItem {
  icon?: React.ReactNode;
  text?: string;
  shortcut?: string;
  hasLink?: boolean;
  link?: string;
}

export interface ICommandGroup {
  heading: string;
  commandItems: ICommandItem[];
}
export interface ICommandProps {
  shortcut: string;

  placeholder?: string;
  emptyText?: string;
  commandGroups?: ICommandGroup[];
}

export interface InputProps {
  size?: "sm" | "md" | "lg" | "xl" | "default";
  type: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  className?: string;
}

export interface ISearchInput {
  inputSize?: InputProps["size"];
  label?: string;
  placeholder?: string;
  id: string;
  className: string;
  name: string;
  onSubmit: (e: React.FormEvent) => void;
}

export interface ITabTrigger {
  id: string;
  label: string;
  icon?: React.ReactNode;
}
export interface ITabContent {
  id: string;
  element: React.JSX.Element;
}
export type TTabsProps = {
  triggers: ITabTrigger[];
  contents: ITabContent[];
  className?: string;
};

export interface ISelectGroupItem {
  label: string;
  value: string;
}

export interface ISelectGroup {
  label: string;
  items: ISelectGroupItem[];
}

export interface IGroupSelect {
  placeholder?: string;
  groups: ISelectGroup[];
}

export interface IEmailInputProps {
  size: "sm" | "md" | "lg" | "xl" | "default";
  placeholder: string;
  required: boolean;
  label: string;
  onChange: () => void;
  className: string;
}

export interface INumberInputProps {
  size?: "sm" | "md" | "lg" | "xl" | "default";
  placeholder?: string;
  required?: boolean;
  label?: string;
  className?: string;
  onChange?: () => void;
}

export interface IPasswordInputProps {
  size?: InputProps["size"];
  placeholder?: string;
  required?: boolean;
  label?: string;
  name: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface ITextInputProps {
  size?: InputProps["size"];
  placeholder?: string;
  required?: boolean;
  label?: string;
  name: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export interface ISubmitButton extends ButtonProps {}

export interface RootLayoutProps {
  children: React.ReactNode;
}

export interface IModalProps {
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  body?: React.ReactNode | string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export interface IProgressBarProps {
  value: number;
  size?: "lg" | "md" | "sm" | "full";
  variant?: "primary" | "secondary";
  className?: string;
  showValue?: boolean;
}

export interface IPieChartProps {
  title: string;
  data: {
    labels: string[];
    datasets: { data: number[]; backgroundColor: string[] }[];
  };
}

export interface IBarChartProps {
  title: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
      borderRadius: number;
      pointStyle: string;
    }[];
  };
}

export interface CountryProps {
  id: number;
  name: string;
  iso3: string;
  iso2: string;
  numeric_code: string;
  phone_code: string;
  capital: string;
  currency: string;
  currency_name: string;
  currency_symbol: string;
  tld: string;
  native: string;
  region: string;
  region_id: string;
  subregion: string;
  subregion_id: string;
  nationality: string;
  timezones: Timezone[];
  translations: Record<string, string>;
  latitude: string;
  longitude: string;
  emoji: string;
  emojiU: string;
}

interface Timezone {
  zoneName: string;
  gmtOffset: number;
  gmtOffsetName: string;
  abbreviation: string;
  tzName: string;
}

export interface StateProps {
  id: number;
  name: string;
  country_id: number;
  country_code: string;
  country_name: string;
  state_code: string;
  type: string | null;
  latitude: string;
  longitude: string;
}

import type { LucideIcon } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IconType = LucideIcon | React.ComponentType<any> | undefined;

type StepItem = {
  id?: string;
  label?: string;
  description?: string;
  icon?: IconType;
  optional?: boolean;
  key: string;
  content: React.ReactNode;
};

interface StepOptions {
  orientation?: "vertical" | "horizontal";
  state?: "loading" | "error";
  responsive?: boolean;
  checkIcon?: IconType;
  errorIcon?: IconType;
  onClickStep?: (step: number, setStep: (step: number) => void) => void;
  mobileBreakpoint?: string;
  variant?: "circle" | "circle-alt" | "line";
  expandVerticalSteps?: boolean;
  size?: "sm" | "md" | "lg";
  styles?: {
    /** Styles for the main container */
    "main-container"?: string;
    /** Styles for the horizontal step */
    "horizontal-step"?: string;
    /** Styles for the horizontal step container (button and labels) */
    "horizontal-step-container"?: string;
    /** Styles for the vertical step */
    "vertical-step"?: string;
    /** Styles for the vertical step container (button and labels) */
    "vertical-step-container"?: string;
    /** Styles for the vertical step content */
    "vertical-step-content"?: string;
    /** Styles for the step button container */
    "step-button-container"?: string;
    /** Styles for the label and description container */
    "step-label-container"?: string;
    /** Styles for the step label */
    "step-label"?: string;
    /** Styles for the step description */
    "step-description"?: string;
  };
  variables?: {
    "--step-icon-size"?: string;
    "--step-gap"?: string;
  };
  scrollTracking?: boolean;
}

interface StepperProps extends StepOptions {
  children?: React.ReactNode;
  className?: string;
  initialStep: number;
  steps: StepItem[];
}

interface StepProps extends React.HTMLAttributes<HTMLLIElement> {
  label?: string | React.ReactNode;
  description?: string;
  icon?: IconType;
  state?: "loading" | "error";
  checkIcon?: IconType;
  errorIcon?: IconType;
  isCompletedStep?: boolean;
  isKeepError?: boolean;
  onClickStep?: (step: number, setStep: (step: number) => void) => void;
}

interface StepSharedProps extends StepProps {
  isLastStep?: boolean;
  isCurrentStep?: boolean;
  index?: number;
  hasVisited: boolean | undefined;
  isError?: boolean;
  isLoading?: boolean;
}

export type {
  IconType,
  StepItem,
  StepOptions,
  StepperProps,
  StepProps,
  StepSharedProps,
};

export interface IOverdueProjectData {
  id: string;
  overdue: string;
  name: string;
  deadline?: string;
}

export interface IOverdueProjectColumn {
  label: string;
  id: string;
}

export interface IOverdueProjectTableProps {
  tableCaption: string;
  data: IOverdueProjectData[];
  columns: IOverdueProjectColumn[];
}

export interface IUpcomingDeadlineData {
  id: string;
  name: string;
  due_date: string;
  status: "On Progress" | "Not Started" | "Completed" | "Pending";
  priority?: "Low" | "Normal" | "High";
  progress: number;
}

export interface IUpcomingDeadlineColumn {
  label: string;
  id: string;
}

export interface IUpcomingDeadlineTableProps {
  tableCaption: string;
  columns: IUpcomingDeadlineColumn[];
  data: IUpcomingDeadlineData[];
}

export interface ISecondaryOption {
  label: string;
  id: string;
  icon: React.ReactNode;
}
export interface IPrimaryOption {
  label?: string;
  id: string;
  icon: React.ReactNode;
}

export interface IQuickAccessOptions {
  primaryOptions?: IPrimaryOption[];
  secondaryOptions?: ISecondaryOption[];
}

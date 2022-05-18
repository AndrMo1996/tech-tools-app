export const EntityTypes = [
  {
    id: "unified",
    title: "Main",
    isSelected: true,
  },
  {
    id: "custom",
    title: "Custom",
    isSelected: false,
  },
  {
    id: "not_unified",
    title: "System",
    isSelected: false,
  },
];

export const STATUS_COMPLETED = "Estimate Completed";
export const STATUS_FAILED = "Estimate Failed";
export const STATUS_NOT_STARTED = "Estimate";

export const NOT_COMPLETED_STATUSES = [
  STATUS_COMPLETED,
  STATUS_FAILED,
  STATUS_NOT_STARTED,
];

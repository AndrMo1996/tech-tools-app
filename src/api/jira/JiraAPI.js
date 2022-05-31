export const createSubtask = async (taskId, entity) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_API_URL}jira/subtask?taskId=${taskId}&entity=${entity}`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    throw new Error("Server error. Can't create subtask");
  }

  const subtask = await response.json();
  return subtask;
};

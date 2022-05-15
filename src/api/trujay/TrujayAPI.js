export const getEntities = async (appKey, page, type) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_API_URL}trujay/entities?applicationKey=${appKey}&page=${page}&filter={"type":"${type}"}`
  );

  if (!response.ok) {
    throw new Error("Server error. Can't get estimate");
  }

  const entities = await response.json();
  return entities;
};

export const getEntityCount = async (appKey, entity) => {
  let count = null;
  do {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_API_URL}trujay/${entity}/count?applicationKey=${appKey}`
    );

    if (!response.ok) {
      throw new Error("Server error. Can't get estimate");
    }

    count = await response.json();
  } while (count.isCache === false);
  return count.total;
};

export const getEntityCustomFields = async (appKey, entity) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_API_URL}trujay/${entity}/customFields?applicationKey=${appKey}`
  );

  if (!response.ok) {
    throw new Error("Server error. Can't get estimate");
  }

  const customFields = await response.json();
  return customFields;
};

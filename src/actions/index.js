export const selectAgent = (agent) => {
  return {
    type: "AGENT_SELECTED",
    payload: agent,
  };
};

export const selectClient = (client) => {
  return {
    type: "CLIENT_SELECTED",
    payload: client,
  };
};
export const selectProperties = (properties) => {
  return {
    type: "PROPERTIES_SELECTED",
    payload: properties,
  };
};

import { combineReducers } from "redux";

const imoReducer = () => {
  return [
    {
      agent: {
        firstName: "Andrei",
        lastName: "Paduraru",
        accountType: "administrator",
      },
      client: {
        firstName: "Petre",
        lastName: "Ispirescu",
      },
      properties: {
        adress: "Ion Slavici",
        price: 423,
        rooms: 4,
        baths: 1,
        length: "52 sm",
      },
    },
    {
      agent: {
        firstName: "Jon",
        lastName: "Luca",
        accountType: "administrator",
      },
      client: {
        firstName: "Corleon",
        lastName: "Travolta",
      },
      properties: {
        adress: "Nicolae Filimon",
        price: 523213,
        rooms: 6,
        baths: 2,
        length: "72 sm",
      },
    },
    {
      agent: {
        firstName: "Napoleon",
        lastName: "Hill",
        accountType: "administrator",
      },
      client: {
        firstName: "Timothy",
        lastName: "Feriss",
      },
      properties: {
        adress: "Doctor Ioan Muresan",
        price: 42232323,
        rooms: 8,
        baths: 3,
        length: "120 sm",
      },
    },
  ];
};

const selectedAgentReducer = (selectedAgent = null, action) => {
  if (action.type === "AGENT_SELECTED") {
    return action.payload;
  }

  return selectedAgent;
};

const selectedClientReducer = (selectedClient = null, action) => {
  if (action.type === "CLIENT_SELECTED") {
    return action.payload;
  }

  return selectedClient;
};

const selectedPropertiesReducer = (selectedProperties = null, action) => {
  if (action.type === "PROPERTIES_SELECTED") {
    return action.payload;
  }

  return selectedProperties;
};

export default combineReducers({
  imo: imoReducer,
  selectedAgent: selectedAgentReducer,
  selectedClient: selectedClientReducer,
  selectedProperties: selectedPropertiesReducer,
});

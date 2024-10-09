import React, { useState } from "react";
import monitorData from "./Monitors.json";
import ThemeManager from "./components/managers/ThemeManager";
import BorderRadiusManager from "./components/managers/BorderRadiusManager";
import Filter from "./components/Filter";
import Monitor from "./components/Monitor";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCloudMoon,
  faCloudMoonRain,
  faSun,
  faMoon,
  faSquareFull,
  faSquare,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./css/App.css";

library.add(
  fab,
  faCloudMoon,
  faCloudMoonRain,
  faSun,
  faMoon,
  faSquareFull,
  faSquare,
  faCircle
);

function App() {
  const [filters, setFilters] = useState({
    panelType: "",
    minRefreshRate: 0,
  });

  const [sort, setSort] = useState({
    field: "name",
    direction: "asc",
  });

  const filteredMonitors = monitorData
    .filter(
      (monitor) =>
        (!filters.panelType || monitor.panel_type === filters.panelType) &&
        parseInt(monitor.refresh_rate.replace("Hz", "")) >=
          filters.minRefreshRate
    )
    .sort((a, b) => {
      let fieldA = a[sort.field];
      let fieldB = b[sort.field];

      // Handle numeric values (e.g., refresh_rate)
      if (sort.field === "refresh_rate" || sort.field === "brightness") {
        fieldA = parseInt(fieldA.replace("Hz", "").replace("cd/m²", ""));
        fieldB = parseInt(fieldB.replace("Hz", "").replace("cd/m²", ""));
      }

      if (sort.direction === "asc") {
        return fieldA > fieldB ? 1 : -1;
      } else {
        return fieldA < fieldB ? 1 : -1;
      }
    });

  return (
    <div className="App">
      <div className="header">
        <div className="info-header">
          <h1>10/8/24</h1>
          <ThemeManager />
          <BorderRadiusManager />
        </div>
        <Filter
          filters={filters}
          setFilters={setFilters}
          sort={sort}
          setSort={setSort}
        />
      </div>
      <div className="monitor-list">
        {filteredMonitors.length > 0 ? (
          filteredMonitors.map((monitor, index) => (
            <Monitor key={index} monitor={monitor} />
          ))
        ) : (
          <p>No monitors match the selected filters</p>
        )}
      </div>
    </div>
  );
}

export default App;

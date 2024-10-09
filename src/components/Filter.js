import React from "react";
import Dropdown from "./Dropdown";

const Filter = ({ filters, setFilters, sort, setSort }) => {
  const handlePanelChange = (value) => {
    setFilters({ ...filters, panelType: value });
  };

  const handleRefreshRateChange = (value) => {
    setFilters({ ...filters, minRefreshRate: parseInt(value) });
  };

  const handleSortFieldChange = (value) => {
    setSort({ ...sort, field: value });
  };

  const handleSortDirectionChange = (value) => {
    setSort({ ...sort, direction: value });
  };

  return (
    <div className="filters">
      <Dropdown
        label="Panel Type:"
        options={[
          { value: "", label: "All" },
          { value: "IPS", label: "IPS" },
          { value: "VA", label: "VA" },
        ]}
        value={filters.panelType}
        onChange={handlePanelChange}
        id="panel-type"
      />
      <div className="dropdown-container">
        <label htmlFor="refresh-rate">Hz: {filters.minRefreshRate} Hz</label>
        <input
          type="range"
          min="165"
          max="240"
          value={filters.minRefreshRate}
          onChange={(e) => handleRefreshRateChange(e.target.value)}
        />
      </div>
      <Dropdown
        label="Sort by:"
        options={[
          { value: "name", label: "Name" },
          { value: "panel_type", label: "Panel Type" },
          { value: "refresh_rate", label: "Refresh Rate" },
          { value: "response_time", label: "Response Time" },
          { value: "brightness", label: "Brightness" },
        ]}
        value={sort.field}
        onChange={handleSortFieldChange}
        id="sort-field"
      />
      <Dropdown
        label="Sort Direction:"
        options={[
          { value: "asc", label: "Ascending" },
          { value: "desc", label: "Descending" },
        ]}
        value={sort.direction}
        onChange={handleSortDirectionChange}
        id="sort-direction"
      />
    </div>
  );
};

export default Filter;

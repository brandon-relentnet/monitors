import React from "react";

const Monitor = ({ monitor }) => {
  return (
    <div className="monitor-card">
      <h2>
        <a href={monitor.link} target="_blank" rel="noopener noreferrer">
          {monitor.name}
        </a>
      </h2>
      <p>Panel Type: {monitor.panel_type}</p>
      <p>Refresh Rate: {monitor.refresh_rate}</p>
      <p>Response Time: {monitor.response_time}</p>
      <p>Brightness: {monitor.brightness}</p>
      <p>Extras: {monitor.extras.join(", ")}</p>
    </div>
  );
};

export default Monitor;

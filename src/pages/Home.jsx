import React from "react";

const Dashboard = () => {
  const dashboardData = [
    {
      title: "I Talk",
      number: 120,
      lastUpdated: "2 hours ago",
      detailsLink: "/i_talk",
    },
    {
      title: "Upwork",
      number: 75,
      lastUpdated: "1 day ago",
      detailsLink: "/upwork",
    },
    {
      title: "Fitbit",
      number: 200,
      lastUpdated: "5 minutes ago",
      detailsLink: "/fitbit",
    },
    {
      title: "Appointments",
      number: 30,
      lastUpdated: "3 hours ago",
      detailsLink: "/create-appointment",
    },
    {
      title: "Toggl",
      number: 10,
      lastUpdated: "1 hour ago",
      detailsLink: "/toggl",
    },
  ];

  return (
    <div>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            min-height: 100vh;
            background-color: #f0f2f5;
          }

          .header {
            width: 100%;
            background-color: #007bff;
            color: #ffffff;
            padding: 20px 0;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .header h1 {
            margin: 0;
            font-size: 32px;
          }

          .dashboard {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            width: 90%;
            max-width: 1200px;
            margin: 20px 0;
          }

          .box {
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .box:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
          }

          .box h2 {
            margin: 0;
            font-size: 24px;
            color: #333333;
          }

          .stats {
            margin: 10px 0;
            text-align: center;
          }

          .stats span {
            display: block;
            font-size: 16px;
            color: #666666;
          }

          .stats .number {
            font-size: 32px;
            font-weight: bold;
            color: #007bff;
          }

          .buttons {
            display: flex;
            gap: 10px;
            margin-top: 10px;
          }

          .button {
            text-decoration: none;
            color: #ffffff;
            background-color: #007bff;
            padding: 10px 15px;
            border-radius: 5px;
            transition: background-color 0.3s, transform 0.3s;
            font-size: 14px;
          }

          .button:hover {
            background-color: #0056b3;
            transform: scale(1.05);
          }

          .sync {
            background-color: #28a745;
          }

          .sync:hover {
            background-color: #1c7c34;
          }
        `}
      </style>
      <header className="header">
        <h1>Welcome to the School Dashboard</h1>
      </header>
      <div className="dashboard">
        {dashboardData.map((item, index) => (
          <div key={index} className="box">
            <h2>{item.title}</h2>
            <div className="stats">
              <span className="number">{item.number}</span>
              <span>Last Updated: {item.lastUpdated}</span>
            </div>
            <div className="buttons">
              <a href={item.detailsLink} className="button">
                Show Details
              </a>
              <a href="#" className="button sync">
                Sync Data Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
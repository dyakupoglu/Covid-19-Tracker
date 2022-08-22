import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

const selectedBorderColor = {
  Cases: {
    border: "#ff0000",
  },
  Recovered: {
    border: "#adff2f",
  },
  Deaths: {
    border: "#000000",
  },
};

function InfoBox({ active, title, cases, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox-selected"}`}
      style={{ borderColor: selectedBorderColor[title].border }}
    >
      <CardContent>
        <Typography className="infoBox_title" color="textSecondary">
          <u><b>{title}</b></u> 
        </Typography>
        <h2 className="infoBox_cases" style={{ color: selectedBorderColor[title].border}}>{cases}</h2>
        <Typography className="infoBox_total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;

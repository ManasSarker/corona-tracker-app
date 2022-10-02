import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

const InfoBox = ({ title, total }) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary">{title}</Typography>
        <h2>{total}</h2>
      </CardContent>
    </Card>
  );
};

export default InfoBox;

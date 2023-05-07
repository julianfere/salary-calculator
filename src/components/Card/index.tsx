import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import "./styles.css";

const BasicCard = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <Card className="card">
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default BasicCard;

import { Card } from "react-bootstrap";
import React from "react";

// Desestructuración de props
const CardCustom = ({ icon: Icon, title, description, header = false }) => {
  return (
    <Card className="card-custom">
      {header && (
        <Card.Header>
          <Card.Title>{title}</Card.Title>
        </Card.Header>
      )}
      <Card.Body
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <div>
          {Icon && <Icon style={{ color: "#A27852", fontSize: "1.5rem" }} />}
        </div>
        <p>{description}</p>
      </Card.Body>
    </Card>
  );
};

export default CardCustom;

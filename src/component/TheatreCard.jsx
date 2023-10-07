import React from "react";
import { Button, Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function TheatreCard(props) {
  return (
    <Card className="shadow">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className="text-danger">{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <div className="text-center">
          <NavLink className="reserve-btn" to={"/home/seats/" + props.id}>
            Reserve Seats
          </NavLink>
        </div>
      </Card.Body>
    </Card>
  );
}

export default TheatreCard;

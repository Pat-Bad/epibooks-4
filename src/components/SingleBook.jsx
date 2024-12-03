import { useState } from "react";
import { Card } from "react-bootstrap";
// import CommentArea from './CommentArea'

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);
  // state = {
  //   selected: false,
  // }

  return (
    <>
      <Card
        onClick={() => {
          setSelected(!selected);
          props.setSelected(props.book.asin);
        }}
        style={{
          border: props.selected === props.book.asin ? "3px solid red" : "none",
        }}
      >
        <Card.Img
          variant="top"
          src={props.book.img}
        />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;

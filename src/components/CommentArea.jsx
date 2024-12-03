import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { useEffect, useState } from "react";

const CommentArea = (props) => {
  const [comments, setComments] = useState({ comments: [] });

  const [isLoading, setIsLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzRmMTg0Yzc0Yjc3ZDAwMTVkM2YwZTciLCJpYXQiOjE3MzMyMzY4MTIsImV4cCI6MTczNDQ0NjQxMn0.Dr-Cmt6-JPt86pScPh2seEOx0mP8H9P6ymIa6XbSXZI",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json;
        } else {
          throw new Error("Errore!");
        }
      })

      .then((response) => {
        setComments(response);
        setIsLoading(false);
        setIsError(false);
      })
      .catch(
        (error) => {
          console.log(error);
          setIsLoading(false);
          setIsError(true);
        },
        [props.asin]
      );

    return (
      <div className="text-center">
        {isLoading && <Loading />}
        {isError && <Error />}
        <AddComment asin={props.asin} />
        <CommentList commentsToShow={comments} />
      </div>
    );
  });
};

export default CommentArea;

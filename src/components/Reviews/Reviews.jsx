import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieReviews } from "../../api";

function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(id).then(setReviews);
  }, [id]);
    
  if (reviews.length === 0) return <p>No reviews available.</p>;
  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
}

export default Reviews;

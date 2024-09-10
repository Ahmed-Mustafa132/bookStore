import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Product.css";
export default function Product() {
  const { id } = useParams();

  const [book, setBook] = useState([]);

  async function getBook() {
    try {
      await axios
        .get(`https://api.itbook.store/1.0/books/${id}`)
        .then((res) => {
          console.log(res.data);
          setBook(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getBook();
  }, []);
  return (
    <>
      <div className="product">
        <div className="imgSide">
          <img src={book.image} alt="prodact" />
        </div>
        <div className="infoSide">
          <h1>{book.title}</h1>
          <p>{book.authors}</p>
          <p>{book.desc}</p>
          <p> pages :{book.pages}</p>
          <Link to={book.url}>
            <Button variant="primary">Buy for {book.price}</Button>{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

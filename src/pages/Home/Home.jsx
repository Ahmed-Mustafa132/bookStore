import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Home() {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.itbook.store/1.0/new")
      .then((res) => {
        console.log(res.data.books[0]);
        setBooks(res.data.books);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <section className="section1">
        <h1>Welcome to my book Store</h1>
        <p>this is my book store</p>
      </section>
      <section className="section2">
        <h1>whats a new </h1>
        <Row xs={1} md={4} className="g-4">
          {books.map((b) => (
            <Col key={b.title} onClick={() => navigate(`/product/${b.isbn13}`)}>
              <Card>
                <Card.Img variant="top" src={b.image} />
                <Card.Body>
                  <Card.Title>{b.title}</Card.Title>
                  <Card.Text>{b.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
      <section className="section3">
        <h1>make sure that your regstar to read all your book </h1>
      </section>
    </>
  );
}

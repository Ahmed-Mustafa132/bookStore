// src/components/AboutMe.js
import { Card, ListGroup } from "react-bootstrap";

export default function AboutMe() {
  return (
    <Card className="my-4">
      <Card.Body>
        <Card.Title>About Us</Card.Title>
        <Card.Text>
          Welcome to [Your Bookstore Name], your go-to destination for all
          things literary! Nestled in the heart of [Your City], we pride
          ourselves on being more than just a bookstore. Our mission is to
          foster a love for reading and provide a haven for book lovers of all
          ages.
        </Card.Text>
        <Card.Title>Our Story</Card.Title>
        <Card.Text>
          Founded in [Year], [Your Bookstore Name] began as a small, independent
          bookstore with a big dream: to create a community space where readers
          can discover new worlds, ideas, and perspectives. Over the years,
          we've grown and evolved, but our commitment to quality books and
          exceptional customer service has remained steadfast.
        </Card.Text>
        <Card.Title>What We Offer</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Diverse Selection:</strong> From bestsellers and classics to
            indie gems and local authors, our carefully curated collection spans
            all genres and interests.
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Community Events:</strong> Join us for author signings, book
            clubs, writing workshops, and more. We believe in the power of
            stories to bring people together.
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Personalized Recommendations:</strong> Our knowledgeable
            staff is always here to help you find your next great read. Whether
            you're a seasoned bibliophile or just starting your reading journey,
            we've got you covered.
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Comfortable Reading Spaces:</strong> Relax and read in our
            cozy nooks and inviting spaces. Enjoy a cup of coffee from our
            in-store café while you dive into your latest literary adventure.
          </ListGroup.Item>
        </ListGroup>
        <Card.Title>Our Commitment</Card.Title>
        <Card.Text>
          At [Your Bookstore Name], we are dedicated to supporting our local
          community and promoting literacy. We partner with schools, libraries,
          and local organizations to host events and initiatives that inspire a
          love for reading.
        </Card.Text>
        <Card.Text>
          Thank you for being a part of our story. We look forward to welcoming
          you to [Your Bookstore Name] and helping you discover the magic of
          books.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

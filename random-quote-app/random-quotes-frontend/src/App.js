import React, { useState } from 'react';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

function App() {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    const response = await axios.get('/quotes/random');
    setQuote(response.data);
  };

  return (
    <Container fluid className="p-3">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          {quote && (
            <Card className="mb-3 quote-card">
              <Card.Body>
                <Card.Text>
                  "{quote.quote}"
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  - {quote.character}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          )}
          <Button onClick={fetchQuote} variant="primary" className="w-100">Get Random Quote</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

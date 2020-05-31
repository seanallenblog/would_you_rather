import React from 'react';
import Card from 'react-bootstrap/Card';


const NotFound = () => {
  return (
    <Card>
      <Card.Header
        style={{
          'textAlign': 'center',
          'fontSize': '2rem',
          'fontWeight': 'bold'
        }}>404 Error</Card.Header>
      <Card.Body style={{ 'textAlign': 'center' }}>Oops. That question doesn't exist.</Card.Body>
    </Card>
  );
};

export default NotFound;
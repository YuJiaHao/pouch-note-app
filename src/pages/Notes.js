import React from 'react'
import { Container ,Card} from 'react-bootstrap'

const Notes = ({notes}) => {
  return (
    <Container className='mt-3'>
        {notes.map( (note) => (
            <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{note.title}</Card.Title>
              <Card.Text>{note.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </Container>
  )
}

export default Notes
import React from 'react'
import { Container, Card } from 'react-bootstrap'
import DatabaseEnums from '../utils/database.enums';
import useDatabaseMetadata from '../utils/useDatabaseMetadata'
import useNotes from '../utils/useNotes'
import PouchDB from "pouchdb";

const Notes = () => {    
    const [databaseInstance, metadataInfo] = useDatabaseMetadata();
    const metadataDatabaseInstance = new PouchDB(DatabaseEnums.MetadataDBName);

    const records = useNotes(metadataDatabaseInstance);
    const [notes, setNotes] = React.useState([]);

    React.useEffect(() => {
        setNotes(records);
      }, [records]);

    const DelNote = async (id) => {
        setNotes(notes.filter((note) => note._id !== id));
        let doc;
        try {
            doc = await databaseInstance.get(id);
        } catch (err) {
            console.error(err, 'databaseInstance.get error');
            return;
        }
        doc._deleted = true;
        databaseInstance.put(doc);
    }

    return (
        <Container className='mt-3'>
            {notes.map((note) => (
                <Card style={{ width: '18rem' }} key={note._id}>
                    <Card.Body>
                        <Card.Title>{note.title}</Card.Title>
                        <Card.Text>{note.text}</Card.Text>
                    </Card.Body>
                    <button className='btn btn-dark' onClick={() => DelNote(note._id)} >Del</button>
                </Card>
            ))}
        </Container>
    )
}

export default Notes
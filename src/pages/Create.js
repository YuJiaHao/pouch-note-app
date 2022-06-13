import React,{useState} from 'react'
import { Container,Form } from 'react-bootstrap'
import DatabaseEnums from '../utils/database.enums';
import useDatabaseMetadata from '../utils/useDatabaseMetadata'
import PouchDB from "pouchdb";

const Create = () => {
    const [databaseInstance, metadataInfo] = useDatabaseMetadata();
    const metadataDatabaseInstance = new PouchDB(DatabaseEnums.MetadataDBName);

    const [form ,setForm] = useState({title:'',text:''}) ;
    const [eventCount, setEventCount] = React.useState(0);

    React.useEffect(() => {
        if(metadataInfo)
        setEventCount(metadataInfo.eventCount);
      });


    const storeEventCount = (num) => {
        setEventCount(num);
        metadataDatabaseInstance.put({
          _id: DatabaseEnums.MetadataDBLookupRow,
          _rev: metadataInfo._rev,
          eventCount: num,
          nodeId: metadataInfo.nodeId
        })
      }

    function handleChanged(event) {
        const {value, name} = event.target;
        setForm({...form, [name]:value});
    }

    function AddNote() {
        if (!form.text||!form.title) {
            return alert("Nothing to add...");
        }
        const newCount = eventCount + 1;
        const document = {
            _id: `${metadataInfo.nodeId}_${newCount}`,
            title: form.title,
            text: form.text,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
        databaseInstance.put(document);
        storeEventCount(newCount);
        setForm({title:'',text:''});   
    }

    return (
        <Container>
            <Form className='mt-3' style={{width:"50%"}}>
                <Form.Group className="mb-3">
                    <Form.Label>Title </Form.Label>
                    <Form.Control onChange={handleChanged} value = {form.title} name='title' type="text" placeholder="Enter title" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Text</Form.Label>
                    <Form.Control onChange={handleChanged} value = {form.text} name='text' type="text" placeholder="Enter text" />
                </Form.Group>
            </Form>
            <button className='btn btn-dark' onClick={AddNote} >Add</button>
        </Container>

    )
}

export default Create
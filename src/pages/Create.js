import React,{useState} from 'react'
import { Container,Form } from 'react-bootstrap'

const Create = ({setNotes}) => {

    const [form ,setForm] = useState({title:'',text:''}) ;

    function handleChanged(event) {
        const {value, name} = event.target;
        setForm({...form, [name]:value});
    }

    function AddNote() {
        setNotes(note => [...note, form]);
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
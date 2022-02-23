import NavBar from './NavBar';
import './Help.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Help = () => {
    return (
        <div className='help'>
            <NavBar title='Help/Contact us' />
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.Textarea1">
                    <Form.Label>Subject:</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter Subject" />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message:</Form.Label>
                    <Form.Control as="textarea" rows={8} />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </div>
    );
}

export default Help;
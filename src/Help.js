import NavBar from './NavBar';
import './Help.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert';
import webUrl from './php/webUrls';

const Help = (props) => {
    const {basketCount, loggedin, accessLevel } = props;
    if (loggedin !== 'Y') { window.location.replace(webUrl)};

    return (
        <div className='help'>
            <NavBar title='Help/Contact us' basketCount={basketCount} accessLevel={accessLevel} />
            <div className='form-style'>
            <Form id="contactForm">
                <Form.Group className="mb-3" controlId="exampleForm.Textarea1">
                    <Form.Label id="subject" >Subject:</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter Subject" />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
                    <Form.Label id="message" >Message:</Form.Label>
                    <Form.Control as="textarea" rows={8} />
                </Form.Group>
                <div id="submit-button">
                    <Button variant="primary" type="button" onClick={() => {
                        Swal({ title: "We successfully received your message", icon: "success" });
                        document.getElementById("contactForm").reset();
                    }} >Submit</Button>
                </div>
            </Form>
            </div>
        </div>
    );
}
export default Help;
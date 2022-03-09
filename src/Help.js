import NavBar from './NavBar';
import './Help.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import swal from 'sweetalert';

const Help = (props) => {
    const {basketCount} = props;

    return (
        <div className='help'>
            <NavBar title='Help/Contact us' basketCount={basketCount} />
            <div className='form-style'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.Textarea1">
                    <Form.Label id="subject" >Subject:</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter Subject" />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label id="message" >Message:</Form.Label>
                    <Form.Control as="textarea" rows={8} />
                </Form.Group>
                <div id="submit-button">
                <Button variant="primary" type="submit" id="submitbutton" >Submit</Button>
                </div>
            </Form>
            </div>
        </div>
    );
}

<script>
$("#submitbutton").click(function(){
    swal({
        title: "We successfully received your message",
        icon: "success",
      })
});
</script>;
export default Help;
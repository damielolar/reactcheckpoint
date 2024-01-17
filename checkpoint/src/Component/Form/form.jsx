import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './form.css'

function FormDisabledExample() {
    return (
        <Form>
        <fieldset disabled>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Name</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="Insert Full Name Here" />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
            <Form.Control id="disabledTextInput" placeholder="example@gmail.com" />
            </Form.Group>
            {/* <Form.Group className="mb-3">
            <Form.Check
                type="checkbox"
                id="disabledFieldsetCheck"
                label="Can't check this"
            />
            </Form.Group> */}
            <Button type="submit">Submit</Button>
        </fieldset>
        </Form>
);
}

export default FormDisabledExample;
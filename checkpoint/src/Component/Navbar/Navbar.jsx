import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// bootstap navbar
function ColorSchemesExample() {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">Adunni's Portfolio</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Github</Nav.Link>
                <Nav.Link href="#pricing">Projects</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        
        </>
    );
}

export default ColorSchemesExample;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card1.css'
import Photo from '../Assest/kiarah.JPG'


function BasicExample() {
    return (
        
        <Card className='card1'>
        <img src={Photo} alt='dog'/>
        <Card.Body>
            <Card.Title className='title'>Damilola Adio</Card.Title>
            <Card.Text className='text'>
            I am a fullsttack student at go my code academy,<br /> a beautiful lady in the tech system.please check me out on my social media network.
            </Card.Text>
            <Button variant="primary">click me</Button>
        </Card.Body>
        </Card>
    );
    }

    export default BasicExample;
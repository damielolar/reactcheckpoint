import Card from 'react-bootstrap/Card';
import './cards2.css'


function BodyOnlyExample() {
    return (
        <Card>
        <Card.Body>Social Media Platforms</Card.Body>
        {/* <a href='#'></a><i class="fa-brands fa-facebook"></i> */}
        <div className='icons'>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-square-github"></i>
        <i class="fa-brands fa-x-twitter"></i>
        </div>
        </Card>
    );
}

export default BodyOnlyExample;
import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import choose1 from '../../../../images/Image/adult-blur-blurred-background-687824.png';
import choose2 from '../../../../images/Image/chef-cook-food-33614.png';
import choose3 from '../../../../images/Image/architecture-building-city-2047397.png';

const Choose = () => {
    return (
        <div>
            <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={choose1} />
                        <Card.Body>
                        <Card.Title>Fast Delevery</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={choose2} />
                        <Card.Body>
                        <Card.Title>A Good Auto Responder</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={choose3} />
                        <Card.Body>
                        <Card.Title>Home Delevery</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                        </Card.Body>
                        
                    </Card>
</CardDeck>
        </div>
    );
};

export default Choose;
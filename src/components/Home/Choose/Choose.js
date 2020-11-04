import React from 'react';
import choose1 from '../../../images/Image/choose1.png';
import choose2 from '../../../images/Image/choose2.png';
import choose3 from '../../../images/Image/choose3.png';
const chooseData = [
    { id: 1, img: choose1, title: 'Fast Delivery', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, cupiditate. Sunt eum autem pariatur maxime.' },
    { id: 2, img: choose2, title: 'Good Responder', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, cupiditate. Sunt eum autem pariatur maxime.' },
    { id: 3, img: choose3, title: 'Home Delivery', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, cupiditate. Sunt eum autem pariatur maxime.' },
]
const Choose = () => {
    return (
        <React.Fragment >
            <div className="container m-0">
                <div className="row">
                    <div className="col">
                        <h3>Why Choose Us</h3>
                        <p>Generating Random Text. A computer program can easily produce gibberish - especially if it has been provided with garbage beforehand.</p>
                    </div>

                </div>
            </div>

            {/* <h3>Why Choose Us</h3>
                    <p>Generating Random Text. A computer program can easily produce gibberish - especially if it has been provided with garbage beforehand.</p> */}
            <div className="card-deck w-100">
                {
                    chooseData.map(item => {
                        return (
                            <div className="card" key={item.id}>
                                <img className="card-img-top" src={item.img} alt="Card cap" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </React.Fragment>
    );
};

export default Choose;
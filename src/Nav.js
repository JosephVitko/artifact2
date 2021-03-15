import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'

export default function Nav() {
    const [lgShow, setLgShow] = useState(false);

    return (
        <div>
            <Navbar bg="primary" variant="light">
                <Navbar.Brand >
                    <Image src='https://i.pinimg.com/originals/e4/9d/ab/e49dabbdf15dc0ad2a6d039c0e785440.png' className='logo' flex/>
                    <span className='fancy-font'>Chef's Kitchen</span>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                        <Button variant="dark" onClick={() => setLgShow(true)}>About</Button>
                        <Modal
                            size='lg'
                            show={lgShow}
                            onHide={() => setLgShow(false)}
                        >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Greetings!
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p className='text-wrap'>Are you someone just beginning to cook? Or do you often feel intimidated by the myriad of online recipes?  If so, you have come to the right place!</p>
                            <p className='text-wrap'>Regardless of your reasons for visiting this dictionary, we hope that you will discover some new aspects of cooking and better understand the "chef's jargon".  In this dictionary, you will find a list of common culinary terminologies in written recipes.  While some of the words may look simple, they take on different meanings in a culinary context.  For this reason, we have included videos and pictures alongside the definitions to provide visual illustration.</p>
                            <p className='text-wrap'>Enjoy your brief tour of the world of culinary arts!</p>
                            <Image className='definition-image mt-4' src='https://lh4.googleusercontent.com/0AMLe363WySsmfH3JSYaOObRPY08L0IHPDd00axzyhDtZkYkTI-gfScGf791wXsyEXnqEl1MAaQ1SMogqS6SNqL0KO3oZXeXoXPbvWUztlgtfX6hiMvS_uJZgD9KkchraQ=w1280' rounded fluid />
                        </Modal.Body>

                        </Modal>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
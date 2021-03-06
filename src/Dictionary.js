import React, {useContext, useState} from 'react';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
const u = require('./utils')


function Entry(props) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    console.log(props)
    return (

        <Card style={{ 'max-width': '18rem' }} className='mb-5'>
            {props.image ? (
                <Card.Img variant="top" src={ props.image } />
            ) : (
                <div dangerouslySetInnerHTML={{__html: (props.video || '')}} />
            )}
            <Card.Body>
                <Card.Title>
                    { u.capitalize(props.word) }
                </Card.Title>
                <Button variant="dark" onClick={handleShow}>Show Definition</Button>
            </Card.Body>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Definition of <i>{ u.capitalize(props.word) }:</i>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { props.definition }
                    <br />
                    {props.image ? (
                        <Card.Img variant="top" src={ props.image } />
                    ) : (
                        <div className='modal-video' dangerouslySetInnerHTML={{__html: (props.video || '')}} />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </Card>
    )
}

export default class Dictionary extends React.Component {
    componentDidMount() {
        const apiUrl = 'https://josephvitko.herokuapp.com/api/engl1102/artifact2/get_data'
        fetch(apiUrl)
            .then((response) => {response.json()
                .then(data => console.log('This is your data', data))})
    }
    render() {
        const { entries } = this.props
        if (!entries || entries.length < 1) return <p>No entries, sorry</p>
        return (
            <Container fluid>
                <Row>
                    {entries.map((entry) => {
                        return (
                            <Col className='col-sm-3'>
                                {this.renderEntry(entry)}
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }

    renderEntry(entry) {
        return <Entry
            word={entry.word}
            definition={entry.definition}
            image={entry.image_url}
            video={entry.video_html}
        />
    }
}
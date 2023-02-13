import {Button, Col, Form, Row} from 'react-bootstrap';
import {useForm} from "react-hook-form";
import {CommentsType} from "../../types";
import {servicesComment} from "../../services/comments";


const CommentsForm = () => {

    const {register, handleSubmit} = useForm<CommentsType>()

    const onSubmit = (data: CommentsType) => {
        servicesComment.add(data)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
                <Form.Label>Comentarios: </Form.Label>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Ingresar comentario" {...register("comment")} />
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary" type="submit">
                        Envíar comentario
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export {CommentsForm}
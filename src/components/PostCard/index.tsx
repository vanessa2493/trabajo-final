import { FC } from "react";
import { Card, Row, Col, Image, Badge, Button } from "react-bootstrap";
import {CommentsForm} from "../CommentsForm";
//import { Task as TaskType, Category } from "../../../types";

type Props = {
    id: string;
    title: string;
    date: Date | string;
    userName: string;
    image: string
    description: string;
    onDelete?: (id: string) => void;
};

const PostCard: FC<Props> = ({
                             id,
                             title,
                             date,
                             userName ,
                             image,
                             description,
                             onDelete,
                         }) => {
    return (

        <Card>
            <Row>
                <Col xs={3}>
                    <Image src="https://via.placeholder.com/150" fluid />
                </Col>
                <Col xs={9}>
                    <Card.Body>
                        <Card.Title className="card-title">
                                <span>{userName}</span>
                                <Badge>{date.toString()}</Badge>
                        </Card.Title>

                        <Card.Text>
                            <h4>{title}</h4>
                            <p>{description}</p>
                        </Card.Text>
                    </Card.Body>
                </Col>
                <div>
                    <CommentsForm></CommentsForm>
                </div>

                <Card.Footer>
                    <Button variant="danger">{/* onClick={() => onDelete(id)}>*/}
                        Eliminar
                    </Button>
                </Card.Footer>
            </Row>
        </Card>

    );
}

export { PostCard };

import {Button, Form}from 'react-bootstrap';
import {useEffect} from "react";
import {api} from '../../../src/utils/axios'
import {servicesUser} from "../../services/users";

const SignupForm = () => {

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresar nombre" />
                <Form.Text className="text-danger">
                    Valor incorrecto
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Ingresar apellido" />
                <Form.Text className="text-danger">
                    Valor incorrecto
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresar email" />
                <Form.Text className="text-danger">
                    Valor incorrecto
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Ingresar password" />
                <Form.Text className="text-danger">
                    Valor incorrecto
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control type="date" placeholder="Ingresar fecha de nacimiento" />
                <Form.Text className="text-danger">
                    Valor incorrecto
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nickname</Form.Label>
                <Form.Control type="text" placeholder="Ingresar nickname" />
                <Form.Text className="text-danger">
                    Valor incorrecto
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type="text" placeholder="Ingresar ciudad" />
                <Form.Text className="text-danger">
                    Valor incorrecto
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Pais</Form.Label>
                <Form.Control type="text" placeholder="Ingresar pais" />
                <Form.Text className="text-danger">
                    Valor incorrecto
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Amigos</Form.Label>
                <Form.Control type="list" placeholder="Ingresar amigos" />
                <Form.Text className="text-danger">
                    Valor incorrecto
                </Form.Text>
            </Form.Group>


            <Button variant="primary" type="submit">
                Crear cuenta
            </Button>
        </Form>
    );
};

export { SignupForm };
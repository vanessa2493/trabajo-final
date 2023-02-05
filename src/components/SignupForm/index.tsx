import {Button, Form}from 'react-bootstrap';
import {useForm} from "react-hook-form";
import {SignupType} from "../../types";
import {servicesUser} from "../../services/users";


const SignupForm = () => {

    const {register, handleSubmit} = useForm<SignupType>()

    const onSubmit = (data: SignupType) => {
        servicesUser.add(data)
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresar nombre" {...register('name')} />
                <Form.Text className="text-danger">
                    Valor incorrecto
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Ingresar apellido" {...register('lastname')}/>
                <Form.Text className="text-danger">
                    Valor incorrecto
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresar email" {...register('email')}/>
                <Form.Text className="text-danger">
                    Valor incorrecto
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Ingresar password" {...register('password')} />
                <Form.Text className="text-danger">
                    Valor incorrecto
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control type="date" placeholder="Ingresar fecha de nacimiento" {...register('birthdate')}/>
                <Form.Text className="text-danger">
                    Valor incorrecto
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nickname</Form.Label>
                <Form.Control type="text" placeholder="Ingresar nickname" {...register('nickname')} />
                <Form.Text className="text-danger">
                    Valor incorrecto
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control type="text" placeholder="Ingresar ciudad" {...register("city")}/>
                <Form.Text className="text-danger">
                    Valor incorrecto
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Pais</Form.Label>
                <Form.Control type="text" placeholder="Ingresar pais" {...register('country')}/>
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
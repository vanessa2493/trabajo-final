import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FC, useState } from 'react';
import { authService } from '../../services/auth';
import { useAuth } from "../../contexts";
import { useNavigate } from 'react-router-dom';

const LoginForm: FC = () => {

    const { currentUser, setCurrentUser } = useAuth(); // Agrega setCurrentUser a la desestructuración
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const user = await authService.login(email, password);
            setCurrentUser(user); // Llama a setCurrentUser para actualizar el usuario en el contexto
        } catch (error) {
            console.error(error);
        }
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export { LoginForm };

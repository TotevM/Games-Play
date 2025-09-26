import { Link } from 'react-router';
import { useLogin } from '../api/useAuth';
import { useNavigate } from 'react-router';
import { useUserContext } from '../contexts/UserContext.jsx';

export default function Login() {
    const { login } = useLogin();
    const { userLoginHandler } = useUserContext();
    const navigate = useNavigate();

    const onLoginHandler = async (formData) => {
        const values = Object.fromEntries(formData);
    
        const authData = await login(values.email, values.password);
        userLoginHandler(authData);
        navigate(-1);
    };

    return (
        <section id='login-page' className='auth'>
            <form id='login' action={onLoginHandler}>
                <div className='container'>
                    <div className='brand-logo'></div>
                    <h1>Login</h1>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Sokka@gmail.com'></input>

                    <label htmlFor='login-pass'>Password:</label>
                    <input
                        type='password'
                        id='login-password'
                        name='password'></input>
                    <input
                        type='submit'
                        className='btn submit'
                        value='Login'></input>
                    <p className='field'>
                        <span>
                            If you don't have profile click{' '}
                            <Link to='/register'>here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}

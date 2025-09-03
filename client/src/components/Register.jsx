import { Link } from 'react-router';
import { useRegister } from '../api/useAuth';
import { useNavigate } from 'react-router';
import { useUserContext } from '../contexts/UserContext.jsx';

export default function Register() {
    
    const navigate = useNavigate();
    const { register } = useRegister();
    const { userLoginHandler } = useUserContext();

    const registerHandler = async (formData) => {
        const { email, password, confirmPassword } =
            Object.fromEntries(formData);
        console.log(email, password, confirmPassword);

        if (password !== confirmPassword) {
            console.log('Password mismatch'); //TODO handle this properly
            return;
        }
        const authData = await register(email, password);
        userLoginHandler(authData);
        navigate('/');
    };

    return (
        <section id='register-page' className='content auth'>
            <form id='register' action={registerHandler}>
                <div className='container'>
                    <div className='brand-logo'></div>
                    <h1>Register</h1>

                    <label htmlFor='email'>Email:</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='maria@email.com'
                    />

                    <label htmlFor='pass'>Password:</label>
                    <input
                        type='password'
                        name='password'
                        id='register-password'
                    />

                    <label htmlFor='con-pass'>Confirm Password:</label>
                    <input
                        type='password'
                        name='confirmPassword'
                        id='confirmPassword'
                    />

                    <input
                        className='btn submit'
                        type='submit'
                        value='Register'
                    />

                    <p className='field'>
                        <span>
                            If you already have profile click{' '}
                            <Link to='/login'>here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}

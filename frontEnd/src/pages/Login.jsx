// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { requestLogin } from '../services/requests';
import { saveLogin } from '../services/handleStorage';
import '../style/loginStyle.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const verifyLoginData = () => {
      const lengthVerification = 6;
      const errors = [
        !email || !email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
        !password || password.length < lengthVerification,
      ];
      const hasErrors = errors.some((error) => error);
      setDisableButton(hasErrors);
    };
    verifyLoginData();
  }, [email, password]);

  const login = async (event) => {
    event.preventDefault();
    setFailedTryLogin(false);
    try {
    //   const response = await requestLogin('/login', { email, password });
      saveLogin("response");
      navigate('/chat')
    } catch (error) {
      setFailedTryLogin(true);
    }
  };

  return (
    <main className="user-login-area">
      <h1>TALK ABOUT PLAY</h1>
      <form className="form-login-area">
        <label htmlFor="email-input">
          Email:
          <input
            className="login__login_input"
            type="text"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            placeholder="email@email.com.br"
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            type="password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            placeholder="*************"
          />
        </label>
        <button
          type="submit"
          disabled={ disableButton }
          onClick={ (event) => login(event) }
        >
          LOGIN
        </button>
        <button
          type="button"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
      <div>
        {
          failedTryLogin
            ? (
              <p>
                {
                  `O endereço de e-mail ou a senha não estão corretos.
                Por favor, tente novamente.`
                }
              </p>
            )
            : null
        }
      </div>
    </main>
  );
}

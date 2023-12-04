// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { requestRegister } from '../services/requests';
import { saveLogin } from '../services/handleStorage';

export default function Redister() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [failedTryRegister, setFailedTryRegister] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const verifyRegisterData = () => {
      const nameRule = 12;
      const passwordRule = 6;
      const errors = [
        !name || name.length < nameRule,
        !email || !email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
        !password || password.length < passwordRule,
      ];
      const hasErrors = errors.some((error) => error);
      setDisableButton(hasErrors);
    };
    verifyRegisterData();
  }, [name, email, password]);

  const register = async (event) => {
    event.preventDefault();
    setFailedTryRegister(false);
    try {
    //   const response = await requestRegister('/users', { name, email, password });
      saveLogin('response');
      return navigate('/customer/products');
    } catch (error) {
      setFailedTryRegister(true);
    }
  };

  return (
    <main className="user-cadastro">
      <form>
        <label htmlFor="name-input">
          Nome:
          <input
            className="register__input-name"
            type="text"
            onChange={ ({ target: { value } }) => { setName(value); } }
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email-input">
          Email:
          <input
            className="common_register__input-email"
            type="text"
            onChange={ ({ target: { value } }) => { setEmail(value); } }
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="password-input">
          Senha:
          <input
            className="common_register__input-password"
            type="text"
            onChange={ ({ target: { value } }) => { setPassword(value); } }
            placeholder="**********"
          />
        </label>
        <button
          type="submit"
          disabled={ disableButton }
          onClick={ (event) => register(event) }
        >
          CADASTRAR
        </button>
      </form>
      <div>
        { (failedTryRegister)
          ? (
            <p>
              O email já está cadastrado em nosso banco de dados.
            </p>
          ) : null}
      </div>
    </main>
  );
}

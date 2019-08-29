import { history } from '../routes/AppRouter.js'

export const goToLogin = async () => {
  history.push(`/login`);
}

export const goToRegister = async () => {
  history.push(`/register`);
}

export const goToHome = () => {
  console.log('going to home');
  history.push(`/`);
}
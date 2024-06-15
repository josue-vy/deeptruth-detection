import { signInWithEmailAndPassword, signInWithGoogle, signOut, auth } from '../components/login/firebaseConfig';
import { jest } from '@jest/globals';

jest.mock('../components/login/firebaseConfig', () => {
  const originalModule: Record<string, any> = jest.requireActual('../components/login/firebaseConfig');
  return {
    ...originalModule,
    signInWithEmailAndPassword: jest.fn(),
    signInWithGoogle: jest.fn(),
    signOut: jest.fn(),
  };
});

describe('Auth module', () => {
  it('Iniciar Sesion con correo electronico y contraseña', async () => {
    const email = 'test@example.com';
    const password = 'password';
    await signInWithEmailAndPassword(email, password);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(email, password);
  });

  it('Inicia sesion con cuenta de google', async () => {
    await signInWithGoogle();
    expect(signInWithGoogle).toHaveBeenCalled();
  });

//   it('should handle Google sign-in error', async () => {
//     const error = new Error('Google sign-in error');
//     (signInWithGoogle as jest.Mock).mockRejectedValueOnce;
//     await signInWithGoogle();
//     expect(console.error).toHaveBeenCalledWith(error);
//   });

  it('Cerrar Sesion', async () => {
    await signOut();
    expect(signOut).toHaveBeenCalled();
  });
});

// src/__mocks__/firebase/auth.ts
const mockSignInWithEmailAndPassword = jest.fn();
const mockSignInWithPopup = jest.fn();
const mockSignOut = jest.fn();

const mockAuth = {
  signInWithEmailAndPassword: mockSignInWithEmailAndPassword,
  signInWithPopup: mockSignInWithPopup,
  signOut: mockSignOut,
};

const getAuth = () => mockAuth;

const GoogleAuthProvider = jest.fn();

export {
  getAuth,
  GoogleAuthProvider,
  mockSignInWithEmailAndPassword,
  mockSignInWithPopup,
  mockSignOut,
};

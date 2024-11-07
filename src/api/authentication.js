import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../firebase';

export const registerUser = async (auth, email, password, name) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await updateProfile(user, {
      displayName: name,
    });

    const token = await user.getIdToken();

    return { user, token };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    const token = await user.getIdToken();

    return { user, token };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// export const logoutUser = async () => {
//   try {
//     await signOut(auth);
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

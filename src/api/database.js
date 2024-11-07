import { ref, get } from 'firebase/database';
import { db } from '../firebase';

export const getTeachers = async () => {
  try {
    const snapshot = await get(ref(db, 'teachers'));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log('No data available');
    }
  } catch (error) {
    console.error('Error fetching teachers: ', error);
  }
};

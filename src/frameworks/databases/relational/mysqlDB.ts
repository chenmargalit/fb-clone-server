import { IEntityUserObj } from '../../../interfaces/entities';
import { relationalConn as conn } from './connectRelationalDb';

// I've got a few options here:
// 1. I use straight up sql - not recommended - I practice this in other places
// 2. I use sequlize straight up here
// 3. I use an internal library I'll build based on sequlize and here I'll only use it
// this is what I'll do. It will be a databases repo including mysql, mongo, redis etc
// THIS project will define .env files for it to use and pass the credentials as a parameter
// the repo alone will not be able to connect anywhre as it wont have credentials.

export const relationalDb = () => {
  const signUpUserToDb = async (entityUserObj: IEntityUserObj) => {
    const firstName = entityUserObj.getFirstName();
    const lastName = entityUserObj.getLastName();
    const email = entityUserObj.getEmail();
    const password = entityUserObj.getPassword();
    const birthdayDate = entityUserObj.getBirthdayDate();
    const gender = entityUserObj.getGender();
    const created_at = new Date()

    try {
      conn.query(
        `INSERT INTO users (first_name, last_name, email, password, birthday_date, gender, created_at) VALUES 
        (?,?,?,?,?,?,?)`,
        [firstName, lastName, email, password, birthdayDate, gender, created_at]
      );
    } catch (e) {
      console.log('problem with creating user', e);
    }
  };
  return {
    signUpUserToDb,
  };
};

export default relationalDb;

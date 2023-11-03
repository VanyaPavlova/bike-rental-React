import { users } from "../data/sampleData";
import { User } from "../models/User";

class UserService {
  constructor() {
    this._users = users.map((u) => new User(u));
    this._currentUser = null;
    this._counter = 1000;
  }

  signIn({ email, password }) {
    let user = this._users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      this._currentUser = user;
    }

    return user;
  }

  signUp({ name, email, password }) {
    let isUsernameTaken = this._users.find((u) => u.email === email)
      ? true
      : false;

    if (isUsernameTaken) {
      console.info("Username is already taken");
      return false;
    }

    let newUser = new User({
      id: ++this._counter,
      name,
      email,
      password,
    });

    this._users.push(newUser);

    return newUser;
  }

  getCurrentUser() {
    return this._currentUser;
  }

  getUsersByRole(role) {
    return this._users.filter((user) => user.role === role);
  }

  deleteUser(userId) {
    const userIndex = this._users.findIndex((user) => user.id === userId);

    if (userIndex === -1) {
      console.info("User not found");
      return false;
    }

    this._users.splice(userIndex, 1);
    return true;
  }
}

export const userService = new UserService();

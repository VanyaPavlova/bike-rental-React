/**
 * Represents a User.
 * @constructor
 * @param {number} id - The id of the user.
 * @param {string} name - The model of the user.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @param {number} age - The age of the user.
 * @param {string} phone - The phone of the user.
 * @param {string} role - The access of the user.
 * @param {string} address - The address of the user.
 * @param {string} city - The city of the user.
 * @param {number} zipCode - The zipCode of the user.
 */
export class User {
  constructor(options) {
    this.id = options.id;
    this.name = options.name;
    this.email = options.email;
    this.password = options.password;
    this.age = options.age;
    this.phone = options.phone;
    this.role = options.role;
    this.address = options.address;
    this.city = options.city;
    this.zipCode = options.zipCode;
  }
}

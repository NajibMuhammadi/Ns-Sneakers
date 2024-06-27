import nedb from 'nedb-promises';
import Joi from 'joi';

const userSchema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(30).required(),
    lastName: Joi.string().alphanum().min(3).max(30).required(),
    userName: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(6).required(),
    validatePasssword: Joi.ref('password'),
    email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
    userNameOrEmail: Joi.alternatives().try(
        Joi.string().alphanum().min(3).max(30),
        Joi.string().email()
    ).required(),
    password: Joi.string().min(6).required(),
});
export { userSchema, loginSchema };
    
export const userDb = nedb.create({
    filename: 'config/users.db',
    autoload: true
})
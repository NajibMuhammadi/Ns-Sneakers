import nedb from 'nedb-promises';
import Joi from 'joi';

const userSchema = Joi.object({
    firstName: Joi.string().alphanum().min(3).max(30).required().messages({
        'string.empty': 'firstname is not allowed to be empty'
    }),
    lastName: Joi.string().alphanum().min(3).max(30).required(),
    userName: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(6).required(),
    validatePasssword: Joi.ref('password'),
    email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
    userNameOrEmail: Joi.string().required().messages({
        'string.empty': 'Användarnamn eller email får inte vara tomt.',
        'any.required': 'Användarnamn eller email är obligatoriskt.'
    }),
    password: Joi.string().required().messages({
        'string.empty': 'Lösenord får inte vara tomt.',
    }),
});
export { userSchema, loginSchema };
    
export const userDb = nedb.create({
    filename: 'config/users.db',
    autoload: true
})
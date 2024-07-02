import nedb from 'nedb-promises';
import Joi from 'joi';

const userSchema = Joi.object({
    firstName: Joi.string().pattern(new RegExp('^[a-zA-Z]+$')).alphanum().min(3).max(30).required().messages({
        'string.empty': 'firstname is not allowed to be empty',
        'any.required': 'firstname is required',
        'string.pattern.base': 'firstname must only contain letters'
    }),
    lastName: Joi.string().pattern(new RegExp('^[a-zA-Z]+$')).alphanum().min(3).max(30).required().messages({
        'string.empty': 'lastname is not allowed to be empty',
        'any.required': 'lastname is required',
        'string.pattern.base': 'lastname must only contain letters'
    }),
    userName: Joi.string().alphanum().min(3).max(30).required().messages({
        'string.empty': 'username is not allowed to be empty',
        'any.required': 'username is required'
    }),
    email: Joi.string().email().required().messages({
        'string.empty': 'email is not allowed to be empty',
        'string.email': 'email must be a valid email address',
        'any.required': 'email is required'
    }),
    password: Joi.string().min(6).required().messages({
        'string.empty': 'password is not allowed to be empty',
        'any.required': 'password is required'
    }),
    confirmPassword: Joi.string().min(6).required().messages({
        'string.empty': 'Confirm password is not allowed to be empty',
        'any.required': 'Confirm password is required'
    })
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

process.on('exit', () => {
    userDb.close();
});
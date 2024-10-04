import {bool, date, InferType, number, object, string} from "yup";

const userSchema = object({
    name: string().required(),
    age: number().integer().positive().required(),
    email: string().email().required(),
    password: string().required(),
    confirmPassword: string().required(),
    createdOn: date().default(() => new Date()),
    isStudent: bool().required(),
    studentId: number().when('isStudent', {
        is: true,
        then: (schema) => schema.min(100_000_000).max(999_999_999).required(),
        otherwise: (schema) => schema.notRequired().nullable(),
    })
})
type User = InferType<userSchema>;

const users: User[] = [
    {
        name: "Gabin",
        age: 20,
        email: "email@example.com",
        password: "secure-pass",
        confirmPassword: "secure-pass",
        isStudent: false
    },
    {
        name: "Gabinou",
        age: -2,
        email: "email@example",
        password: "secure-pass",
        confirmPassword: "insecure-pass",
        isStudent: true,
        studentId: 123_456_789
    },
    {
        name: "Gabino",
        age: 18,
        email: "email@example.com",
        password: "secure-pass",
        confirmPassword: "insecure-pass",
        isStudent: true,
        studentId: 123_456_789
    }
];

console.log(await userSchema.isValid(users[0]));
console.log(await userSchema.isValid(users[1]));
console.log(await userSchema.isValid(users[2]));

const validatedUser1: User = await userSchema.validate(users[0]);
console.log(validatedUser1);
const validatedSyncUser1: User = await userSchema.validateSync(users[0]);
console.log(validatedSyncUser1);
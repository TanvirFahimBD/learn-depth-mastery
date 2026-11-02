// 2-2: Type Union

// literal type
type Status = "pending";
const status: Status = "pending";
console.log(status);

// basic union
type Identity =  string | number;
const id: Identity = 123;
console.log(id);

// literal union
type UserRole = "admin" | "user";
const role: UserRole = "admin";
console.log(role);

// object union
type Admin = {id: number; role: "admin" };
type Member = {id: number; role: "user" };
type User = Admin | Member;
const user: User = { id: 1, role: "admin" };
console.log(user);
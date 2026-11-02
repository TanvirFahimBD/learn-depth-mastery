//type assertion


//as syntax(confusing with type casting)
type Status = "pending" | "approved" | "rejected";
const someStatus: Status = "pending";
const showStatus = (status: Status) => {
    console.log(`The status is: ${status}`);
}
showStatus(someStatus as Status); 

//non-null assertion(sure it declared)
interface Config {
    port?: number;
}
const config: Config = {
    port: 8080
};
const currentPort: number = config.port!; // non-null assertion


//constant assertion or readonly
const configuration = {
    port: 8080,
    prefix: "/api/v1"
} as const; // constant assertion
// configuration.port = 432; // Error: Cannot assign to 'port' because it is a read-only property.

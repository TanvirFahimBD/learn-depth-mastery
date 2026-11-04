//type assertion
const someStatus = "pending";
const showStatus = (status) => {
    console.log(`The status is: ${status}`);
};
showStatus(someStatus);
const config = {
    port: 8080
};
const currentPort = config.port; // non-null assertion
//constant assertion or readonly
const configuration = {
    port: 8080,
    prefix: "/api/v1"
}; // constant assertion
export {};
// configuration.port = 432; // Error: Cannot assign to 'port' because it is a read-only property.

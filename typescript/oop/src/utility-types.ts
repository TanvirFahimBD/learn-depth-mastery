// utility types

// Partial - make interface properties optional
interface User{
  id: string;
  name: string;
  email: string;
}


const updateProfle = (id: string, date: Partial<User>) => {
}
updateProfle("2132123", {name: "Tanvir"})

// optional - ? sign after any property make it optional. then use time that interface property if not given works fine
interface OptionalUser{
  id?: string;
  name?: string;
  email?: string;
}

const updateProfle2 = (id: string, date: OptionalUser) => {
}
updateProfle2("2132123", {name: "Tanvir"})


// Required - though type property is optional but some use case it need to be required then make it explicity Required so property must check to be required
interface Config{
  apiKey?: string;
  timeout?: number;
}

const initialize = (config: Required<Config>) => {
}

initialize({apiKey: "435oij354", timeout: 3000})

// Pick - define which property you want dynamically rather not changing the main interface
interface Product{
  id: number;
  name: string;
  price: number;
  description: string;
}

type ProductPreview = Pick<Product, "name" | "description">;

const preview: ProductPreview = {
  name: "Shoe",
  description: "latest shoe made in china"
}


//omit - if don't want to show some property from the existing one then use it to remove it
interface Employee {
  id: number;
  name: string;
  salary: number;
  nid: string;
}

type PublicEmployee  = Omit<Employee, "salary" | "nid" >

const directoryEntry: PublicEmployee = {
  id: 42,
  name: "Bob",
  // salary: 20000,
  // nid: "124343"
}

//record - which takes fixed property. more or less property if given it will give an error
type Environment = "development" | "staging" |"production";

const apiUrls: Record<Environment, string> = {
  development: "httsp://localhost:3000",
  staging: "httsp://staging.api.com",
  production: "httsp://api.com",
  // test: "working"
}


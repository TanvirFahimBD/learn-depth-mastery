const wrapInArray = <T>(value: T): T[] => {
  return [value];
};
const stringArr = wrapInArray<string>("Hello");
const numberArr = wrapInArray<number>(42);
stringArr.map((s) => s.toUpperCase());

interface UserResponse {
  name: string;
  age: number;
}
interface BlogResponse {
  title: string;
  description: string;
  date: string;
}
interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
}
type UserApiResponse = ApiResponse<UserResponse>;
type BlogApiResponse = ApiResponse<BlogResponse>;
const userRes : UserApiResponse = {
  data: {
    name: "John Doe",
    age: 30,
  },
  success: true,
  statusCode: 200,
};
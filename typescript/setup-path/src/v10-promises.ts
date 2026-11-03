interface User {
  name: string;
  role: string;
}
interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
}
const fetchUser = async (): Promise<User | undefined> => {
  try{
    const res = await fetch ("/api/v1/some-endpoint");
    const data = (await res.json()) as ApiResponse<User>;
    if(!res.ok || !data.success) {
      throw new Error(`API request failed with status code ${data.statusCode}`);
    }
    return data.data;
  }catch (error) {
    if(error instanceof Error) {
      console.error("Error fetching user:", error.message);
    } else {
      console.error("Error fetching user:", error);
    }
  }
}
const userData = await fetchUser();
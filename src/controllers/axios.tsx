import axios from "axios";
const API_URL = "http://localhost:8080";
interface TodoFields {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  uid: string;
  username: string;
}
class ApiService {
  basicCallget(): void {
    axios
      .get(API_URL + "/api/lo", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((response) => {
        return response.data;
      });
  }
  basicCallpost(): void {
    axios.post(API_URL, { ola: "asas" }).then((response) => {
      return response.data;
    });
  }
  logout(): Boolean {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("username");
    localStorage.removeItem("userid");
    return true;
  }

  async login(username: string, password: string): Promise<Boolean> {
    var success: Boolean = false;
    await axios
      .post(API_URL + "/api/login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data && response.data.success) {
          localStorage.setItem("jwtToken", response.data.token);
          localStorage.setItem("username", response.data.user.username);
          localStorage.setItem("userid", response.data.user._id);

          success = true;
        }
      });
    return success;
  }
  async register(username: string, password: string): Promise<Boolean> {
    var success: Boolean = false;
    await axios
      .post(API_URL + "/api/register", {
        username,
        password,
      })
      .then((response) => {
        console.log(response);
        if (response.data && response.data.success) {
          localStorage.setItem("jwtToken", response.data.token);
          localStorage.setItem("username", response.data.user.username);
          localStorage.setItem("userid", response.data.user._id);
          console.log(response.data.user._id);
          success = true;
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return success;
  }
  async getTodo(): Promise<TodoFields[]> {
    var todoList: TodoFields[] = [];

    await axios
      .get(API_URL + "/api/todo/get/" + localStorage.getItem("username"), {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      })
      .then((response) => {
        //console.log(response);
        if (response.data && response.data.success) {
          todoList = response.data.todos;
        } else {
          console.log(response);
        }
      })
      .catch((err) => {
        console.log("err");
        console.log(err);
      });
    return todoList;
  }
  async addTodo(title: string, description: string): Promise<Boolean> {
    var success: Boolean = false;
    await axios
      .post(
        API_URL + "/api/todo/add",
        {
          title: title,
          description: description,
          username: localStorage.getItem("username"),
          userid: localStorage.getItem("userid"),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      )
      .then((response) => {
        if (response.data && response.data.success) {
          success = true;
        }
      });
    return success;
  }
  async updateTodo(
    todoId: string,
    title: string,
    description: string
  ): Promise<Boolean> {
    var success: Boolean = false;
    await axios
      .post(
        API_URL + "/api/todo/update",
        {
          id: todoId,
          title: title,
          description: description,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      )
      .then((response) => {
        if (response.data && response.data.success) {
          success = true;
        }
      });
    return success;
  }
  async deleteTodo(todoId: string): Promise<Boolean> {
    var success: Boolean = false;
    await axios
      .post(
        API_URL + "/api/todo/delete",
        {
          id: todoId,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      )
      .then((response) => {
        if (response.data && response.data.success) {
          success = true;
        }
      });
    return success;
  }
}

export default new ApiService();

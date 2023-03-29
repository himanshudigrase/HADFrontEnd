import { createServer, Model } from "miragejs";
//In the makeServer default parameter we set the environment to test. This ensures that every time a test runs, the mock server’s fresh instance is created without seeds. 
export function makeServer({ environment = "test" } = {}) {
    //createServer function allows you to specify an environment value of either test or development
    let server = createServer({
        environment,

        models: {
            users: Model,
        },

        seeds(server) {
            server.create("user", {
                email: "abc@gmail.com",
                password: "12345678",
                userRole: {
                    roleId: 1,
                },

                demographics: {
                    userId: 1,
                    firstName: "Hims",
                    lastName: "DIgs",
                    gender: "M",
                    dob: "03/01/1999",
                    age: 24
                }
            });

            server.create("user", {
                email: "gda@gmail.com",
                password: "12345678",
                userRole: {
                    roleId: 1,
                },

                demographics: {
                    userId: 2,
                    fName: "Dugs",
                    lName: "Reds",
                    sex: "M",
                    DOB: "04/07/1999",
                    age: 24
                }
            });
        },
        routes() {
            this.namespace = "user/add";
            this.get("/", (schema, request) => {
              return schema.users.all();
            });
            this.get("/:id", (schema, request) => {
              let id = request.params.id;
              return schema.users.find(id);
            });
            this.post("/", (schema, request) => {
              let attrs = JSON.parse(request.requestBody);
              return schema.users.create(attrs);
            });
            this.patch("/:id", (schema, request) => {
              let newAttrs = JSON.parse(request.requestBody);
              let id = request.params.id;
              let user = schema.users.find(id);
              return user.update(newAttrs);
            });
            this.delete("/:id", (schema, request) => {
              let id = request.params.id;
              return schema.users.find(id).destroy();
            });
          },
    });

    return server;
}
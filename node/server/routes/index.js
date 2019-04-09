
import {studentRoutes} from "../api/Student/routes/student-routes";
import {schoolsRoutes} from "../api/Schools/routes/schools-routes";

export default class Routes {
   static init(app, router) {
     studentRoutes.init(router),
     schoolsRoutes.init(router);

     app.use("/", router);
   }
}

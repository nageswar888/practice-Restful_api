import {schoolsController} from "../controllers/schools-controller";

export class schoolsRoutes{
  static init(router){
    router.route('/school')
      .get(schoolsController.getAll)
      .post(schoolsController.createNew);
    console.log("hai")

    router.route('/school/:id')
      .get(schoolsController.getById)
      .put(schoolsController.update)
      .delete(schoolsController.deleteById);
  }
}


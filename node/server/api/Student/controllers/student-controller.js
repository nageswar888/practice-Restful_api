import {studentDao} from "../dao/student-dao";

export class studentController{
  static getAll(req, res){
    studentDao.getAll()
      .then(student => res.status(200).json(student))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res) {
    let _todo = req.body;
  console.log("----->",req.body)
    studentDao
      .createNew(_todo)
      .then(student => res.status(201).json(student))
      .catch(error => res.status(400).json(error));
  }

  static getById(req, res) {
    let paramet = req.params.id;
    console.log("------------->",paramet)
    studentDao.getById(paramet)
      .then(student => res.status(201).json(student))
      .catch(error => res.status(400).json(error));
  }

  static deleteById(req, res) {
    let paramet = req.params.id;
    console.log("------->id is ",paramet)
    studentDao.deleteById(paramet)
      .then(student => res.status(201).json(student))
      .catch(error => res.status(400).json(error));
  }

  static update(req, res) {
    let paramet = req.params.id;
    let _todo = req.body;
    studentDao.update(paramet, _todo)
      .then(student => res.status(201).json(student))
      .catch(error => res.status(400).json(error));
  }
}

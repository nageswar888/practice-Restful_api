import {schoolsDao} from "../dao/schools-dao";

export class schoolsController{
  static getAll(req, res){
    schoolsDao.getAll()
      .then(school => res.status(200).json(school))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req, res){
    let _todo = req.body;
    console.log("controller is working",req.body)
    schoolsDao.createNew(_todo)
      .then(school => res.status(200).json(school))
      .catch(error => res.status(400).json(error));
  }

  static getById(req, res) {
    let paramet = req.params.id;
    console.log("=======",paramet)
    schoolsDao.getById(paramet)
      .then(school => res.status(200).json(school))
      .catch(error => res.status(400).json(error));
  }


  static update(req, res) {
    let _todo = req.body;
    let paramet = req.params.id;
    console.log(_todo)
    console.log(paramet)
    schoolsDao.update( paramet, _todo)
      .then(school => res.status(200).json(school))
      .catch(error => res.status(400).json(error));
  }

  static deleteById(req, res) {
    let _todo = req.params.id;
    schoolsDao.deleteById(_todo)
      .then(school => res.status(200).json(school))
      .catch(error => res.status(400).json(error));
  }
}

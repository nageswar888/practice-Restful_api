import model from '../../../models';
import Promise from 'bluebird';

export class schoolsDao {
  static createNew(request) {
    return new Promise((resolve, reject) => {
      let _reqBody = request;
      console.log(_reqBody)

      model.School.create({
        name: request.name,
        address: request.address
      }).then(school => {
        resolve(school);
      })
        .catch(error => {
          reject('Not Created ')
        })
    })
  }

 static getAll(){
   return new Promise((resolve, reject) => {
     model.School.findAndCountAll()
       .then(school => {
         resolve(school);
       }, (error) => {
         reject(error);
       })
   })
 }

 static update(paramet, _todo) {
    console.log("--------",_todo)
    return new Promise((resolve, reject) => {
      model.School.update(
        {
          name: _todo.name,
          address: _todo.address
        },
        { where: {id: paramet }}
      ).then(school => {
        resolve(school);
      }).catch(error => { reject(error)})
    })
 }

 static deleteById(paramet) {
    return new Promise((resolve, reject) => {
      model.School.destroy({ where: { id: paramet}})
        .then(school => { resolve(school); })
        .catch(error => { reject(error) })
    })
 }

 static getById(paramet) {
   console.log("------------")
    return new Promise((resolve, reject) => {
      model.School.findAll({ where: { id: paramet}})
        .then( school => { resolve(school); })
        .catch(error => { reject(error); })
    })
 }


}



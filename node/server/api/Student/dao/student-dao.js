import model from '../../../models';
import Promise from 'bluebird';


export class studentDao {
  static createNew(request) {
    return new Promise((resolve, reject) => {
      let _reqBody = request
      console.log("body",_reqBody)
      model.Students.create(_reqBody).then(student => {
        resolve(student);
        console.log('enterd into createnew mrthod in dao')

      })
        .catch(error => {
          reject('Not Created ')

        })
    })
  }

  static getAll() {
    return new Promise((resolve, reject) => {
      model.Students.findAndCountAll()
        .then(users => {
          resolve(users);
        }, (error) => {
          reject(error);
        })
    })
  }

  static getById(_paramet) {
    return new Promise((resolve, reject) => {
      console.log(typeof _paramet);
      console.log("in dao---id---",_paramet)
      model.Students.findAll({where: {id: _paramet}}).then(result => {
        resolve(result)
        console.log("------------> dao is also executing1")
      })
        .catch(error => {
          reject(error)
        })
    })
  }

  static deleteById(_paramet) {
    return new Promise((resolve, reject) => {
      model.Students.destroy({ where: {id: _paramet}}).then(resolve("result"))
        .catch(reject("error"))
    })
  }

  static update(_paramet, _todo) {
    console.log("--------->",_paramet)
    console.log("--------->",_todo)
    return new Promise((resolve, reject) => {
      model.Students.update({
        name: _todo.name,
        marks: _todo.marks
      },
        { where: { id: _paramet}}).then(result => { resolve(result)})
        .catch(error => { reject(error) })
    })
  }


}

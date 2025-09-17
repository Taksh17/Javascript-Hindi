//class creation:-
class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryptPassword(){//yaha basically hmlog ne ek function create kia hai jo ki inside a class hua to yeh
        //ek method keh laega or iske pass user class ke sare attribute ka access rhega
        return `${this.password}abc`
    }
}
const chai=new user('chai','chai@gmail.com',123)
console.log(chai.encryptPassword());
//super keyword:-
class User {
  constructor(username, email) {
    this.username = username
    this.email = email
  }
}

class Admin extends User {
  constructor(username, email, role) {
    super(username, email)  // calls parent constructor
    this.role = role
  }
}

const admin1 = new Admin("rakesh", "rakesh@gmail.com", "superadmin")
console.log(admin1)
//super keyword basically inhertiance me help krta hai hame
///Must use super() before this in a child constructor, otherwise JS throws an error.
//static keyword ka use krke hmlog private methods in class inject krskte hai
class User {
  constructor(username) {
    this.username = username
  }

  static createId() {
    return Math.floor(Math.random() * 10000)
  }
}

const user1 = new User("chai")

// ❌ Not accessible through object
console.log(user1.createId)   // undefined

// ✅ Accessible directly through class
console.log(User.createId())  // e.g. 4721


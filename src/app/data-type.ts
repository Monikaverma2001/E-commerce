export interface signUp{
  name:String,
  email:String,
  password:String
}
export interface usersignUp{
  username:String,
  email:String,
  password:String
}

export interface signin{
  email:String,
  password:String
}

export interface product{
  name:String,
  price:String,
  color:String,
  category:String,
  discription:String,
  image:String,
  id:number,
  quantity:undefined|number
}

import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { product } from 'src/app/data-type';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartData=new EventEmitter<product[] | []>();
  searchData:undefined|product[];
  constructor(private http: HttpClient, private router: Router) { }
  addProduct(data:product):any{
   this.http.post('http://localhost:3000/product',data,{observe:'response'}).subscribe(()=>{
    // this.router.navigate(['seller-home']);

   })
   return "product added";
  }
  //use observable for array ngfor loop working
  getProduct():Observable<product[]> {
    return this.http.get<product[]>('http://localhost:3000/product')
   }
   getProducttrendy():Observable<product[]> {
    return this.http.get<product[]>('http://localhost:3000/product?_limit=8')
   }
   deleteProduct(id:number):any{
    return this.http.delete(`http://localhost:3000/product/${id}`);
   }
   getdata(id:String):any{
    return this.http.get(`http://localhost:3000/product/${id}`)
   }
   updateProduct(data:product,id:number):any{
    return this.http.put(`http://localhost:3000/product/${id}`,data,{observe:'response'})

   }
   popularProduct():Observable<product[]> {
    return this.http.get<product[]>('http://localhost:3000/product?_limit=3')
   }
   searching(data:String):any{
    return this.http.get(`http://localhost:3000/product?q=${data}`)
   }

   productSearch(query:String):Observable<product[]>{
    return this.http.get<product[]>(`http://localhost:3000/product?q=${query}`);
   }
   productdetail(id:String):Observable<product>{
    return this.http.get<product>(`http://localhost:3000/product/${id}`)

   }
   localStorageAddToCart(data:product){
    let cartData=[];
    let localData=localStorage.getItem('localCart');
    if(!localData)
    {
      localStorage.setItem('localCart',JSON.stringify([data]));
    }
    else{
      //code
      cartData=JSON.parse(localData);
      cartData.push(data);
      localStorage.setItem('localCart',JSON.stringify(cartData));
    }
    this.cartData.emit(cartData);
   }
   removeItemFromCart(productId:number|any){
    let cartdata=localStorage.getItem('localCart');
    if(cartdata)
    {
      let items:product[]=JSON.parse(cartdata);
      items=items.filter((item:product)=>productId!==item.id);
      localStorage.setItem('localCart',JSON.stringify(items));
      this.cartData.emit(items);
    }
   }
}

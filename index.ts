// let a = 10;
// let b = 20;

// let sum = a + b;

// function

// function returnString ():string {
// return 'hello world'
// }
// function returnNumber ():number {
// return 10
// }
// function returnBool ():boolean {
// return true
// }

// function returnUniversal<T> (val:T):T{
//     return val;
// }

// returnUniversal<string>("hello world")

// - Generic functions
// function createPair<S, T>(v1: S, v2: T): [S, T] {
//   return [v1, v2];
// }
// console.log(createPair<string, boolean>('hello', true)); // ['hello', 42]

// interface KeyValuePair<K, T> {
//   key: string;
//   value: T;
// }

// const session: KeyValuePair<number, boolean> = {
//   key: "is_Authenticated",
//   value: true,
// };

// Discriminated unions
// type Result<T, E = Error> = { success: true; data: T } | { success: false; error: E };

// const outcome: Result<number[]> = {
//   success: false,
//   error: new Error("Failed to fetch data"),
// };

// interface PaginatedData<T> {
//   data: T[];
//   totalRecords: number;
//   currentPage: number;
// }

// interface Product {
//   id: string | number;
//   price: number;
// }

// const productCatalog: PaginatedData<Product> = {
//   data: [
//     {
//       id: "1",
//       price: 20,
//     },
//     {
//       id: 2,
//       price: 30,
//     }
//   ],
//   totalRecords: 10,
//   currentPage: 1,
// };

// type ApiResponse<T, E = string> =
//   | { success: true; data: T }
//   | { success: false; error: E };

// const successRes: ApiResponse<{ token: string }> = {
//   success: true,
//   data: { token: "abc-123" },
// };

// const errorRes: ApiResponse<
//   null,
//   { code: number; message: string }
// > = {
//   success: false,
//   error:{
//     code:401,
//     message:"something went wrong"
//   }
// };

// class User {
//   constructor(
//     public id: string,
//     public name: string,
//     private passwordHash: string,
//     readonly createdAt: Date = new Date(),
//   ) {
//     this.name = name;
//     // No need for: this.id = id; this.name = name; etc.
//     // TypeScript generates those assignments under the hood.
//   }
// }

// const user = new User("u_101", "Rahim", "hash_secret_99", new Date("2023-01-01"));
// console.log(user.name);      // "Rahim"
// user.createdAt = new Date(); // Error: Cannot assign to 'createdAt' because it is a read-only property.

// class Rectangle {
//   public a = 10;
//   private b = 20;
//   protected c = 30;

//   public constructor(
//     protected readonly width: number,
//     protected readonly height: number,
//   ) {}

//   public getArea(): number {
//     return this.width * this.height;
//   }

  

// }

// class Square extends Rectangle {
//   public constructor(width: number) {
//     super(width, width);
//   }

//   getC(){
//     return this.c;
//   }

  
//   // getArea gets inherited from Rectangle
// }


// class BankAccount {
//   public accountNumber: string;
//   protected balance: number;
//   private secretPin: number;

//   constructor(accNum: string, initialBalance: number, pin: number) {
//     this.accountNumber = accNum;
//     this.balance = initialBalance;
//     this.secretPin = pin;
//   }

//   public verifyPin(inputPin: number): boolean {
//     return this.secretPin === inputPin; // Valid: accessible within BankAccount
//   }
// }

// const bankAccount = new BankAccount("123456789", 1000, 1234);
// // console.log(bankAccount.secretPin);

// class SavingsAccount extends BankAccount {
//   public addInterest(rate: number): void {
//     // Valid: 'balance' is protected, so child classes can read/write it
//     this.balance += this.balance * rate;

//     // Error: Property 'secretPin' is private and only accessible within class 'BankAccount'
//     // console.log(this.secretPin);
//   }
// }


// interface Product {
//   readonly id: string | number;
//   price: number;
// }

// const product: Product = {
//   id: "1",
//   price: 20,
// };


// product.price = 30; // Valid: price is mutable
// product.id = "2"; // Error: id is readonly

// interface Shape {
//   getArea: () => number;
// }

// interface ShapeDetails {
//   getDetails: () => string;
// }


// class Rectangle implements Shape, ShapeDetails {
//   public constructor(protected readonly width: number, protected readonly height: number) {}

//  getArea(): number {
//     return this.width * this.height;
//   }

//   getDetails(): string {
//     return `Rectangle with width ${this.width} and height ${this.height}`;
//   }
// }


class DataStore<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItem(index: number): T | undefined {
    return this.items[index];
  }

  getAll(): readonly T[] {
    return this.items;
  }
}

const textStore = new DataStore<string>();
textStore.addItem("Document A");
const firstDoc = textStore.getItem(0); // string | undefined

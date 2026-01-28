const users=[
    {name:"Shree",age:26,location:"Nashik",salary:2000000},
    {name:"jay",age:22,location:"Pune",salary:1500000},
    {name:"mahesh",age:25,location:"mumbai",salary:1200000}
]

const ans = users.filter(indi=> indi.salary>1200000).reduce((total,use) => total+use.salary,0);
console.log(ans);


const week1 =(name)=>{
    console.log(`Good Morning ${name}`);
}

week1("hehehe");

const order = {
  id: 101,
  customer: "Rajesh",
  items: ["Laptop", "Mouse", "Keyboard"],
  total: 55000
};

const  {customer , total} = order
console.log(customer, total);

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const newarr=[...arr1,...arr2];
const unique = new Set(newarr);
console.log(unique);
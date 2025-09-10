## Answer no. (1)
### Var,Let আর Const এর মধ্যে পার্থক্য হল : 

#### 1. var

#### Scope :
var হলো function scoped। মানে যদি একটা ফাংশনের ভিতরে var দিয়ে ভ্যারিয়েবল ডিক্লেয়ার করা হয়, সেটা শুধু সেই ফাংশনের ভিতরে কাজ করবে।
কিন্তু ব্লকের ( { } এর মধ্যে, যেমন if/for লুপে) বাইরে চলে যেতে পারে।

#### Hoisting:
var দিয়ে ভ্যারিয়েবল আগে থেকে মেমোরিতে রিজার্ভ থাকে (hoist হয়), তাই ডিক্লেয়ার করার আগে ব্যবহার করলে undefined পাই।

#### Re-declare করা যায়:
একই নামে আবার var দিয়ে ভ্যারিয়েবল বানানো যায়, কোনো error দিবে না।




#### 2. let

#### Scope :
let হলো block scoped। মানে { } এর মধ্যে ডিক্লেয়ার করলে, সেটা শুধু ওই ব্লকের ভেতরেই কাজ করবে।

#### Hoisting:
let ও hoist হয়, কিন্তু temporal dead zone থাকার কারণে ডিক্লেয়ার করার আগে ব্যবহার করলে error দিবে।

#### Re-declare করা যায় না:
একই নামে আবার let দিয়ে ভ্যারিয়েবল বানানো যাবে না একই scope এ।



#### 3. const

#### Scope:
এটাও block scoped।

#### Reassign করা যায় না:
একবার ভ্যালু অ্যাসাইন করলে, নতুন করে আর পরিবর্তন করা যায় না।

#### Re-declare করা যায় না:
একই scope এ আবার declare করা যাবে না।

```Example:

// var
var x = 10;
var x = 20; 
console.log(x); // ans - 20

// let
let y = 30;
// let y = 40; 
y = 40; // শুধু value change করা যায়
console.log(y); // 40

// const
const z = 50;
// z = 60; 
console.log(z); // ans - 50

```


---


## Answer no. (2)

### map(), forEach(), আর filter() এর মধ্যে পার্থক্য হল : 

#### 1. map()

map() একটা নতুন array রিটার্ন করে। এটা প্রতিটা element এর উপর কাজ করে এবং যেটা return করবে সেটা নতুন array তে জমা হবে। অর্থাৎ, map() ব্যবহার করলে পুরোনো array অপরিবর্তিত থাকে, কিন্তু নতুন array পাওয়া যায়।


``` Example
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]
 
 ```



#### 2. forEach()

forEach() কোনো নতুন array রিটার্ন করে না। এটা শুধু loop এর মতো কাজ করে, প্রতিটি element এর উপর কিছু কাজ করতে চাইলে ব্যবহার করা হয়। return value উপেক্ষা করে।

``` Example 
const numbers = [1, 2, 3, 4];
numbers.forEach(n => console.log(n * 2)); 
// শুধু console এ দেখাবে, নতুন array তৈরি করবে না

```


#### 3. filter()

filter() একটা নতুন array রিটার্ন করে। শর্ত অনুযায়ী (condition true হলে) element গুলো নতুন array তে যোগ হয়। যেগুলো শর্ত পূরণ করবে না, সেগুলো বাদ যাবে।

``` Example 
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(n => n % 2 === 0);
console.log(even); // [2, 4]

``` 



--- 





## Answer no. (3)

### Arrow Function বলতে যা বোঝায় : 


Arrow Function হলো JavaScript ES6 এ আসা নতুন ফাংশন লেখার সংক্ষিপ্ত উপায়। আগে function লিখতে হলে function কীওয়ার্ড ব্যবহার করতে হতো, এখন => (arrow) দিয়ে ছোট আকারে ফাংশন লেখা যায়।


#### সাধারণ Function

```
function add(a, b) {
  return a + b;
}
console.log(add(5, 10)); // 15

```

#### Arrow Function

```
const add = (a, b) => a + b;
console.log(add(5, 10)); // 15

```



### Arrow Function এর বৈশিষ্ট্য

#### 1. সংক্ষিপ্ত লেখা ঃ

যদি শুধু return করার জন্য হয়, তবে {} বা return লিখতে হয় না।

```
const square = x => x * x;
console.log(square(5)); // 25

```

#### 2. একটা প্যারামিটার থাকলে ব্র্যাকেট বাদ দেওয়া যায়:

```
const greet = name => "Hello " + name;
console.log(greet("Rahman")); // Hello Rahman 

```





#### 3. কোনো প্যারামিটার না থাকলে অবশ্যই () দিতে হবে:

```
const sayHi = () => "Hi!";
console.log(sayHi()); // Hi!

``` 



---





## Answer no. (4)

### Destructuring Assignment বলতে যা বোঝায় :  

Destructuring হলো array বা object থেকে value গুলো আলাদা করে ভ্যারিয়েবলে নেওয়ার সহজ উপায়। আগে আলাদা আলাদা করে index বা property দিয়ে নিতে হতো, কিন্তু ES6 এ destructuring ব্যবহার করলে অনেক কম কোডে কাজ হয়।



#### Array Destructuring

```
const numbers = [10, 20, 30];

const [a, b, c] = numbers;
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

```
 এখানে [a, b, c] এর ভেতর ক্রমানুসারে array এর value চলে এসেছে।


##### কিছু value বাদ দিতে চাইলে এভাবে ঃ 

```
const [x, , z] = [1, 2, 3];
console.log(x, z); // 1 3

```


#### Object Destructuring


```
const person = {
  name: "Rahman",
  age: 22,
  city: "Dhaka"
};


const { name, age, city } = person;
console.log(name); // Rahman
console.log(age);  // 22
console.log(city); // Dhaka

```

 এখানে { name, age, city } লিখলেই সরাসরি object থেকে value গুলো বের হয়ে এসেছে।




#### Default Value দেওয়া

যদি value না থাকে তবে default দেওয়া যায়।

```
const [a = 1, b = 2] = [10];
console.log(a); // 10
console.log(b); // 2 (কারণ array তে নেই, তাই default ব্যবহার হয়েছে)

const { name, country = "Bangladesh" } = { name: "Rahman" };
console.log(name);    // Rahman
console.log(country); // Bangladesh

```





---






## Answer no. (5)

### Template Literals বলতে যা বোঝায় :

Template Literal হলো ES6 এ আসা একটা নতুন ফিচার। String বানানোর সময় + দিয়ে join করার দরকার হয় না। Instead, আমরা backtick ( ` ) ব্যবহার করি। এর ভেতরে ${expression} লিখে আমরা variable, expression, এমনকি function call-ও বসাতে পারি। 



#### সাধারণ String Concatenation (ES5 style)

```
const name = "Rahman";
const age = 22;

const message = "My name is " + name + " and I am " + age + " years old.";
console.log(message);
// My name is Rahman and I am 22 years old.

```
 
  এখানে প্রতিবার + দিয়ে join করতে হচ্ছে। কোড অনেকটা ঝামেলাপূর্ণ।



#### Template Literal (ES6 style)

```
const name = "Rahman";
const age = 22;

const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
// My name is Rahman and I am 22 years old.

```
 
  এখানে + দরকার হয়নি। সরাসরি ${ } এর মধ্যে ভ্যারিয়েবল বা expression বসানো গেছে।




#### Multi-line String


ES6 Template Literal এ

```

const text = `It's our day 1
It's our day 2
It's our day 3`;
console.log(text);

```

Template Literal ব্যবহার করলে multi-line string অনেক সহজে লেখা যায়।




#### Expression এবং Function Call করা যায়

```

const a = 10;
const b = 20;

console.log(`Sum is ${a + b}`); // Sum is 30




function greet(name) {
  return `Hello, ${name}`;
}
console.log(`${greet("Rahman")}`); // Hello, Rahman

``` 



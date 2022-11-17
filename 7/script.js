class Worker{
    name;
    surname;
    rate;
    days
    constructor(name,surname,rate,days){
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }

    getSalary() { return this.rate * this.days; }
        
}

const worker = new Worker ('arsen','ismailov',50,30);

console.log(worker.name)
console.log(worker.surname)
console.log(worker.rate)
console.log(worker.days)
console.log(worker.getSalary());

// Dop task

class MyString {
    constructor() {}
    reverse(str) {
      let reversStr = "";
      for (let i = str.length - 1; i >= 0; i--) {
        reversStr += str[i];
      }
      return reversStr;
    }
    ucFirst(str) {
      let newStr = str[0].toUpperCase() + str.slice(1);
      return newStr;
    }
    ucWords(str) {
      let arr = str.split(" ");
      let strArr = [];
      for (let i = 0; i < arr.length; i++) {
        let a = arr[i];
        let newStr = a[0].toUpperCase() + a.slice(1);
        strArr.push(newStr);
      }
      return strArr.join(" ");
    }
  }
  let str = new MyString();
  console.log(str.reverse("abcde"));
  console.log(str.ucFirst("abcde"));
  console.log(str.ucWords("abcde abcde abcde"));
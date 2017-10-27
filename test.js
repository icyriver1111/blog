
//过滤如下数组，只保留正数，直接在原数组上操作
var arr = [3,1,0,-1,-3,2,-5]
function filter(arr){
  for(i=0;i<arr.length;i++){
    if(arr[i]<=0){
      arr.splice(i,1)
      i--
    }
  }
}
filter(arr)
console.log(arr) // [3,1,2]
//过滤如下数组，只保留正数，原数组不变，生成新数组
var arr = [3,1,0,-1,-3,2,-5]
function filter(arr){
   return arr.filter(function(newArr){
     return newArr>0;
   })
}
var arr2 = filter(arr)
console.log(arr2) // [3,1,2]
console.log(arr)  // [3,1,0,-1,-2,2,-5]

//深拷贝函数，用两种方式实现
//第一种
//判断基本类型
function isBasicType(val){
  if(typeof val === "number" || typeof val==="string"||typeof val==="boolean"||val===null||val===undefined)
  {return true;}
  else
 {return false;}
}
//深度copy
function deepCopy(obj){
var newObj ={};
for(key in obj){
if(obj.hasOwnProperty(key)){
  if(isBasicType(obj[key])){
  newObj[key]=obj[key]
    }
else{
    newObj[key] = deepCopy(obj[key])
    }
  }
 }
  return newObj;
}

//第2种
function jsonCopy(obj){
  return JSON.parse(JSON.stringify(obj));
}


\

//判断一个字符串是回文字符串，如 abcdcba是回文字符串, abcdcbb不是
function isReverseStr(str){
var newStr = str.split('').reverse().join('');
 return  newStr === str? true:false;
 //return  newStr === str
}

var str1 = "abcdcba"
var str2 = "abcddd"
console.log(isReverseStr(str1))  //true
console.log(isReverseStr(str2))  //false

//统计字符串里出现出现频率最多的字符
var str="hello world do you do you do you"
var dict ={}
for(var i = 0; i<str.length;i++){
  if (dict[str[i]]){
    ++dict[str[i]]
   }else{
     dict[str[i]]=1
   }
}
var count = 0
var maxValue
for(key in dict){
  if(dict[key]>count){
    maxValue = key;
    count = dict[key]
  }
}
console.log(maxValue, count)
//写一个camelize函数，把my-short-string形式的字符串转化成myShortString形式的字符串，如
camelize("background-color") == 'backgroundColor'
camelize("list-style-image") == 'listStyleImage'
function camelize(str){
   var arr= str.split("-")
   for(var i=1;i<arr.length;i++){
   arr[i]= arr[i][0].toUpperCase()+arr[i].substr(1)
   }
   return arr.join("")
}
var str1 = camelize("background-color")
str1
//"backgroundColor"
//ucFirst函数，返回第一个字母为大写的字符 （***）
ucFirst("hunger") == "Hunger"
function ucFirst(str){
  return str[0].toUpperCase()+str.substr(1)
}
//写一个函数truncate(str, maxlength), 如果str的长度大于maxlength，会把str截断到maxlength长，并加上...，如
truncate("hello, this is hunger valley,", 10) == "hello, thi...";
truncate("hello world", 20) == "hello world"
function truncate(str,maxlength){
  var newStr = ''
  if (str.length>maxlength){
    newStr = str.slice(0, maxlength)+"..."
    }else{
      newStr = str
    }
    return newStr
}

//随机整数 含min，不含max
function getRandomInt1(min,max){
  return Math.floor(Math.random()*(max-min))+min
}

//随机整数 含min，含max
function getRandomInt1(min,max){
  return Math.floor(Math.random()*(max-min+1))+min
}

//写一个函数，生成一个长度为 n 的随机字符串，字符串字符的取值范围包括0到9，a到 z，A到Z。
function getRandomInt1(min,max){
  return Math.floor(Math.random()*(max-min))+min;
}

function getRandStr(len){
  var dict = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var str = ''
  for(var i =0;i<len;i++){
   str  += dict[getRandomInt1(0,62)]
  }
  return str
}
var str = getRandStr(10); // 0a3iJiRZap

//生成一个随机 IP 地址，一个合法的 IP 地址为 0.0.0.0~255.255.255.255

function getRandomInt1(min, max){
  return Math.floor(Math.random()*(max-min))+min;
}

function getRandIP(){
  var arr=[]
  for(i=0 ;i<4;i++){
    arr.push(getRandomInt1(0,256))
  }
  return arr.join('.')
}
var ip = getRandIP()
console.log(ip) // 10.234.121.45

//生成一个随机颜色字符串，合法的颜色为#000000~ #ffffff
function getRandomInt1(min, max){
  return Math.floor(Math.random()*(max-min))+min;
}

function getRandColor(){
  var dict ='0123456789abcdef'
  var col = ''
  for(i=0;i<6;i++){
   col += dict[getRandomInt1(0,16)]
  }
  return '*'+col
}
var color = getRandColor()
console.log(color)   // #3e2f1b


//判断几率做事情
if(Math.random()>0.5){
  console.log('a')
}else{
  console.log('b')
}


function isPositive(n){
  return  n>0 && typeof n==="number"
}


function filterPositive(arr){
     return arr.filter(isPositive)
}
var arr = [3, -1,  2,  '饥人谷', true]
var newArr = filterPositive(arr)
console.log(newArr) //[3, 2]
console.log(arr)

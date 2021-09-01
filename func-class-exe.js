//1//
function checkingNums(num1 , num2) {
return checking = num1 === num2
} 
checkingNums(4,4)

//2//
function checkingNums2(num1,num2){
    return checking2 = num1 > num2
}
checkingNums2(7,8)

//3//
function checkingNums3(num1,num2) {
    if (num1 % 2=== 0){
return true;
    }
    else{
        return false;
    }
}
checkingNums3(7)

//4//
function checkingNums4(num1,num2) {
    if (num1 % 2!= 0){
return true;
    }
    else{
        return false;
    }
}
checkingNums4(7)

//5//
function createObject(fname,lname,age) {
    return {
           FirstName: fname,
           LastName: lname,
           ageOfPerson: age 
        }
}
createObject("ariel","yankilevich",23)

//6//
function returnObject(nameOfObject) {
    return nameOfObject.name
}
returnObject({name:"ariel"})

//7//
function createTwoObjecsts(object1,object2) {
    if (object1.name === object2.name){
    return true }
    else {
        return false
    }}
createTwoObjecsts ({name:"ariel"},{name:"eran"})

//8//
function shownames(name1, name2) {
    return function(){
            console.log(name1.name + " and " + name2.name)
    }
}
let printMyNames = shownames({name:"ariel"}, {name:"eran"});
printMyNames();

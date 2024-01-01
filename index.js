let termperformanceIndex;
let academicCoreSubjects;
let emptyBox;

const buttonFirst   =   $(".b1");
const buttonSecond  =   $(".b2");
const buttonThird   =   $(".b3");

const studentName   = $("#student-name");
const studentAge    = $("#student-age");
const studentGender = $("#student-gender");


const academicFirstTerm   = $("#academic-first-term");
const academicSecondTerm  = $("#academic-second-term");
const academicThirdTerm   = $("#academic-third-term");

const subjectMathematics     = $("#subject-mathematics");
const subjectEnglishLanguage = $("#subject-english-language");
const subjectIntScience      = $("#subject-int-science");

const promotionStatus     = $("#promotion-status");
const promotionPosition   = $("#promotion-position");
const promotionEnrollment = $("#promotion-enrollment");


const studentInfo = [
    {
        name: "Christopher Wiafe Debrah",
        age: 27,
        gender: "Male",
        performanceTerm: [0, 1, 1 ],
        performanceSubject: [10, 6, 7 ],
        nextLevel : [promotedStatus, classPosition, totalStudents],
    },
    {
        name: "Keziah Wiafe Debrah",
        age: 27,
        gender: "Female",
        performanceTerm: [1, 11, 1 ],
        performanceSubject: [1, 6, 17 ],
        nextLevel : [promotedStatus, classPosition, totalStudents],
    },
    {
        name: "Daasebere Dwamena",
        age: 34,
        gender: "Male",
        performanceTerm: [1, 0, 4],
        performanceSubject: [1,1, 1],
        nextLevel : [promotedStatus, classPosition, totalStudents],
    },
    {
        name: "Emmanuella Dwamena",
        age: 17,
        gender: "Female",
        performanceTerm: [4, 91, 1],
        performanceSubject: [2, 9, 1],
        nextLevel : [promotedStatus, classPosition, totalStudents],
    },
    {
        name: "Helpsolina Asante",
        age: 47,
        gender: "Female",
        performanceTerm: [ -4, 29, 0],
        performanceSubject: [0, 56, 49],
        nextLevel : [promotedStatus, classPosition, totalStudents],
    }
]
// console.log("Zeroth person: "+studentInfo[0].name);
// console.log("First person: "+studentInfo[1].name);
// console.log("Second person: "+studentInfo[2].name);
// console.log("Third person: "+studentInfo[3].name);
// console.log("Fourth person: "+studentInfo[4].name);

function fillFormWithLearnerInfo(learner){
  studentName.text(studentInfo[learner].name)
  studentAge.text(studentInfo[learner].age);
  studentGender.text(studentInfo[learner].gender);

  academicFirstTerm.text(studentInfo[learner].performanceTerm[0])
  academicSecondTerm.text(studentInfo[learner].performanceTerm[1])
  academicThirdTerm.text(studentInfo[learner].performanceTerm[2])
  
  subjectMathematics.text(studentInfo[learner].performanceSubject[0])
  subjectEnglishLanguage.text(studentInfo[learner].performanceSubject[1])
  subjectIntScience.text(studentInfo[learner].performanceSubject[2])

}
 

function academicYearResults (){
    let students = studentInfo.length;
    let academicPerformance = [];
    let indexCounter = 0;
    while(indexCounter < students){

    let totalTermPerformance = 0;
    let averageTermPerformance = 0;
    
    let personOne = studentInfo[indexCounter].performanceTerm;
    if(personOne.length > 0){
        for(let i = 0; i < personOne.length; i++){
            totalTermPerformance += personOne[i] ;
            averageTermPerformance = Math.floor(totalTermPerformance / personOne.length);
        }
    }
    indexCounter++;
    academicPerformance.push(averageTermPerformance); 
} 
  return academicPerformance;
}

function coreSubjects (){
    let students = studentInfo.length;
    academicCoreSubjects = [];
    let indexCounter = 0;
    while(indexCounter < students){

    let totalCoreSubjectPerformance = 0;
    let averageCoreSubjectPerformance = 0;
    
    let learner = studentInfo[indexCounter].performanceSubject;
    if(learner.length > 0){
        for(let i = 0; i < learner.length; i++){
            totalCoreSubjectPerformance += learner[i];
            averageCoreSubjectPerformance = Math.floor(totalCoreSubjectPerformance / learner.length);
        }
    }
    indexCounter++;
    academicCoreSubjects.push(averageCoreSubjectPerformance); 
}
  return academicCoreSubjects;
}

let academicYrperformance = academicYearResults();
let academicCoreSubject = coreSubjects();

function finalOverAllPerformance (){
    let finalOverAllHolder = [];
    let academicCS = academicCoreSubject.length;
    let finalOverAllHolderResult;
    for( let i = 0; i < academicCS; i++){
        finalOverAllHolderResult = academicCoreSubject[i] + academicYrperformance[i];
        console.log(academicYrperformance[i]);
        console.log(academicCoreSubject[i]);
        finalOverAllHolder.push(finalOverAllHolderResult);   
    }
    return finalOverAllHolder;
}

let finalOverAllAcademicPerformance = finalOverAllPerformance();
console.log(finalOverAllAcademicPerformance);


buttonFirst.on("click", function(){
   let studentIndexInfo = (finalOverAllAcademicPerformance.indexOf(Math.max(...finalOverAllAcademicPerformance)));
   fillFormWithLearnerInfo(studentIndexInfo);
});

function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] < largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }

  buttonSecond.on("click", function (){
    let secondButtonPressed = finalOverAllAcademicPerformance.indexOf(findSecondLargest(finalOverAllAcademicPerformance));
    fillFormWithLearnerInfo(secondButtonPressed);

  });

function findThirdLargest(arr) {
    let firstLargest = arr[0];
    let secondLargest = arr[1];
    let thirdLargest = -Infinity;
    
  for (let i = 2; i < arr.length; i++) {
      if (arr[i] > firstLargest && arr[i] > secondLargest) {
        thirdLargest = firstLargest;
        firstLargest = arr[i];
        if(thirdLargest > secondLargest){
          emptyBox = thirdLargest;
          thirdLargest = secondLargest;
          secondLargest = emptyBox;
        }
      }
      else if ( arr[i] > firstLargest && arr[i] < secondLargest){
          thirdLargest = firstLargest;
          firstLargest = secondLargest;
          secondLargest = arr[i];
      }

      else if (arr[i] < firstLargest && arr[i] > secondLargest){
        thirdLargest = secondLargest;
        secondLargest = arr[i];
      }
      else if (arr[i] < firstLargest && arr[i] < secondLargest){
        thirdLargest = arr[i];
      }
      
      else {
        console.log("more logics to be done");
      }
      
    }
    return thirdLargest;
  }

  buttonThird.on("click", function (){
    let thirdButtonPressed = finalOverAllAcademicPerformance.indexOf(findThirdLargest(finalOverAllAcademicPerformance));
    fillFormWithLearnerInfo(thirdButtonPressed);
  });





















function promotedStatus (){

}
function classPosition (){

}
function totalStudents (){

}
let termperformanceIndex;

// buttons mapped with on HTML 
const buttonFirst   =   $(".b1");
const buttonSecond  =   $(".b2");
const buttonThird   =   $(".b3");

const studentName   = $("#student-name");
const studentAge    = $("student-age");
const studentGender = $("student-gender");


const academicFirstTerm   = $("#academic-first-term");
const academicSecondTerm  = $("#academic-second-term");
const academicThirdTerm   = $("#academic-third-term");

const subjectMathematics     = $("#subject-mathematics");
const subjectEnglishLanguage = $("subject-english-language");
const subjectIntScience      = $("subject-int-science");

const promotionStatus     = $("#promotion-status");
const promotionPosition   = $("promotion-position");
const promotionEnrollment = $("promotion-enrollment");


const studentInfo = [
    {
        name: "Christopher Wiafe Debrah",
        age: 27,
        gender: "Male",
        performanceTerm: [80, 43, 34 ],
        performanceSubject: [90, 56, 87 ],
        nextLevel : [promotedStatus, classPosition, totalStudents],
    },
    {
        name: "Daasebere Dwamena",
        age: 17,
        gender: "Male",
        performanceTerm: [90, 43, 39],
        performanceSubject: [100, 76, 7],
        nextLevel : [promotedStatus, classPosition, totalStudents],
    }
]

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
    console.log("Average term performance for person "+ studentInfo[indexCounter]["name"] +" is: "+ averageTermPerformance);
    indexCounter++;
    academicPerformance.push(averageTermPerformance); 
}
console.log(academicPerformance);
}
function coreSubjects (){
    let students = studentInfo.length;
    let academicCoreSubjects = [];
    let indexCounter = 0;
    while(indexCounter < students){

    let totalCoreSubjectPerformance = 0;
    let averageCoreSubjectPerformance = 0;
    
    let learner = studentInfo[indexCounter].performanceSubject;
    if(learner.length > 0){
        for(let i = 0; i < learner.length; i++){
            totalCoreSubjectPerformance += learner[i] ;
            averageCoreSubjectPerformance = Math.floor(totalCoreSubjectPerformance / learner.length);
        }
    }
    console.log("Average Core subjects performance for person "+ studentInfo[indexCounter]["name"] +" is: "+ averageCoreSubjectPerformance);
    indexCounter++;
    academicCoreSubjects.push(averageCoreSubjectPerformance); 
}
console.log(academicCoreSubjects);
}

academicYearResults();
coreSubjects();




function promotedStatus (){

}
function classPosition (){

}
function totalStudents (){

}
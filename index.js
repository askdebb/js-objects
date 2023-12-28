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


studentInfo = [
    {
        name: "Christopher Wiafe Debrah",
        age: 27,
        gender: "Male",
        performanceTerm: [80, 43, 34],
        performanceSubject: [90, 56, 87],
        promotingStatus : [firstPerson],
        nextLevel : [promotedStatus, classPosition, totalStudents],
    }
]

function firstPerson (t){
    // termperformanceIndex = 0

    let totalTermPerformance = 0;
    let averageTermPerformance = 0;
    // let personOne = studentInfo[termperformanceIndex].performanceTerm;
    let personOne = studentInfo[t].performanceTerm;
    if(personOne.length > 0){
        for(let i = 0; i < personOne.length; i++){
            totalTermPerformance += personOne[i] ;
            averageTermPerformance = Math.floor(totalTermPerformance / personOne.length);
        }
    }
    console.log("Average term performance for person 1 is: "+ averageTermPerformance);
    return averageTermPerformance;
}

function performance(){

}

console.log("first person mark: "+studentInfo[0].promotedStatus);
let h = firstPerson(studentInfo[0]);
console.log(h);





function promotedStatus (){

}
function classPosition (){

}
function totalStudents (){

}
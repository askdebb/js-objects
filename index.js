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

function firstPerson (){
    let students = studentInfo.length;
    let academicPerformance = [];
    let i = 0;
    while(i < students){
    // termperformanceIndex = i;
    let totalTermPerformance = 0;
    let averageTermPerformance = 0;
    
    let personOne = studentInfo[i].performanceTerm;
    if(personOne.length > 0){
        for(let i = 0; i < personOne.length; i++){
            totalTermPerformance += personOne[i] ;
            averageTermPerformance = Math.floor(totalTermPerformance / personOne.length);
        }
    }
    console.log("Average term performance for person "+ studentInfo[i]["name"] +" is: "+ averageTermPerformance);
    i++;
    academicPerformance.push(averageTermPerformance);
   
}


console.log(academicPerformance);
}

firstPerson();




function promotedStatus (){

}
function classPosition (){

}
function totalStudents (){

}
/*
 Task:
 Write a function named `setAlarm` that determines whether you need to set an alarm.

 Parameters:
 - `employed`: A boolean that is true if you are employed.
 - `vacation`: A boolean that is true if you are on vacation.

 Rules:
 - Return `true` if you are employed and not on vacation.
 - Return `false` in all other cases.

 Examples:
 employed | vacation | Output
 ---------|----------|-------
   true   |   true   | false  (you are employed but on vacation)
   true   |   false  | true   (you are employed and not on vacation)
   false  |   true   | false  (you are not employed, regardless of vacation status)
   false  |   false  | false  (you are not employed, regardless of vacation status)
*/

function setAlarm(employed, vacation){
    return (employed && !vacation);
}

console.log(setAlarm(true, true))
console.log(setAlarm(true, false))
console.log(setAlarm(false, true))
console.log(setAlarm(false,  false))
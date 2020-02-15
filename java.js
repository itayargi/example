
// הגדרת מערכים לחישוב וניתוח הנתונים שהוכנסו
var str1="";
var str2="";
var actionAll="";
// מונע מהמשתמש להכניס נתונים (אותיות או מספרים) למחשבון דרך המקלדת
// ניתו להכניס נתונים דרך האתר בלבד
function onlyNumbers(input){
    var ex1=/[^a-z]/gi;
    var ex2=/[^0-9]/gi;
    input.value=input.value.replace(ex1,"");
    input.value=input.value.replace(ex2,"");
}

function clear1(){
    document.getElementById('action').innerHTML="";
    document.getElementById('secondstr').innerHTML="";
    document.getElementById('answer').value="";
    str1="";
    str2=0;
}
// הגדרת הכפתורים למספרים
function num1(){
    str1+=1;
    document.getElementById('answer').value+=1;
}
function num2(){
    str1+=2;
    document.getElementById('answer').value+=2;
}
function num3(){
    str1+=3;
    document.getElementById('answer').value+=3;
}
function num4(){
    str1+=4;
    document.getElementById('answer').value+=4;
}
function num5(){
    str1+=5;
    document.getElementById('answer').value+=5;
}
function num6(){
    str1+=6;
    document.getElementById('answer').value+=6;
}
function num7(){
    str1+=7;
    document.getElementById('answer').value+=7;
}
function num8(){
    str1+=8;
    document.getElementById('answer').value+=8;
}
function num9(){
    str1+=9;
    document.getElementById('answer').value+=9;
}
function num0(){
    str1+=0;
    document.getElementById('answer').value+=0;
}
// פעולת הכפל
// בודק איזו פעולה קיימת במערך (כפל, חילוק, חיבור או חיסור ומבצע את הפעולה)
function numStar(){
    if(document.getElementById('secondstr').innerHTML=="" && document.getElementById('answer').value==""){
        alert('Error, please enter a number first');
        return;
    }
    // בודק אם מדובר בפעולה ראשונה במחשבון ואז מכניס נתונים למערכים
    if(document.getElementById('action').innerHTML!=="" && document.getElementById('answer').value==""){
        document.getElementById('action').innerHTML='*';
        actionAll='*';
        return;
    }
    if(str2==""){
        actionAll='*';
        document.getElementById('action').innerHTML='*';
        // פעולה שמבטלת את הפסיק במספרים ארוכים ומכניסה למערך את המספר בלבד
        str1=str1.replace(/,/g , '');
        str2=parseFloat(str1);
        str1="";
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
    }
    // אם לא מדובר בפעולה ראשונה, אז תבדוק מה הפעולה שקיימת במערך ותבצע אותה
    else if(document.getElementById('action').innerHTML=='*'){
        str1=str1.replace(/,/g , '');
        str2*=parseFloat(str1);
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
        str1="";
        document.getElementById('action').innerHTML='*';
        actionAll='*';
    }
    else if(document.getElementById('action').innerHTML=='+'){
        str1=str1.replace(/,/g , '');
        str2+=parseFloat(str1);
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
        str1="";
        document.getElementById('action').innerHTML='*';
        actionAll='*';

    }
    else if(document.getElementById('action').innerHTML=='-'){
        str1=str1.replace(/,/g , '');
        str2-=parseFloat(str1);
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
        str1="";
        document.getElementById('action').innerHTML='*';
        actionAll='*'; 
    }
    else if(document.getElementById('action').innerHTML=='/'){
        str1=str1.replace(/,/g , '');
        if(document.getElementById('answer').value==0){
            alert('Can not devide with Zero');
            return;
        }
        str2/=parseFloat(str1);
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
        str1="";
        document.getElementById('action').innerHTML='*';
        actionAll='*';
    }
}
// פעולת החיבור
// בודק איזו פעולה קיימת במערך (כפל, חילוק, חיבור או חיסור ומבצע את הפעולה)
function plus1(){
    if(document.getElementById('secondstr').innerHTML=="" && document.getElementById('answer').value==""){
        alert('Error, please enter a number first');
        return;
    }
    if(document.getElementById('action').innerHTML!=="" && document.getElementById('answer').value==""){
        document.getElementById('action').innerHTML='+';
        actionAll='+';
        return;
    }
    if(str2==0){
        actionAll='+';
        document.getElementById('action').innerHTML='+';
        str1=str1.replace(/,/g , '');
        str2=parseFloat(str1);
        str1="";
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
    }
    else if(document.getElementById('action').innerHTML=='*'){
        str1=str1.replace(/,/g , '');
        str2*=parseFloat(str1);
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
        str1="";
        document.getElementById('action').innerHTML='+';
        actionAll='+';
    }
    else if(document.getElementById('action').innerHTML=='+'){
        str1=str1.replace(/,/g , '');
        str2+=parseFloat(str1);
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
        str1="";
        document.getElementById('action').innerHTML='+';
        actionAll='+';

    }
    else if(document.getElementById('action').innerHTML=='-'){
        str1=str1.replace(/,/g , '');
        str2-=parseFloat(str1);
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
        str1="";
        document.getElementById('action').innerHTML='+';
        actionAll='+'; 
    }
    else if(document.getElementById('action').innerHTML=='/'){
        if((document.getElementById('answer').value==0 || parseFloat(str1)==0 || str1=="0") && actionAll=='/'){
            alert('Error, can not devide with zero')
            document.getElementById('answer').value="";
            str1="";
            return;
        }
        str1=str1.replace(/,/g , '');
        str2/=parseFloat(str1);
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
        str1="";
        document.getElementById('action').innerHTML='+';
        actionAll='+';
    }
}
// פעולת החילוק
// בודק מה קיים במערך הפעולה (כפל, חילוק, חיבור או חיסור ומבצע את הפעולה)
function devid(){
    if(document.getElementById('secondstr').innerHTML=="" && document.getElementById('answer').value==""){
        alert('Error, please enter a number first');
        return;
    }
    
    
    if(document.getElementById('action').innerHTML!=="" && document.getElementById('answer').value==""){
        document.getElementById('action').innerHTML='/';
        actionAll='/';
        return;
    }
    if(str2==0){
        actionAll='/';
        document.getElementById('action').innerHTML='/';
        str1=str1.replace(/,/g , '');
        str2=parseFloat(str1);
        str1="";
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
    }
    else if(document.getElementById('action').innerHTML=='*'){
        str1=str1.replace(/,/g , '');
        str2*=parseFloat(str1);
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
        str1="";
        document.getElementById('action').innerHTML='/';
        actionAll='/';
    }
    else if(document.getElementById('action').innerHTML=='+'){
        str1=str1.replace(/,/g , '');
        str2+=parseFloat(str1);
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
        str1="";
        document.getElementById('action').innerHTML='/';
        actionAll='/';

    }
    else if(document.getElementById('action').innerHTML=='-'){
        str1=str1.replace(/,/g , '');
        str2-=parseFloat(str1);
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
        str1="";
        document.getElementById('action').innerHTML='/';
        actionAll='/'; 
    }
    else if(document.getElementById('action').innerHTML=='/'){
        str1=str1.replace(/,/g , '');
        if(document.getElementById('answer').value==0){
            alert('Can not devide with Zero');
            return;
        }
        str2/=parseFloat(str1);
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
        str1="";
        document.getElementById('action').innerHTML='/';
        actionAll='/';
    }
}
// פעולת החיסור
// בודק מה קיים במערך הפעולה (כפל, חילוק, חיבור או חיסור ומבצע את הפעולה)
function minus(){
    if(document.getElementById('secondstr').innerHTML=="" && document.getElementById('answer').value==""){
        alert('Error, please enter a number first');
        return;
    }
    
    if(document.getElementById('action').innerHTML!=="" && document.getElementById('answer').value==""){
        document.getElementById('action').innerHTML='-';
        actionAll='-';
        return;
    }
    if(str2==0){
        actionAll='-';
        document.getElementById('action').innerHTML='-';
        str1=str1.replace(/,/g , '');
        str2=parseFloat(str1);
        str1="";
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
    }
    else if(document.getElementById('action').innerHTML=='*'){
        str1=str1.replace(/,/g , '');
        str2*=parseFloat(str1);
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
        str1="";
        document.getElementById('action').innerHTML='-';
        actionAll='-';
    }
    else if(document.getElementById('action').innerHTML=='+'){
        str1=str1.replace(/,/g , '');
        str2+=parseFloat(str1);
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
        str1="";
        document.getElementById('action').innerHTML='-';
        actionAll='-';

    }
    else if(document.getElementById('action').innerHTML=='-'){
        str1=str1.replace(/,/g , '');
        str2-=parseFloat(str1);
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
        str1="";
        document.getElementById('action').innerHTML='-';
        actionAll='-'; 
    }
    else if(document.getElementById('action').innerHTML=='/'){
        if(document.getElementById('answer').value==0 && actionAll=='/'){
            alert('Error, can not devide with zero')
            document.getElementById('answer').value="";
            str1="";
            return;
        }
        str1=str1.replace(/,/g , '');
        str2/=parseFloat(str1);
        document.getElementById('secondstr').innerHTML=commaNum(str2);
        document.getElementById('answer').value="";
        str1="";
        document.getElementById('action').innerHTML='-';
        actionAll='-';
    }
}
// פעולת השווה
// בודק מה קיים במערך הפעולה (כפל, חילוק, חיבור או חיסור ומבצע את הפעולה)
function sum(){
    if(str2==0 || document.getElementById('secondstr')==""){
        return;
    }
    if(document.getElementById('answer').value=="0" && document.getElementById('action').innerHTML=='/'){
        alert('Error, can not devide with zero')
        document.getElementById('answer').value="";
        str1="";
        return
    }
    if(str1=="" || document.getElementById('answer').value==""){
        document.getElementById('answer').value=commaNum(str2);
    }
    else{
        if(actionAll=='*'){
            document.getElementById('answer').value=commaNum(str2*parseFloat(str1));
            
        }
        if(actionAll=='+'){
            document.getElementById('answer').value=commaNum(str2+parseFloat(str1));
            }
        if(actionAll=='-'){
                document.getElementById('answer').value=commaNum(str2-parseFloat(str1));
        }
        if(actionAll=='/'){
            if(document.getElementById('answer').value==0){
                alert('Can not devide with Zero');
                return;
            }
            document.getElementById('answer').value=commaNum(str2/parseFloat(str1));
            }
    }
    
    document.getElementById('secondstr').innerHTML="";
    document.getElementById('action').innerHTML="";
    str2="";
    str1=document.getElementById('answer').value;


}

// פונקציה ששמה פסיק במיקום הנכון במספר ארוך לדוגמא 1,000
function commaNum(x){
var parts= x.toString().split(".");
parts[0]= parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
return parts.join(".");
}


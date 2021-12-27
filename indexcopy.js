var collectButtons = document.querySelectorAll('.grid-item');
var buttonInput1 ='';
var buttonInput2='';
var storeOperator=[];
var flag=true;
var result=[];

for (var i = 0; i < collectButtons.length; i++) {
  var re = /^[0-9,.]*$/;
document.querySelectorAll('.grid-item')[i].addEventListener('click', function() {
  var buttonInnerHTML=this.innerHTML;
      if(!flag && re.test(buttonInnerHTML) ){
      buttonInput2+=buttonInnerHTML;
      console.log('coming3:'+buttonInput2);
      document.querySelector('.digitBox').innerHTML=buttonInput2;
    }else if(!flag && buttonInnerHTML=== '=' && buttonInput2.length!=0 && buttonInput1.length===0){
        calMultiplyNumbers(result[result.length-1],Number(buttonInput2),storeOperator[storeOperator.length-1]);
        console.log('coming5:'+result);
        document.querySelector('.digitBox').innerHTML= result[result.length-1];
        buttonInput1='';
        buttonInput2='';
        storeOperator=[];
        result=[];
        flag=true;
      }else if(!flag && buttonInnerHTML=== '=' && buttonInput1.length!=0 && buttonInput2.length!=0 ){
          calMultiplyNumbers(Number(buttonInput1),Number(buttonInput2),storeOperator[storeOperator.length-1]);
          console.log('coming5.1:'+result);
          document.querySelector('.digitBox').innerHTML= result[result.length-1];
          buttonInput1='';
          buttonInput2='';
          storeOperator=[];
          result=[];
          flag=true;
        }else if(!flag && buttonInnerHTML=== '=' && result.length!=0 && storeOperator[storeOperator.length-2]!='='){
        console.log('coming7');
        calculations(result[result.length-1],storeOperator[storeOperator.length-2]);
        buttonInput1='';
        buttonInput2='';
        storeOperator=[];
        result=[];
        flag=true;
      }else if(!flag && buttonInnerHTML!='=' && result.length=== 0){
        storeOperator.push(buttonInnerHTML);
        console.log('coming8:'+Number(buttonInput1),Number(buttonInput2),storeOperator[storeOperator.length-2]);
        calMultiplyNumbers(Number(buttonInput1),Number(buttonInput2),storeOperator[storeOperator.length-2]);
        document.querySelector('.digitBox').innerHTML=result[result.length-1];
        buttonInput1='';
        buttonInput2='';
      }else if(!flag && buttonInnerHTML!='='&& result.length!=0 && buttonInput2.length!=0){
        console.log('coming9');
          storeOperator.push(buttonInnerHTML);
          calMultiplyNumbers(result[result.length-1],Number(buttonInput2),storeOperator[storeOperator.length-2]);
          document.querySelector('.digitBox').innerHTML=result[result.length-1];
          buttonInput2='';
      }else if(!flag && buttonInnerHTML=== '='&& result.length!=0){
        console.log('coming10');
        calMultiplyNumbers(result[result.length-1],result[result.length-1],storeOperator[storeOperator.length-1]);
        document.querySelector('.digitBox').innerHTML=result[result.length-1];
        buttonInput1='';
        buttonInput2='';
        storeOperator=[];
        flag=true;
        result=[];
      }else if(flag=true && re.test(buttonInnerHTML)){
      console.log('coming1:'+buttonInnerHTML);

        buttonInput1+=buttonInnerHTML;


      document.querySelector('.digitBox').innerHTML=buttonInput1;
    }else if(flag=true && !re.test(buttonInnerHTML)){
      console.log('coming2:'+buttonInnerHTML);
      document.querySelector('.digitBox').innerHTML=buttonInput1;
      storeOperator.push(buttonInnerHTML);
      flag=false;
      if(buttonInnerHTML==='='&& storeOperator.length===0 && buttonInput2.length===0){
        calculations(buttonInput1,'=');
        buttonInput1='';
        buttonInput2='';
        storeOperator=[];
        flag=true;
      }else if(buttonInnerHTML==='='&& storeOperator.length!=0 && buttonInput2.length===0){
        console.log('coming2.2:');
        calculations(buttonInput1,storeOperator[storeOperator.length-2]);
        buttonInput1='';
        buttonInput2='';
        storeOperator=[];
        flag=true;
      }
    }
    if(buttonInnerHTML==='DEL'|| buttonInnerHTML==='RESET'){
      document.querySelector('.digitBox').innerHTML=0;
      buttonInput1='';
      buttonInput2='';
      storeOperator=[];
      result=[];
      flag=true;
    }
})
}

 function calculations(digits,operator){
  if(operator==='+'){
    document.querySelector('.digitBox').innerHTML=digits*2;
  }else if(operator==='-'){
    document.querySelector('.digitBox').innerHTML=0;
  }else if (operator==='x') {
    document.querySelector('.digitBox').innerHTML=digits*digits;
  }else if(operator==='/'){
    document.querySelector('.digitBox').innerHTML=(digits)/(digits);
  }else if(operator==='DEL'){
    document.querySelector('.digitBox').innerHTML=0;
  }else if(operator==='RESET'){
    document.querySelector('.digitBox').innerHTML='';
  }else{
    document.querySelector('.digitBox').innerHTML=digits;
  }
}

function calMultiplyNumbers(digit1,digit2,operator){
  console.log('cominginsidecalMultiplyNumbers:'+digit1,digit2,operator);
  if(operator === '+'){
    result.push(digit1+digit2);
  }else if(operator ==='-'){
    result.push(digit1-digit2);
  }else if (operator==='x') {
    result.push(digit1*digit2);
  }else if(operator==='/'){
    result.push((digit1)/(digit2));
  }
}

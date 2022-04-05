// code your solution here
function saturdayFun(planA = "roller-skate"){
return(`This Saturday, I want to ${planA}!`)
};




function mondayWork( planA = "go to the office"){
        return(`This Monday, I will ${planA}.`)

    }


function wrapAdjective(name = "*") {
        return function (single = "special") {
          return `You are ${name}${single}${name}!`;
        };
      }

      
    








/*

function wrapAdjective(name = "*")  {
    const innerFunction = function (parameter = "special") {
        return innerFunction(`<You are ${parameter}`)
      };
      return wrapAdjective(`<You are ${name}`)
    };
  
  wrapAdjective ("Sergio")("you");

  */
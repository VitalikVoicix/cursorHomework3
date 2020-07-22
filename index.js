const btn1 = document.querySelector(".btn1")
const input1 = document.querySelector(".input1");
const  print1 = document.querySelector(".answer1");
      const input2 = document.querySelector(".input2");
      const input2_2 = document.querySelector(".input2_2");
      const  print2 = document.querySelector(".answer2");
      const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const input3 = document.querySelector(".input3");
const  print3 = document.querySelector(".answer3");
      const input4 = document.querySelector(".input4");
      const input4_4 = document.querySelector(".input4_4");
      const  print4 = document.querySelector(".answer4");
      const btn4 = document.querySelector(".btn4");
const input5 = document.querySelector(".input5");
const input5_5 = document.querySelector(".input5_5");
const  print5 = document.querySelector(".answer5");
const btn5 = document.querySelector(".btn5");
      const input6 = document.querySelector(".input6");
      const input6_6 = document.querySelector(".input6_6");
      const  print6 = document.querySelector(".answer6");
      const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const input7 = document.querySelector(".input7");
const  print7 = document.querySelector(".answer7");
     const btn8 = document.querySelector(".btn8");
     const input8 = document.querySelector(".input8");
     const  print8 = document.querySelector(".answer8");
const input9 = document.querySelector(".input9");
const input9_9 = document.querySelector(".input9_9");
const  print9 = document.querySelector(".answer9");
const btn9 = document.querySelector(".btn9");
     const input10 = document.querySelector(".input10");
     const  print10 = document.querySelector(".answer10");
     const btn10 = document.querySelector(".btn10");
const input11 = document.querySelector(".input11");
const  print11 = document.querySelector(".answer11");
const btn11 = document.querySelector(".btn11");

    //Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 ->
btn1.addEventListener('click',getMaxDigit);
  function getMaxDigit(){
        let biggerNumber = Number(input1.value.toString().split("").sort().pop());
        print1.textContent =`Найбільше число ${biggerNumber}`;
  };
 //Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
    
btn2.addEventListener("click" , pow)
   function pow () {
          let result = input2.value;
          for(let i = 1;i < input2_2.value;i++){
            result*= input2.value; 
            print2.textContent = `Результат ${result}`;
          }
       }
   
    //Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад"
    
btn3.addEventListener('click',transformName);
   function transformName () {
          let upperCaseName = input3.value[0].toUpperCase() + input3.value.slice(1).toLowerCase();
          print3.textContent = `Результат ${upperCaseName}`;
   }
 //Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати
      
btn4.addEventListener("click" ,countMoney )
    function countMoney(){
            let moneyAfterTax = input4.value-(input4.value*(input4_4.value/100));
            print4.textContent = `Ваша зарплата після податків ${moneyAfterTax}` ;
   }
 //Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад:
      
btn5.addEventListener("click" , getRandomNumber)
      function getRandomNumber(){
             let randomNumber = Math.ceil(Math.random()*10)
             if(randomNumber >= input5.value && randomNumber < input5_5.value){ 
             print5.textContent = `Випадкове число ${randomNumber}`;
             }
     }
        
//Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4
      
btn6.addEventListener("click" , countLetter)
    function countLetter(){
           let array = input6_6.value.toLowerCase().split("");
           let array1 = [];
             for(let i = 0;i<array.length;i++){
                if(array[i]===input6.value.toLowerCase()){
                array1.push(array[i])
                }
             } 
            print6.textContent = `Кількість повторювань складає ${array1.length}`;
   }
//Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
         
btn7.addEventListener('click',convertCurrency);
      function convertCurrency(){
                 let hrn = "UAH";
                 let usaMoney = "$"
                    if(input7.value.slice(-1)==="$"){
                         let onlyNumber = input7.value.slice(0,-1)*27;
                         print7.textContent = "Ваша сума складає " +  onlyNumber + hrn;
                    }else if(input7.value.slice(-3).toUpperCase()==hrn){
                        let onlyNumber = input7.value.slice(0,-3)/27;
                        print7.textContent = `Ваша сума складає ${onlyNumber} ${usaMoney}`;
                    }else{
                        print7.textContent = "В нас нема такої валюти,шукайте інший кантор)";
                    }
      }
//Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.

btn8.addEventListener('click',userPassword);
      function userPassword(){
                  if(input8.value){
                     let number = Math.random().toString().slice(3);
                     let password = number.slice(0,input8.value);
                     print8.textContent = `Ваш пароль на сьогодні ${ password}`;
                   }
                  if(!input8.value){
                     let number1 = Math.random().toString().slice(3);
                     let password1 = number1.slice(0,8);
                     print8.textContent = `Ваш пароль на сьогодні ${password1}`;
                   }
      }
//Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"

btn9.addEventListener("click" ,deleteLetters );
      function deleteLetters(){
                let array = input9_9.value.toLowerCase().split("");
                let array1 = [];
                   for(let i = 0;i<array.length;i++){
                       if(array[i]!==input9.value.toLowerCase()){
                         array1.push(array[i])
                       }
                   } 
                 print9.textContent = `Результат ${array1.join("")}`;
      }
     //Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня")

btn10.addEventListener("click" ,isPalyndrom )
      function isPalyndrom(){
               let arr = input10.value.toLowerCase().split("");
               let arr1 = [];
                  for(let i = 0;i<arr.length;i++){
                      if(arr[i]!==" "){
                        arr1.push(arr[i])
                      }
                   }
               let arr2 = input10.value.toLowerCase().split("").reverse();
               arr3 = [];
                  for(let i = 0;i<= arr2.length;i++){
                     if(arr2[i]!==" "){
                       arr3.push(arr2[i])
                     }
                  }
     
                  if( arr1.join('')==arr3.join('') ){
                     print10.textContent = "Ваше слово паліндром ";
                  }else{
                      print10.textContent = "Ваше слово не паліндром";
                  }
      }
//Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
     
btn11.addEventListener("click" , deleteDuplicateLetter);
      function deleteDuplicateLetter(){
              let unique = '';
                  for (let i = 0; i < input11.value.length; i++) {
                      if (input11.value.toLowerCase().lastIndexOf(input11.value.toLowerCase()[i]) == input11.value.toLowerCase().indexOf(input11.value[i].toLowerCase())) {
                         unique += input11.value.toLowerCase()[i];
                      }
                   }
                   print11.textContent = `Результат ${unique}`;
      }
         
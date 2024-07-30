//1.Sadə kalkulyator (SWITCH)

// function OK(x){
//     let input1 = parseFloat(document.getElementsByClassName("input1")[0].value);
//     let input2 = parseFloat(document.getElementsByClassName("input2")[0].value);
//     let r;

//     switch(x.innerHTML){
//         case '+':
//             r = input1+input2
//             alert(r)
//             break

//         case '-':
//             r = input1-input2
//             alert(r)
//             break

//         case '*':
//             r = input1*input2
//             alert(r)
//             break
        
//         case '/':
//             r = input1/input2
//             alert(r)
//             break
//     }
// }

//1.Sadə kalkulyator (if le)

// function OK(x){
//     let input1 = parseFloat(document.getElementsByClassName("input1")[0].value)
//     let input2 = parseFloat(document.getElementsByClassName("input2")[0].value)
    

//     if(x.innerText == "+"){
//         alert(input1+input2)
//     }else if(x.innerText == "-"){
//         alert(input1-input2)
//     }else if(x.innerText == "*"){
//         alert(input1*input2)
//     }else if(x.innerText == "/"){
//         alert(input1/input2)
//     }else {
//         alert("Sehflik var !!!");
        
// }
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2.Inputa daxil edilmiş sözü tərsinə çevirən proqram
// function Tersine(){
//     let ters = document.getElementById("input3").value
//     let r = ''

//     for(let i = ters.length-1; i>=0; i--){
//         r+=ters[i]
//     }
//    alert(r);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3. Divin dizaynını dəyişin
// function OK(){
//     let width = document.getElementById("widthInput").value
//     let height = document.getElementById("heightInput").value
//     let borderWidth = document.getElementById("borderhInput").value;
//     let borderstyle = document.getElementById("borderStyleSelect").value
//     let bordercolor = document.getElementById("borderColorSelect").value
//     let colors = document.getElementById("colorSelect").value
//     let bgcolor = document.getElementById("bgColorSelect").value
//     let borderBox = document.getElementById("border-page");
    

    
//     borderBox.style.width = width + "px";
//     borderBox.style.height = height + "px"
//     borderBox.style.borderWidth = borderWidth + "px";
//     borderBox.style.borderStyle = borderstyle;
//     borderBox.style.borderColor = bordercolor
//     borderBox.style.color=colors
//     borderBox.style.background=bgcolor
// }

////4. Div-in width-i 200 px-dir. Width üçün təyin olunan inputa daxil
//olunan qiymət qədər divi-in width-ni artırın. Məs: inputa 50 daxil
//olunarsa divin width-i 250px olmalıdır


// function OK() {
//     let widthInput = document.getElementById('widthInput').value;
//     let heightInput = document.getElementById("heightInput").value
//     let borderWidth =  document.getElementById("borderhInput").value
//     let borderP = document.getElementById('borderP');
    
//     let w1 = parseInt(borderP.style.width);
//     let w2 = parseInt(widthInput);
//     borderP.style.width = (w1 + w2) + "px";

//     let h1 = parseInt(borderP.style.height);
//     let h2 = parseInt(heightInput);
//     borderP.style.height=(h1+h2) + "px"
    

//     let b1 = parseInt(borderP.style.borderWidth);
//     let b2 = parseInt(borderWidth);
//     borderP.style.borderWidth = (b1+b2) + "px"
// }

// 11. Akordion menu

function OK(x) {
    if(x.nextElementSibling.style.height == "0px"){
        x.nextElementSibling.style.height = "300px"
    
        lickedLi.classList.add('active');
 
      
    
    }else{
        x.nextElementSibling.style.height = "0px"
         
        clickedLi.classList.remove('active');
   
    }
  }   


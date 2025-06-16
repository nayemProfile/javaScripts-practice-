// Event in JavaScript
// onclick event
function subscribe(){
    document.getElementById('btn').innerHTML = 'Subscribed!';
    document.getElementById('text').innerHTML = 'Thanks for Subscribed!';
    document.getElementById('btn').style.backgroundColor = 'red';
};

// onclick event
function like(){
    document.getElementById('btn1').innerHTML = '<i class="fa-solid fa-thumbs-up"></i>  Liked!';
    document.getElementById('text1').innerHTML = 'Thanks for Liked!';
}


/*
// onmouseover event
// onmouseout event
// onfocus event
// onblur event
// onkeydown event
// onkeyup event
// onkeypress event
// onload event
// onresize event
// onscroll event
// onselect event
// onchange event
// onsubmit event
// onreset event
// onerror event
// oncontextmenu event
// ondrag event
// ondragstart event
// ondragend event
// ondragover event
// ondragenter event
// ondragleave event
// ondrop event
// oncopy event
// oncut event
// onpaste event
// onbeforeunload event
// onafterprint event
// onbeforeprint event
// onmessage event
// onstorage event
// onanimationstart event
// online event
// onsearch event
*/


// document.getElementById('button').onclick = function(){
//     document.getElementById('btn').innerHTML = 'Subscribed!😍';
// }

document.getElementById('button').addEventListener('click', function(){
     document.getElementById('button').innerHTML = 'Subscribed!😍';
    })
   



// //keypress event
// function keyPress(){
//     document.getElementById('text2').innerHTML = 'You pressed a key!';
//     document.getElementById('text2').style.color = 'blue';
// }
// //onkeydown event
// // onkeyup event
// // onkeypress event
// function keyDown(){
//     document.getElementById('text3').innerHTML = 'You pressed a key down!';
//     document.getElementById('text3').style.color = 'green';
// }

// // onkeyup event
// function keyUp(){
//     document.getElementById('text4').innerHTML = 'You released a key!';
//     document.getElementById('text4').style.color = 'orange';
// }

// // onfocus event\
// function focusInput(){
//     document.getElementById('btn5').innerHTML = 'Input field is focused!';
//     document.getElementById('btn5').style.color = 'purple';
// }

// // onblur event
// function blurInput(){
//     document.getElementById('btn6').innerHTML = 'Input field lost focus!';
//     document.getElementById('btn6').style.color = 'brown';
// }

// // onload event
// function loadPage(){
//     document.getElementById('text7').innerHTML = 'Page is loaded!';
//     document.getElementById('text7').style.color = 'pink';
// }

// // onresize event
// function resizeWindow(){
//     document.getElementById('btn7').innerHTML = 'Window is resized!';
//     document.getElementById('btn7').style.color = 'cyan';
// }

// // onscroll event
// function scrollPage(){
//     document.getElementById('btn8').innerHTML = 'Page is scrolled!';
//     document.getElementById('btn8').style.color = 'magenta';
// }

// // onselect event
// function selectText(){
//     document.getElementById('btn9').innerHTML = 'Text is selected!';
//     document.getElementById('btn9').style.color = 'lime';
// }

// // onchange event
// function changeInput(){
//     document.getElementById('btn10').innerHTML = 'Input value changed!';
//     document.getElementById('btn10').style.color = 'teal';
// }

// // onsubmit event
// function submitForm(){
//     document.getElementById('btn11').innerHTML = 'Form submitted!';
//     document.getElementById('btn11').style.color = 'navy';
// }

// // onreset event
// function resetForm(){
//     document.getElementById('btn12').innerHTML = 'Form reset!';
//     document.getElementById('btn12').style.color = 'olive';
// }

// // onerror event
// function handleError(){
//     document.getElementById('text14').innerHTML = 'An error occurred!';
//     document.getElementById('text14').style.color = 'red';
// }   

// // oncontextmenu event
// function contextMenu(){
//     document.getElementById('btn13').innerHTML = 'Context menu opened!';
//     document.getElementById('btn13').style.color = 'gray';
// }

// // ondrag event
// function dragElement(){
//     document.getElementById('btn14').innerHTML = 'Element is being dragged!';
//     document.getElementById('btn14').style.color = 'brown';
// }

// // ondragstart event
// function dragStart(){
//     document.getElementById('btn15').innerHTML = 'Drag started!';
//     document.getElementById('btn15').style.color = 'purple';
// }

// // ondragend event
// function dragEnd(){
//     document.getElementById('btn16').innerHTML = 'Drag ended!';
//     document.getElementById('btn16').style.color = 'orange';
// }


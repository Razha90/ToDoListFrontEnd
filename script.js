var chekedBorder = true ;
var borderCheck = document.getElementsByClassName('border-check')[0];
// Border click Paling atas
borderCheck.addEventListener('click' , () => {
    if (chekedBorder == true) {
        chekedBorder = false;
        borderCheck.style.backgroundImage = 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))';
    } else {
        chekedBorder = true ;
        borderCheck.style.backgroundImage = '';
  
    }
});

// give class to span in To Do List
var giveClaseSpan = document.getElementsByClassName('list-todo')[0].querySelectorAll('span');
function razha() {
  giveClaseSpan.forEach(element => {
    var elementImg = document.createElement('img');
    element.appendChild(elementImg);
});
}
razha();



// give src to image
var giveImg = document.getElementsByClassName('list-todo')[0].querySelectorAll('img');
function clicked() { 

    giveImg.forEach(element => {
      if (element == element.src) {} else {
    element.src = './images/icon-check.svg';
      }
});
}
clicked();

// give clicked deleted
var list = document.getElementsByClassName('list-todo')[0];
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'DIV' || ev.target.tagName === 'SPAN' || ev.target.tagName === 'P') {
      ev.target.classList.toggle('checked');
    }
  }, false);


  var myNodelist = document.getElementsByClassName('list-todo')[0].querySelectorAll('div');
// give close button
  for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement('a');
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }

var value1 = document.getElementsByClassName('text-input')[0];
var myNodelist1 = document.getElementsByClassName('list-todo')[0].querySelectorAll('div');

// give enter event to create a new To Do list
value1.addEventListener('keypress', (keys) => {
    if (keys.key === 'Enter') {
      setTimeout(() => {
        value1.value = '';
      }, 500);
      var creDiv = document.createElement('div');
      var creSpa = document.createElement('span');
      var creIma = document.createElement('img');
      var creP = document.createElement('p');
      var t = document.createTextNode(value1.value);
      var span = document.createElement("a");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      creP.appendChild(t);
      creIma.src = './images/icon-check.svg';
      creSpa.appendChild(creIma);
      creDiv.appendChild(creSpa);
      creDiv.appendChild(creP);
      creDiv.appendChild(span);
      creDiv.className = 'problem';
      creDiv.draggable = 'true';
      document.getElementsByClassName('list-todo')[0].appendChild(creDiv);
   
    }
})

var collec = document.getElementsByClassName('checked');

// Active Sorting
function Active() {
  for (let i = 0; i < myNodelist1.length; i++) {
    myNodelist1[i].style.display = "flex";
  }
  for (let i = 0; i < collec.length; i++) {
    collec[i].style.display = "none";
  }
  document.getElementById('score').innerHTML = myNodelist1.length - collec.length;
}


// Complted Sorting
function Completed() {
  for (let i = 0; i < myNodelist1.length; i++) {
    myNodelist1[i].style.display = "none";
  }
  
  for (let i = 0; i < collec.length; i++) {
    collec[i].style.display = "flex";
  }
  document.getElementById('score').innerHTML = collec.length;
}


// All Sorting
function All() {
   for (let i = 0; i < myNodelist1.length; i++) {
    myNodelist1[i].style.display = "flex";
  }
  document.getElementById('score').innerHTML = myNodelist.length;
}
document.getElementById('score').innerHTML = myNodelist.length

// Close Button Remove DIV

var close = document.getElementsByClassName('close');
for (let c = 0; c < close.length; c++) {
  close[c].addEventListener('click', (event, val) => {
    var a = event.currentTarget;
    var b = a.parentElement;
    b.remove();
  })
}

function clear12() {
  for (v = 0; v < collec.length; v++) {
    collec[v].remove();
  }
  return document.getElementById('score').innerHTML = myNodelist.length;

}

var dark = true ;
// drag and drop
document.addEventListener('keypress', (event) => {

  myNodelist.forEach(element => {
    element.draggable = 'true';
    element.className = 'problem';
  });
  
  var dragSrcEl = null;
  
  function handleDragStart(e) {
    this.style.opacity = '0.4';
    
    dragSrcEl = this;
  
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
  }
  
  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
  
    e.dataTransfer.dropEffect = 'move';
    
    return false;
  }
  
  function handleDragEnter(e) {
    this.classList.add('over');
  }
  
  function handleDragLeave(e) {
    this.classList.remove('over');
  }
  
  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }
    
    if (dragSrcEl != this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData('text/html');
    }
    
    return false;
  }
  
  function handleDragEnd(e) {
    this.style.opacity = '1';
    
    items.forEach(function (item) {
      item.classList.remove('over');
    });
  }
  /*
   let items = document.querySelectorAll('.container .box');
items.forEach(function(item) {
  item.addEventListener('dragstart', handleDragStart, false);
  item.addEventListener('dragenter', handleDragEnter, false);
  item.addEventListener('dragover', handleDragOver, false);
  item.addEventListener('dragleave', handleDragLeave, false);
  item.addEventListener('drop', handleDrop, false);
  item.addEventListener('dragend', handleDragEnd, false);
});
   */
  let items = document.getElementsByClassName('problem');

  for (let g = 0; g < items.length; g++) {
    if (items[g].className == 'problem') {
    items[g].addEventListener('dragstart', handleDragStart);
    items[g].addEventListener('dragenter', handleDragEnter);
    items[g].addEventListener('dragover', handleDragOver);
    items[g].addEventListener('dragleave', handleDragLeave);
    items[g].addEventListener('drop', handleDrop);
    items[g].addEventListener('dragend', handleDragEnd);
    }
  }
  });


// change Color
function darkLight() {
  if (dark == true) {
    document.getElementsByClassName('bg-light')[0].style.display = 'none';
    document.getElementsByClassName('bg-dark')[0].style.display = 'block';

    document.getElementsByTagName('body')[0].style.backgroundColor = 'hsl(237, 14%, 26%)';
    document.getElementsByTagName('body')[0].style.color = 'hsl(234, 39%, 85%)';
    
    document.getElementsByClassName('todo-in')[0].style.backgroundColor= 'hsl(233, 14%, 35%)';
    document.getElementsByClassName('text-input')[0].style.backgroundColor= 'hsl(233, 14%, 35%)';
    document.getElementsByClassName('text-input')[0].style.color= 'hsl(234, 39%, 85%)';
    myNodelist.forEach(element => {
      element.style.backgroundColor = 'hsl(233, 14%, 35%)';
      element.style.borderBottom = '1px solid hsl(234, 11%, 52%)';
    });

    document.getElementsByClassName('shadow')[0].style.boxShadow = '1px 80px 14px 13px hsl(231, 15%, 25%)';
  
    document.getElementsByClassName('nav-bottom')[0].style.backgroundColor = 'hsl(233, 14%, 35%';

    document.getElementById('moon').src = './images/icon-sun.svg';

    var prob = document.getElementsByClassName('problem');
    for (let m = 0; m < prob.length; m++) {
      prob[m].style.backgroundColor = 'hsl(233, 14%, 35%)';
      prob[m].style.borderBottom = '1px solid hsl(234, 11%, 52%)';
    }
  
  } else {
    document.getElementsByClassName('bg-light')[0].style.display = 'block';
    document.getElementsByClassName('bg-dark')[0].style.display = 'none';

    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
    document.getElementsByTagName('body')[0].style.color = 'hsl(235, 19%, 35%)';
    
    document.getElementsByClassName('todo-in')[0].style.backgroundColor= 'white';
    document.getElementsByClassName('text-input')[0].style.backgroundColor ='white';
    document.getElementsByClassName('text-input')[0].style.color ='hsl(235, 19%, 35%)';
    myNodelist.forEach(element => {
      element.style.backgroundColor = 'white';
      element.style.borderBottom = '1px solid hsl(0, 0%, 85%)';
    });

    document.getElementsByClassName('shadow')[0].style.boxShadow = '0 1px 10px 0px hsl(0, 1%, 66%)';
  
    document.getElementsByClassName('nav-bottom')[0].style.backgroundColor = 'white';
    
    document.getElementById('moon').src ='./images/icon-moon.svg';

    var prob = document.getElementsByClassName('problem');
    for (let m = 0; m < prob.length; m++) {
      prob[m].style.backgroundColor = 'white';
      prob[m].style.borderBottom = '1px solid hsl(0, 0%, 85%)';
    }
  
  }


  if (dark == true) {
    dark = false;
  } else {
    dark = true;
  }
}
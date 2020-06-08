function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(ev.target.id=="progress"){
        ev.target.appendChild(document.getElementById(data)).style.backgroundColor="orange";
        ev.target.appendChild(document.getElementById(data)).innerHTML="<h2>Progress</h2>"
    }else if(ev.target.id=="resolved"){
        ev.target.appendChild(document.getElementById(data)).style.backgroundColor="lightgreen";
        ev.target.appendChild(document.getElementById(data)).innerHTML="<h2>Resolved</h2>"
    }else{
        ev.target.appendChild(document.getElementById(data)).style.backgroundColor="lightcoral";
        ev.target.appendChild(document.getElementById(data)).innerHTML="<h2>Task</h2>"
    }
  }

  
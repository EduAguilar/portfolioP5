/* Script texto binario */
$(document).ready(function(){
  
    var $randomnbr = $('.nbr');
    var $timer= 50;
    var $it;
    var $data = 0;
    var index;
    var change;
    var letters = ["D", "E", "S", "A", "R", "R", "O", "L", "L", "A", "D", "O", "R"];
    
    $randomnbr.each(function(){
        
      change = Math.round(Math.random()*100);
      $(this).attr('data-change', change);
      
    });
    
    function random(){
      return Math.round(Math.random()*9);
    };
    
    function select(){
      return Math.round(Math.random()*$randomnbr.length+1);
    };
    
    function value(){
      $('.nbr:nth-child('+select()+')').html(''+random()+'');
      $('.nbr:nth-child('+select()+')').attr('data-number', $data);
      $data++;
      
      $randomnbr.each(function(){
          if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))){
            index = $('.ltr').index(this);
            $(this).html(letters[index]);
            $(this).removeClass('nbr');
          }
      });
      
    };
    
    $it = setInterval(value, $timer);
      
  });
/*fin script texto binario */

/* script maquina de escribir */
  const efecto = document.getElementById("maquinaDeEscribir");
  const efecto1 = document.getElementById("maquinaDeEscribir1");
  const efecto2 = document.getElementById("maquinaDeEscribir2");  
  
  const maquinaDeEscribir=( text = "",tiempo = 200,  etiqueta= "" )=>{
      let arrayCaracteres = text.split("");  
      etiqueta.innerHTML = "";
      let cont =0;
      let escribir = setInterval(function(){      
          etiqueta.innerHTML += arrayCaracteres[cont]
          cont++;
          if(cont === arrayCaracteres.length){
              cont =0;
              etiqueta.innerHTML = "-> ";
          }
      },tiempo);
  }
  
  maquinaDeEscribir("Portafolio         ",300, efecto);
  maquinaDeEscribir("Acerca De Mi         ",150, efecto1);
  maquinaDeEscribir("Contáctame         ",150, efecto2);
/*fin script maquina de escribir */
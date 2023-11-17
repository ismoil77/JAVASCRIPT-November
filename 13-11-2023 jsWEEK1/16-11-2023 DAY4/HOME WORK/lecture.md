   <img src="https://habr.com/share/publication/127482/c419de741f88bfef7ac944e5f9e8e8ae/" alt="" srcset="">
    <h1>HOISTING(Поднятие вверх)</h1>
    <h2>Это случается когда мы вызываем, что либо до его создание , но в JavaScript вот эта бесмыслица работает , но имеет два случаи при котором оно работает
    
    1) В Function declaration идеально работает если вызвать функцию до её создания 

    2) В var , но тут работает очень странно , если вызвать его до создания оно выйдет но значение не придёт придёт как "UNDEFINED"

    
   </h2>
    <h1>Не рабочие моменты</h1>


   <h2>В LET , CONST , FUNCTION EXPREESION,FUNCTION EXPRESSION ANONYMOUS,FUNCTION EXPREESION ARROW,FUNCTION IIFE не работает вообще
    
        И выйдет ошибки -->

         1)" inizialiation " TDZ(template dead Zone) временная зона и будет говорить что он есть вызван до создания себя
        

         2) is not difined то есть вариейбл вообще не создан
        
  </h2>


  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--Ceq9cg87--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/kaf11wh85tkhfv1338b4.png" alt="" srcset="">

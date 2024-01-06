<h1>Scope

 (Область видимости)</h1>
 <img src="https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1677183480767%2F41e10aae-6f9b-414f-8282-424fee518df1.png%3Fw%3D1200%26h%3D630%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng">
<h2>Scope - область видимости какого либо элемента то есть работа способность ,и он нужен чтобы код не сделал блок кодов в кашу</h2>
<h2>Бывают 4 вида облатей видимости  (Scope)  

1)Global - самый первый по умолчанию

2)Function - область внутри функции

3)Block - область внутри condition и loop и к ним относят let и const

4)Module - область который блокирует связь js файлами
 </h2>
 <img src="https://www.humaneer.org/static/aee9b48f2215ebd269a1f98f9a915e6d/2bef9/Scope.png">
 <img src="https://images.ctfassets.net/pzhspng2mvip/1d5LNFu1ftEWvcMipQd1GN/0e857b697ae5145af31467e30749586a/2-scope-chain.png">
   -  <img src="https://habr.com/share/publication/127482/c419de741f88bfef7ac944e5f9e8e8ae/" alt="" srcset="">
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

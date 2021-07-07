 "use script";
 
  //1. Изменение цвета иконок в меню сайта
  function startMenu(){   
    let pointMenuLi=document.querySelectorAll('.menu li');

    for(let i=0;i<pointMenuLi.length;i++){
        pointMenuLi[i].addEventListener('mouseenter',mouseenterpointMenu);
    }

    let headerMouse=document.querySelectorAll('.mouse');
    headerMouse[0].addEventListener('mouseenter',mouseenterpointMenu);
    
    function mouseenterpointMenu(EO){
      let img=EO.target.getElementsByTagName('img')[0];
      let nameImg=img.src.replace('.png','');
      img.src=nameImg+'_2.png';
      EO.target.addEventListener('mouseleave',mouseleavepointMenu);

      function mouseleavepointMenu (EO){
          img.src=nameImg+'.png';         
      } 
    }
  }


  //--------------------------------------
  //2. Взаимодействие с баром меню
  function useWithBars(){
    let bars=document.querySelector('.header .bars');
    bars.addEventListener('click',clickBarsMenu);
      
    function clickBarsMenu(EO){
      let menu=document.querySelector('.header_content-inner .menu');
      let backArraw=document.querySelector('.header .backArraw');
      menu.style.transform='translateX(0%)';
      bars.style.display='none';
      backArraw.style.display='block';
      backArraw.addEventListener('click',backHome);
      function backHome(){
        menu.style.transform='';
        bars.style.display='';
        backArraw.style.display='';
      }
    }
  }
    
  //--------------------------------------
  //3. Переход на секцию конкретного танца
  function startSection(){    
    let pointMenuLi=document.querySelectorAll('.menu li');
    for(let i=0;i<pointMenuLi.length;i++){
      pointMenuLi[i].addEventListener('click',clickPointMenu);
    }

    function clickPointMenu(EO){
      EO.preventDefault();
      let elemLi=EO.currentTarget.getElementsByTagName('a')[0];
      let idSection=elemLi.getAttribute('data-href').substr(1);
      let elemSection=document.getElementById(idSection);
      elemSection.scrollIntoView({block: "start", behavior: "smooth"});
      if(window.innerWidth<768){
        let bars=document.querySelector('.header .bars');
        let menu=document.querySelector('.header_content-inner .menu');
        let backArraw=document.querySelector('.header .backArraw');       
        menu.style.transform='';
        bars.style.display='';
        backArraw.style.display='';
      }
    }

  }

  //--------------------------------------
  //4. Переход к заполнению формы
  function startForm(){    
    let buttonsOrder=document.querySelectorAll('.button_order');

    for(let i=0;i<buttonsOrder.length;i++){
      //buttonsOrder[i].addEventListener('mouseenter',mouseenterButtonOrder);
      buttonsOrder[i].addEventListener('click',clickButtonOrder);
    }

    function clickButtonOrder(EO){
        EO.preventDefault();
        let form=document.getElementById('form');
        form.style.display='flex';

        let formOrder="<div id='blockForm'>";
            formOrder+="<svg class='cross' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 22.88 22.88' style='enable-background:new 0 0 22.88 22.88;' xml:space='preserve'><path fill='#1E201D;' d='M0.324,1.909c-0.429-0.429-0.429-1.143,0-1.587c0.444-0.429,1.143-0.429,1.587,0l9.523,9.539 l9.539-9.539c0.429-0.429,1.143-0.429,1.571,0c0.444,0.444,0.444,1.159,0,1.587l-9.523,9.524l9.523,9.539c0.444,0.429,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-9.539-9.539l-9.523,9.539c-0.444,0.429-1.143,0.429-1.587,0c-0.429-0.444-0.429-1.159,0-1.587l9.523-9.539L0.324,1.909z'/></svg>";
            formOrder+="<h1 class='h1_application'>Application</br>form</h1>";
            formOrder+="<span>Please fill in the application form</span>";       
            
            formOrder+="<div class='inputsForm'>";
            formOrder+="<form action='#' method='post'>";
            formOrder+="<input id='nick' type='text' name='nick' placeholder='Your name' required>";
            
            formOrder+="<input id='phone' type='phone' name='phone' placeholder='Your contact phone number' required>";
            
            formOrder+="<select size='1' name='danceStyle' required>";
            formOrder+="<option value=''>Choose your dance style</option>";
            formOrder+="<option value='crump'>C.R.U.M.P</option>";
            formOrder+="<option value='locking'>Locking</option>";
            formOrder+="<option value='popping'>Popping</option>";
            formOrder+="<option value='hip_hop'>Hip Hop</option>";
            formOrder+="</select>";
           
            formOrder+="<input class='button_order' type='submit' value='send request'>";
            formOrder+="</form>";
            formOrder+="</div>";

            formOrder+="<div class='imgCapForForm'><img src='img/cap_form.png'></div>";

            formOrder+="</div>";
           
            form.innerHTML=formOrder;
            let cross=document.querySelector('#blockForm .cross');
            cross.addEventListener('click',backHome);
            let formNew=document.getElementById('blockForm');
            //let buttonSayThank=formNew.getElementsByClassName('button_order')[0];
            let formMy=document.querySelector('form');
            formMy.addEventListener('submit',sayThank);

            let selectElem=formNew.querySelector('#blockForm .inputsForm select');
            selectElem.addEventListener('change',changeSelectElem);

            function changeSelectElem(){
              selectElem.style.color='white';
            }

            function sayThank(EO){
              EO=EO||window.event;
              EO.preventDefault();
              let formThank="<div id='blockForm'>";

              formThank+="<h1 class='h1_thank'>Thank you</h1>";
              formThank+="<span>Thank you for your request.<br/>We will contact you within 10 minutes</span>";        
              formThank+="<button class='button_order'> <a href='#'> home page </a> </button>";

              formThank+="</div>";
           
              form.innerHTML=formThank;

              let formThankNew=document.getElementById('blockForm');
              let buttonHome=formThankNew.getElementsByClassName('button_order')[0];
              buttonHome.addEventListener('click',backHome);
            }

            function backHome(EO){
              EO.preventDefault();           
              form.innerHTML='';
              form.style.display='none';
            }
    }

  }  

  //-----------------------------------------------------
  //5. Переход на странцу танцора (навигация)
  function startDancer(){     
   let dancers=document.body.querySelectorAll('.one_dancer');
   for(let i=0;i<dancers.length;i++){
     dancers[i].addEventListener('click',clickOneDancer);
   }

   let readMores=document.querySelectorAll('.read_more');

    for(let i=0;i<readMores.length;i++){
      readMores[i].addEventListener('click',clickOneDancer);
    }

    function clickOneDancer(EO){
      EO.preventDefault();
      console.log(EO.currentTarget);
      let namedancer=EO.currentTarget.getAttribute('data-namedancer');
      console.log(namedancer);
      location.hash=''+namedancer;
    }
  }


  //-------------------------------------------------------
  //6. Переход на домашнюю страницу (навигация)
  function homeBack(){     
    let homeBack=document.querySelector('.arrowHome');
    homeBack.addEventListener('click',clickHomeBack);

    let logoBack=document.querySelector('.page_dancer .header_logo');
    logoBack.addEventListener('click',clickHomeBack);
   
    function clickHomeBack(){
      window.location.hash='';
    }
  }

  //-------------------------------------------------------
  //7. Изменение танцора в разделе 'our dancers'
  function changeDancer(){    
    let prevDancer=document.querySelector('.result_change .result_prev');
    let prevDancerArrow=document.querySelector('.result_change .result_prev svg path');
    let nextDancer=document.querySelector('.result_change .result_next');
    let nextDancerArrow=document.querySelector('.result_change .result_next svg path');
    let allDancers=document.querySelector('.our_dancers_flex');
       
    window.addEventListener('resize',changeSize);
    prevDancer.addEventListener('click',appearPrevDancer);
    nextDancer.addEventListener('click',appearNextDancer);
    let translate=0;

    function appearPrevDancer(){      
        if(translate<0){   
          translate+=25;                   
          allDancers.style.opacity='0';
          allDancers.style.transform='translateX('+translate+'%)';         
          allDancers.addEventListener('transitionend',backOpasity);
          function backOpasity(){           
            allDancers.style.opacity='1';
          }       
        }
        appearArrows(translate);
    }

    function appearNextDancer(){      
        if(translate>-75){                   
          translate-=25; 
          allDancers.style.opacity='0';
          allDancers.style.transform='translateX('+translate+'%)';         
          allDancers.addEventListener('transitionend',backOpasity);
          function backOpasity(){           
            allDancers.style.opacity='1';
          }                 
        }
        appearArrows(translate);
    }

    function appearArrows(translate){
      if(translate<=-75){         
        nextDancerArrow.style.fill='rgb(145, 145, 145)';
        prevDancerArrow.style.fill='rgb(252, 252, 252)';
      }else if(translate>=0){        
        nextDancerArrow.style.fill='rgb(252, 252, 252)';
        prevDancerArrow.style.fill='rgb(145, 145, 145)';       
      }else{
        nextDancerArrow.style.fill='rgb(252, 252, 252)';
        prevDancerArrow.style.fill='rgb(252, 252, 252)';   
      }
    }

    function changeSize(){
      allDancers.style.transform='translateX(0%)';  
    }
  }

  //-------------------------------------------------------
  //8. функционал для видео-ролика
  function startVideo(){
    let buttonPlays=document.querySelectorAll('.videoPlay');

    for(let i=0;i<buttonPlays.length;i++){
      buttonPlays[i].addEventListener('click',clickVideo);
    }

    function clickVideo(EO){
       let buttonPlay=EO.currentTarget;
       let video=buttonPlay.nextElementSibling;
       let img=video.nextElementSibling;
       
       img.style.zIndex='-1';
       img.style.opacity='0';
       video.style.opacity="1";
       video.controls="controls";
       video.play();
       buttonPlay.style.display='none';
       video.addEventListener('ended',endVideo);

       function endVideo(){
        img.style.zIndex='1';
        img.style.opacity='1';
        buttonPlay.style.display='block';
        video.style.opacity="0";
       }
    }
  }

  //-------------------------------------------------------
  //9. появление танцора при скроллинге
  
  function showVisibleDancer() {
   
    window.onscroll=function(){
       let dancers=document.querySelectorAll('.transform_sections .dancer');
        for(var i=0; i<dancers.length;i++){   
          if(isVisible(dancers[i])){
            dancers[i].style.transform = 'translateY(0%)';
          }
        }
    }   
  }

  function isVisible(elem) {    
    let coords = elem.getBoundingClientRect();      
    let windowHeight = document.documentElement.clientHeight;
  
    // верхний край элемента виден?
    let topVisible = coords.top > 0 && coords.top < windowHeight;
  
    // нижний край элемента виден?
    let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;
          
    return topVisible || bottomVisible;
  }


  //---------------------------------------------------------
  //10. Выполняем предзагрузку картинок
  document.addEventListener('DOMContentLoaded', () => {
    const images = new Array();

    function preloadImages(...images) {
        images.forEach((image, i) => {
            image = new Image();
            image.src = preloadImages.arguments[i];
        });
    };

    // Предварительная загрузка нужных картинок 
    preloadImages(
        'img/cap_form.png',
        'img/dancer_fon.jpg',
        'img/park_manur.png',
        'img/reward1.png',
        'img/reward2.png',
        'img/reward3.png',
        'img/fon_header.jpg',
        'img/fon7.png',
        'img/footer_4.png',
        'img/fon7.png',
        'img/man1.png',
        'img/man2.png',
        'img/women1.png',
        'img/women2.png',
        'img/pattern_circle.jpg',
        'img/pattern_figures.jpg',
        'img/pattern_figures2.jpg',
        'img/tania_purka.png',
        'img/mari_nanfo.png',
    );
  });

//----------------------------------------------------------------
//11. Реализация SPA:
  // после загрузки/перезагрузки страницы определяем где находимся:    
  window.onload=function(){
      switchToStateFromURLHash();
      let hiddenPage=document.getElementById('hiddenPage');
      hiddenPage.style.display='none';      
  }

  // подписываемся на изменение закладки в УРЛе:
  window.onhashchange=switchToStateFromURLHash;
  // #Main - главная страница
  // #Dancer - танцор
     
  //обработчик события изменения закладки УРЛа 
  function switchToStateFromURLHash() {    
    var URLHash=window.location.hash;
 
    // убираем из закладки УРЛа решётку
    var stateStr=URLHash.substr(1);

    if ( stateStr!="" ) { // если закладка непустая, читаем из неё состояние и отображаем
      SPAState={ pagename: stateStr }; // 
    }
    else{
      SPAState={pagename:'main'}; // иначе показываем главную страницу
    }
   
    // обновляем вариабельную часть страницы под текущее состояние   
    testLoadData(SPAState.pagename);
  }

  function testLoadData(str) {
    $.ajax(str+".html",
        { type:'GET', dataType:'html', success:dataLoaded, error:errorHandler }
    );
  }

  function dataLoaded(data) {   
    document.getElementById('IPage').innerHTML=data;
    window.scrollTo(0,0);//перемещаемся в начало страницы
    if(SPAState.pagename==='main'){
      //запускаем функционал для главной страницы
      startMenu();
      startSection();
      startForm();
      startDancer();
      changeDancer();
      useWithBars();
      startVideo();
      showVisibleDancer();
    }else{
      //запускаем функционал для страницы танцора
      startForm();
      homeBack();
    }    
  }

  function errorHandler(jqXHR,statusStr,errorStr) {
    $.ajax("err404.html",
           { type:'GET', success:dataLoaded404, error:errorHandlerAlert }
    );

    function dataLoaded404(data){
      document.getElementById('IPage').innerHTML=data;      
    }

    function errorHandlerAlert(){
      alert(statusStr+' '+errorStr);
    }
      
  }

//12. ожидаем полную загрузку страницы


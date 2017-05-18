// ==UserScript==
// @name        Scroll to Top
// @namespace   summonoy.github.com
// @description implement a scroll to top button
// @include     *
// @version     1
// ==/UserScript==

(function(){
    var btn = document.createElement('button');
    btn.setAttribute('id', 'SMScrollBtn');
    btn.textContent = 'Top';
    
    var css = '#SMScrollBtn{display: none;position: fixed;bottom: 20px;right: 30px;z-index: 99;border: none;outline: none;background-color: #555;color:white;cursor: pointer;padding: 15px;border-radius: 10px;opacity:0.5;}#SMScrollBtn:hover{background-color:#353535;}';
    var style = document.createElement('style');

    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
    document.getElementsByTagName('body')[0].appendChild(btn);
    
    document.getElementById('SMScrollBtn').addEventListener('click',function(){
            var scrollStep = -window.scrollY / 20;
            scrollInterval = setInterval(function(){
                if(window.scrollY !=0){
                    window.scrollBy(window.scrollX,scrollStep);
                }else{
                    clearInterval(scrollInterval);
                }
            },15);
            
        });
    window.onscroll = function(){scrollFunction()}; 
})();
    
function scrollFunction(){
    if(window.scrollY > 20){
        document.getElementById("SMScrollBtn").style.display = "block";
    }else{
        document.getElementById("SMScrollBtn").style.display = "none";
    }
}
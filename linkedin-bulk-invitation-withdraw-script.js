/*
Developed by: Md. Sabuj Sarker
Email: md.sabuj.sarker@gmail.com
Website: http://sabuj.me

You are free use this sceript anywhere with proper mentioning proper credit and contact info of the developer.

*/

(function run(){
    console.log("Started");
    var totalCount = 0;
    var els = []
    function populateEls(){
        els = document.getElementsByClassName("mn-person-card__person-btn-ext");
        
        
    }
    
    function runWithdraw(){
        console.log(els);
        var idx = 0;
        var len = els.length;
        while(idx < len){
            var el = els.item(idx);
            console.log("IDX: " + idx + " El: " );
            //console.log(el);
            if (el){
                setTimeout(function(elll, idx){
                    totalCount++;
                    console.log("running.. click "+totalCount);
                    elll.click();
                    if (len == idx+1){
                        console.log("Need to find new elems");
                        setTimeout(function(){
                            populateEls();
                            if(len == 0){
                                console.log("..........Done");
                            }
                            else{
                                console.log("Rerun withdraw...");
                                runWithdraw();
                            }
                        } , 1000);
                    }
                }, idx * 300, el, idx);
            }
            idx++;
        }
    }
    
    populateEls();
    runWithdraw();
})();

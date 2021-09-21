        var clickedT, createdT, reactionT;
        var fastestT = 20;
        
        reAppear();
        
        document.getElementById("box").onclick=function(){
            
            clickedT = Date.now();
            reactionT = (clickedT-createdT)/1000;
            
            document.getElementById("ReactionT").innerHTML="Your last reaction time was: "+reactionT+" seconds!";
            
            if(reactionT < fastestT){
                fastestT = reactionT;
            }
            
            document.getElementById("ft").innerHTML="FASTEST time: "+fastestT+" seconds!";
            
            document.getElementById("box").style.display="none";
            
            reAppear();
        }
        
        function reAppear(){
            var time = Math.random()*5000;
            var xpos = Math.round(Math.random()*1000);
            var ypos = Math.round(Math.random()*350);
            setTimeout(function() {
                document.getElementById("box").style.backgroundColor=getRandomColor();
                document.getElementById("box").style.marginTop=ypos+"px";
                document.getElementById("box").style.marginLeft=xpos+"px";
                
                if (Math.random() > 0.5){
                    document.getElementById("box").style.borderRadius="50px";
                }
                else{
                    document.getElementById("box").style.borderRadius="0";
                }
                document.getElementById("box").style.display="block";
                createdT = Date.now();
                }, time);   
        }
        
        function getRandomColor() {
              var letters = '0123456789ABCDEF';
              var color = '#';
              for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
              }
            return color;
            
        }

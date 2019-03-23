            var botao=document.getElementById("botao1");
            var botao1=document.getElementById("botao2");

             var portugues ="   Buscar novos desafios ao crescimento profissional e pessoal, objetivando ocupar              "+"<br>"
               + "uma posição na área técnica ou de desenvolvimento, de acordo com a necessidade                     "+"<br>"
                +" da empresa.";
            var ingles ="search new challenges to grow both professionally and personally, objectifying"+"<br>" 
                +"a position  in the technical or the development area according"+"<br>" 
                +"to the company necessity."   
            function mudarcorBR(){
                document.getElementById("botao1").style.color = "rgb(200, 200, 200)";
                document.getElementById("botao2").style.color="white";
            }
            function mudarcorEU(){
                document.getElementById("botao2").style.color = "rgb(200, 200, 200)";
                document.getElementById("botao1").style.color="white";
            }
            botao.addEventListener('click' , function(){

                document.getElementById("objetivo").innerHTML=portugues;
                
                
            })

            botao1.addEventListener('click' , function(){
                document.getElementById("objetivo").innerHTML=ingles;
            })
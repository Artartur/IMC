function imc(){

   var res = document.querySelector(".res")

   var peso = document.querySelector('#input1').value
   var altura = document.querySelector('#input2').value

   var imc = (peso/(altura*altura))*10000
   
   if(imc < 18.5){
        return res.innerHTML= `<style> h3{background-color:rgb(109, 187, 109); padding:10px;} </style>
        <h3>Resultado: ${imc.toFixed(2)} - Magreza`
   }
   else if(imc >= 18.5 && imc <= 24.9){
        return res.innerHTML= `<style> h3{background-color:rgb(109, 187, 109); padding:10px;} </style>
        <h3>Resultado: ${imc.toFixed(2)} - Normal`
    }
   else if(imc > 25 && imc <= 29.9){
        return res.innerHTML= `<style> h3{background-color:rgb(109, 187, 109); padding:10px;} </style>
        <h3>Resultado: ${imc.toFixed(2)} - Sobrepeso`
    }
   else if(imc > 30 && imc <=39.9){
        return res.innerHTML= `<style> h3{background-color:rgb(109, 187, 109); padding:10px;} </style>
        <h3>Resultado: ${imc.toFixed(2)} - Obesidade`
    }
   else if(imc > 40){
        return res.innerHTML= `<style> h3{background-color:rgb(109, 187, 109); padding:10px;} </style>
        <h3>Resultado: ${imc.toFixed(2)} - Obesidade grave</h3>`
   }
   else{
       return res.innerHTML = `<style>h3{background-color:red; padding:10px;}</style>
       <h3>Informe os valores númerico</h3>`
   }

}



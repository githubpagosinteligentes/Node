const fetch = require('node-fetch');


exports.consumo = function(req, res){
    var json = {
        "generateTransaction": {
            "security": {
              "accountId": 30336,
              "token": "bflMObSMSnyvysHpC72*"
            },
            "infoPayment": {
              "amount": 1000,
              "tax": 0,
              "description": "Prueba Swagger",
              "toolId": 5,
              "registryToolId": 0,
              "currency": "COP"
            },
            "infoClient": {
              "name": "Pagos Inteligentes",
              "idType": "CC",
              "idNumber": "123456789",
              "email": "comprobantes@pagosinteligentes.com",
              "phone": "573213285290"
            },
            "infoAdditional": {
              "disabledPaymentMethod": "20,21,24",
              "infoAdditional": 0,
              "urlResponseOk": "https://sag.pagosinteligentes.com:8140/",
              "urlResponseFail": "https://sag.pagosinteligentes.com:8140/",
              "urlResponsePending": "https://sag.pagosinteligentes.com:8140/",
              "urlNotificationPost": "https://sag.pagosinteligentes.com:8140/",
              "photo": "https://dl.dropboxusercontent.com/s/jghrtm678do5fts/carrito.jpg?dl=0",
              "cashDiscount": 100,
              "expiredCashDiscount": "2021/12/31",
              "deliveryAddres": true,
              "ammountShipping": 0
            }
          }   
    }

 
    fetch('https://apiecommerce.pagosinteligentes.com:8070/CheckOut/MethodGenerateTransaction',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json', 
            'accept': 'text/plain'           
    },
        body: JSON.stringify(json)
    })
    .then(res =>{       
         if(res.ok){            
           return res.text()
         }else{
            console.log('error'); 
         }      
        } )
    .then(body => {     
  
        return  res.send('<html><body>'+body+'</body></html>');
        })
    .catch(err=>{
        console.log(err.mesage)
        return  res.send('<html><body>'+err.message+'</body></html>');

    });
}

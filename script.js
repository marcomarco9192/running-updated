paypal.Buttons({
    style: {
      layout: 'vertical',
      color:  'silver',
      shape:  'rect',
      label:  'paypal'
},
      createOrder: function(data, actions){
          return actions.order.create({
              purchase_units: [{
                  amount: {
                      value: '0.01'
                  }
              }]
          });

           
      },
      onApprove: function(data, actions){
          return actions.order.capture().then(function(details){
              alert("Transaction Successful! Thanks for Booking, "+details.payer.name.given_name);
          })

      },
      onError: function (err){
          console.error("Payment Error :', err");
          alert("Payment Failed !");
      }

  }).render("#paypal-button-container");

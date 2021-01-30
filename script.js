
    // first class ticket
document.getElementById('first-plus').addEventListener('click', function(){

    
    const firstTicketInput = document.getElementById('first-value');
    const firstTicketCount = parseInt(firstTicketInput.value);
    const firstTicketNewCount = firstTicketCount + 1;
    firstTicketInput.value = firstTicketNewCount;
    
    subtotal()
 });
 document.getElementById('first-minus').addEventListener('click', function(){
 
     
     const firstTicketInput = document.getElementById('first-value');
     const firstTicketCount = parseInt(firstTicketInput.value);
     //const firstTicketNewCount = firstTicketCount - 1;
     if(firstTicketCount > 0){
         firstTicketNewCount = firstTicketCount - 1;
     }
     firstTicketInput.value = firstTicketNewCount;
    
     subtotal()
  });
 
  // economic ticket
  document.getElementById('eco-plus').addEventListener('click', function(){
 
     
     const ecoTicketInput = document.getElementById('eco-value');
     const ecoTicketCount = parseInt(ecoTicketInput.value);
     const ecoTicketNewCount = ecoTicketCount + 1;
     ecoTicketInput.value = ecoTicketNewCount;
     subtotal()
   
  });
  document.getElementById('eco-minus').addEventListener('click', function(){
  
      
      const ecoTicketInput = document.getElementById('eco-value');
      const ecoTicketCount = parseInt(ecoTicketInput.value);
      //const firstTicketNewCount = firstTicketCount - 1;
      if(ecoTicketCount > 0){
          ecoTicketNewCount = ecoTicketCount - 1;
      }
      ecoTicketInput.value = ecoTicketNewCount;
      subtotal()
    
   });

function subtotal(){
    const firstTicketInput = document.getElementById('first-value');

    const firstTicketCount = parseInt(firstTicketInput.value);


    const ecoTicketInput = document.getElementById('eco-value');

    const ecoTicketCount = parseInt(ecoTicketInput.value);

    const subTotalPrise = firstTicketCount * 150 +  ecoTicketCount * 100;

    document.getElementById('ticket-cost').innerText = subTotalPrise;

    const tax = subTotalPrise * 0.1;
    document.getElementById('tax-amount').innerText = tax;

    const fullCost = subTotalPrise + tax;
    document.getElementById('total-cost').innerText = fullCost;
};

const bookingBtn = document.getElementById('booking-btn');

bookingBtn.addEventListener('click', function(){
const hidingArea = document.getElementById('hide-queen');

hidingArea.style.display = "none";

const showingArea = document.getElementById('show-queen');
showingArea.style.display = "block";

})
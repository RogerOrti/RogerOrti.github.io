function calcularpropina() {


    let numeroPersones = parseInt(document.getElementById("numeroPersones").value);
    let factura = parseFloat(document.getElementById("totalFactura").value);
    let valoracio = document.getElementById("valoracio").value;
    let propinaTotal;
    let percentatge;
    
    console.log("numeroPersones:", numeroPersones);
    console.log("factura:", factura);
    console.log("valoracio:", valoracio);
    
    //Verifiquem el numero de persones
    if(isNaN(numeroPersones)){
    
        numeroPersones = 1;
      
    }
    
    //Verifiquem la factura 
    if(isNaN(factura)){
    
        alert("Introdueix un valor vàlid");
      return;
    }
    
    if(valoracio === ""){
    
        alert("Si us plau, introdueix una valoració")
      return;
    }
    
    
    
    //Calculem la propina
    switch (valoracio){
    
        case "1":
          percentatge = 0;
      break;
      case "2":
          percentatge = 5;
      break;
      case "3":
          percentatge = 10;
      break;
    }
    
    
    propinaTotal = (factura*(percentatge/100));
    propinaTotal = Math.max(propinaTotal, numeroPersones * 0.50);
    
    let propinaPersona = propinaTotal / numeroPersones;
    document.getElementById("propinaPersona").innerHTML = propinaPersona.toFixed(2) + "€";
    
    
    document.getElementById("calculadoraPropina").reset();
    
    
    
    }
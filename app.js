//ISPC Tecnicatura Telecomunicaciones
//Cohorte 2022
//Alumno Mario Gonzalez
//App para manejo de una Lampara en forma remota  

function pi_i(){
        try {
                  const relleno = matchMedia("(max-width: 576px)");
                  const veo = mql => {
                    if (mql.matches) {
                    // alert("este es de celu")
          /*-----------------------------------------------------------------*/
            /* Creamos div de fondo de la app e insertamos en el DOM   */
            /*-----------------------------------------------------------------*/
            const fondo = document.createElement('div'); //creamos div
            fondo.id = 'fondo'; //establebecemos el id del div
            fondo.className = 'calculadora'; //establecemos la clase del div para uso futuro
            let parametros = //establecemos los parametros aspectos del div
                "position: absolute;" +
                "top: 5%;" +
                "left: 2%;" +
                "width: 95%;" +
                "height: 85%;" +
                "align-items: center;" +
                "background-color: crimson;" +
                "border-radius: 10px;" +
                "border: 2px solid black;" +
                "justify-content: center;";
            fondo.setAttribute('style', parametros);
            document.body.appendChild(fondo); //este inserta el div en el body del HTML 
            /*-----------------------------------------------------------------*/
            /* Creamos div de las teclas de la app e insertamos en el DOM */
            /*-----------------------------------------------------------------*/
            const teclado = document.createElement('div'); //creamos div
            teclado.id = 'teclado'; //establecemos el id del div
            teclado.className = 'teclado'; //establecemos la clase del div para uso futuro
            let parametros3 = //establecemos los parametros aspectos del div
                "position: absolute;" +
                "top: 1%;" +
                "left: 2%;" +
                "width: 95%;" +
                "height: 97%;" +
                "align-items: center;" +
                "background-color: pink;" +
                "border-radius: 10px;" +
                "border: 2px solid black;";
            teclado.setAttribute('style', parametros3); //carga los estilos de los elementos
            fondo.appendChild(teclado); //este inserta el display en el body del HTML 
            /*-----------------------------------------------------------------*/
            /* Creamos titulo de la app e insertamos en el DOM */
            /*-----------------------------------------------------------------*/
            const label1 = document.createElement('label'); //creamos label
            label1.id = 'label1'; //establecemos el id del label
            label1.className = 'label1'; //establecemos la clase del label para uso futuro
            let parametros5label = //establecemos los parametros aspectos del label
            "position: absolute;" +
            "top: 0%;" +
            "left: 0%;" +
            "width: 100%;" +
            "height: 100%;" +
            "user-select: none;" +
            "align-items: center;" +
            "font-size: 14px;" +
            "text-align: center;" +
            "line-height: 60px;" +
            "font-weight: bold;" +
            "justify-content: center;" +
            "background-color: transparent;";
            label1.setAttribute('style', parametros5label); //carga los estilos del label
            label1.innerHTML = "ISPC TST Proyecto Integrados TP_1";
            teclado.appendChild(label1); //este inserta el label en el button 











                    } else {
                        alert("Esta APP es solo para dispositivos moviles")
                    }
                  }
                  relleno.addListener(veo);
                  veo(relleno)
    
    } catch (error) {
    }
}
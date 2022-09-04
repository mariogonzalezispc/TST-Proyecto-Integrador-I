//ISPC Tecnicatura Telecomunicaciones
//Cohorte 2022
//Alumno Mario Gonzalez
//App para manejo de una Lampara en forma remota  

function pi_i() {
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
                label1.innerHTML = "ISPC TST Proyecto Integrador TP_1";
                teclado.appendChild(label1); //este inserta el label en el button 

                /*-----------------------------------------------------------------*/
                /* Creamos div de las teclas de la app e insertamos en el DOM */
                /*-----------------------------------------------------------------*/
                const led1 = document.createElement('div'); //creamos div
                led1.id = 'led1'; //establecemos el id del div
                led1.className = 'led1'; //establecemos la clase del div para uso futuro
                let parametros_led1 = //establecemos los parametros aspectos del div
                    "position: absolute;" +
                    "top: 15%;" +
                    "left: 55%;" +
                    "width: 9%;" +
                    "height: 6%;" +
                    "align-items: center;" +
                    "background-color: gray;" +
                    "border-radius: 50%;" +
                    "border: 2px solid black;";
                led1.setAttribute('style', parametros_led1); //carga los estilos de los elementos
                fondo.appendChild(led1); //este inserta el display en el body del HTML 

                /*-----------------------------------------------------------------*/
                /* Creamos div de las teclas de la app e insertamos en el DOM */
                /*-----------------------------------------------------------------*/
                const botonA = document.createElement('div'); //creamos div
                botonA.id = 'botonA'; //establecemos el id del div
                botonA.className = 'botonA'; //establecemos la clase del div para uso futuro
                let parametros_botonA = //establecemos los parametros aspectos del div
                    "position: relative;" +
                    "top: 13%;" +
                    "left: 10%;" +
                    "width: 5rem;" +
                    "height: 3rem;" +
                    "align-items: center;" +
                    "background-color: red;" +
                    "content: '';" +
                    "display: inline-block;";
                botonA.setAttribute('style', parametros_botonA); //carga los estilos de los elementos
                fondo.appendChild(botonA); //este inserta el display en el body del HTML 

                /*-----------------------------------------------------------------*/
                /* Creamos div de las teclas de la app e insertamos en el DOM */
                /*-----------------------------------------------------------------*/
                const labelA = document.createElement('label'); //creamos div
                labelA.id = 'labelA'; //establecemos el id del div
                labelA.className = 'labelA'; //establecemos la clase del div para uso futuro
                let parametros_labelA = //establecemos los parametros aspectos del div
                    "position: relative;" +
                    "top: 13%;" +
                    "left: 10%;" +
                    "width: 5rem;" +
                    "height: 3rem;" +
                    "align-items: center;" +
                    "background-color: white;" +
                    "content: '';" +
                    "display: inline-block;";
                labelA.setAttribute('style', parametros_labelA); //carga los estilos de los elementos
                fondo.appendChild(labelA); //este inserta el display en el body del HTML 

                /*-----------------------------------------------------------------*/
                /* Creamos div de las teclas de la app e insertamos en el DOM */
                /*-----------------------------------------------------------------*/
                const inputA = document.createElement('input'); //creamos div
                inputA.id = 'inputA'; //establecemos el id del div
                inputA.className = 'inputA'; //establecemos la clase del div para uso futuro
                let parametros_inputA = //establecemos los parametros aspectos del div
                    "type=checkbox;" +
                    "display: none;";
                inputA.setAttribute('style', parametros_inputA); //carga los estilos de los elementos
                fondo.appendChild(inputA); //este inserta el display en el body del HTML 

            } else {
                alert("Esta APP es solo para dispositivos moviles")
            }
        }
        relleno.addListener(veo);
        veo(relleno)
    } catch (error) {}
}

function datos_RX(){

}

function datos_TX(){

}










const tipo = "200/";
const IDi = "123456789012/i/";
const IDa = "123456789012/a/;";


var clave = "1234";
var topic1 = tipo + IDi;
var topic2 = tipo + IDa;
var x;

//var client = mqtt.connect("ws://casaiot.ddns.net:9001/mqtt");
var client = mqtt.connect("ws://mgalarmasserver1.ddns.net:9001/mqtt");
//var client = mqtt.connect("ws://192.168.0.50:9001/mqtt");

//Si lo usas en hosting para usar encriptado https
// var client = mqtt.connect("ws://casaiot.ddns.net:8080/mqtt"")
/*--------------------------------------------------------------------------------------------------------------------*/
function EventoConectar() {
    console.log("Conectado a MQTT");
    client.subscribe(topic2, function (err) {
        if (!err) {
            //alert("Conectado al servidor MG Alarmas", "", "success");
        } else {
            alert("Error al conectar al servidor MG Alarmas", "", "error");
        }
    });
}
/*----------------------------------------------------------------------------------------------------------------------*/
function txMensaje(topic, message) {
    let mensaje = message.toString();
    client.publish(topic, mensaje); // //   
}

function EventoMensaje(topic, message) {
    var mensaje = message.toString();
    let sepa = ";";
    var evento_recibido = mensaje.split(sepa);
}

client.on("connect", EventoConectar);
client.on("message", EventoMensaje);
console.log("Empezando a conectar");
client.on('connect', function () {
    console.log('connected!');
});

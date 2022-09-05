#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h>
#include <PubSubClient.h>

const char *ssid = "MG Alarmas";
const char *password = "mgalarmas2319";

// const char* ssid = "TP-LINK_B33E";
// const char* password = "50868155";

// const char* ssid = "IOT-Service";
// const char* password = "casamaldonado";

// const char* mqtt_server = "192.168.1.40";
const char *mqtt_server = "casaiot.ddns.net";

WiFiClient espClient;
PubSubClient client(espClient);
ESP8266WiFiMulti wifiMulti;

long lastMsg = 0;
char msg[50];
int value = 0;
int Rebalse = 0;
bool estado = false;
bool estado1 = false;
bool Valor_anterior = false;
bool Valor_anterior1 = false;

//------------------------------------------------------------------------------------
// Libreria de funciones
//------------------------------------------------------------------------------------
void Llave_on() { client.publish("/tst/app/", "on"); }
void Llave_off() { client.publish("/tst/app/", "off"); }
void Led_off() { client.publish("/tst/app/", "E010"); }
void Led_on() { client.publish("/tst/app/", "E011"); }
void Suscribe() { client.subscribe("/tst/esp/"); }
//------------------------------------------------------------------------------------
// Libreria de funciones Callback
//------------------------------------------------------------------------------------
void callback(char *topic, byte *payload, unsigned int length)
{
  if ((char)payload[1] == 'n')
  {
    digitalWrite(0, 1); // escribimos el nuevo valor
    Led_on();
    delay(200);
  }
  if ((char)payload[1] == 'f')
  {
    digitalWrite(0, 0); // escribimos el nuevo valor
    Led_off();
    delay(200);
  }
}
//------------------------------------------------------------------------------------
// Libreria de tecla
//------------------------------------------------------------------------------------
void Tecla()
{
  bool Valor = digitalRead(4);
  bool Valor1 = digitalRead(0);
  Rebalse = 255;
  while (Valor != Valor_anterior && Rebalse > 0)
  {
    Rebalse--;
    delay(1);
    if (Valor != Valor_anterior && Rebalse == 0)
    { // Se compara la variable estadoPulsador
      estado1 = false;
      estado = !estado; // cambiamos el estado
      Valor1 = !Valor1;
      digitalWrite(5, estado); // escribimos el nuevo valor
      digitalWrite(0, Valor1); // escribimos el nuevo valor
      if (Valor1 == 1)
      {
        Llave_on();
        Led_on();
        delay(50);
      }
      else
      {
        Llave_off();
        Led_off();
        delay(50);
      }
      Valor_anterior = Valor;
      delay(255);
    }
  }
}
//------------------------------------------------------------------------------------
// Libreria de funciones varias Setup WIFI
//------------------------------------------------------------------------------------
void setup_wifi()
{
  delay(10);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED)
  {
    Tecla();
    delay(1000);
  }
  digitalWrite(2, HIGH);
}

//------------------------------------------------------------------------------------
// Libreria de funciones Reconexion
//------------------------------------------------------------------------------------
void reconnect()
{
  while (!client.connected())
  {
    Tecla();
    String clientId = "tst-proyecto1";
    clientId += String(random(0xffff), HEX);
    if (client.connect(clientId.c_str()))
    {
      Led_off();
      Suscribe();
    }
  }
}

void setup()
{
  pinMode(0, OUTPUT);
  pinMode(2, OUTPUT);
  pinMode(4, INPUT);    // Llave Combinada
  digitalWrite(0, 0);   // Rele
  pinMode(5, OUTPUT);   // Pin Led Amarillo del Link
  digitalWrite(5, LOW); //
  Serial.begin(9600);
  setup_wifi();
  digitalWrite(2, HIGH);
  client.setServer(mqtt_server, 1883); // conecto con el server MQTT al puerto 1883
  client.setCallback(callback);
}
//------------------------------------------------------------------------------------
// Loop infinito
//------------------------------------------------------------------------------------
void loop()
{
  Tecla();
  if (!client.connected())
  {
    reconnect();
  }
  client.loop();
}
//------------------------------------------------------------------------------------

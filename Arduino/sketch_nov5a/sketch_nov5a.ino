#include <Servo.h>

// Create servo objects
Servo servo1;
Servo servo2;
// Define pins
const int irSensor1Pin = 2;
const int irSensor2Pin = 3;  // IR sensor connected to digital pin 2
const int servo1Pin = 9;    // First servo connected to digital pin 9
const int servo2Pin = 10;   // Second servo connected to digital pin 10

void setup() {
  // Attach servos to their pins
  servo1.attach(servo1Pin);
  servo2.attach(servo2Pin);
  
  // Set IR sensor pin as input
  pinMode(irSensor1Pin, INPUT);
  pinMode(irSensor2Pin, INPUT);
  
  // Initialize serial communication for debugging
  Serial.begin(9600);
  
  // Set initial position of servos to 0 degrees
  servo1.write(0);
  servo2.write(0);
}

void loop() {
  // Read IR sensor value
  int irValue1= digitalRead(irSensor1Pin);
  int irValue2 = digitalRead(irSensor2Pin);
  
  // If IR sensor detects something (LOW signal for most IR sensors)
  if (irValue1 == LOW) {
    // Move both servos to 90 degrees
    servo1.write(90);
    Serial.println("Object detected - Servos moved to 90 degrees"); // Wait for 1 second
  } else {
    // Return servos to 0 degrees when no object is detected
    servo1.write(0);
    
    Serial.println("No object detected - Servos at 0 degrees");

  }
 if (irValue2 == LOW) {
    // Move both servos to 90 degrees
    servo2.write(90);
    Serial.println("Object detected - Servos moved to 90 degrees"); // Wait for 1 second
  } else {
    // Return servos to 0 degrees when no object is detected
    servo2.write(0);
    
    Serial.println("No object detected - Servos at 0 degrees");

  }
  
}

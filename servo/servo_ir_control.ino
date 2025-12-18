#include <Servo.h>

// Create servo objects
Servo servo1;
Servo servo2;

// Define pins and constants
const int IR_SENSOR1_PIN = 2;  // First IR sensor connected to digital pin 2
const int IR_SENSOR2_PIN = 3;  // Second IR sensor connected to digital pin 3
const int SERVO1_PIN = 9;      // First servo connected to digital pin 9
const int SERVO2_PIN = 10;     // Second servo connected to digital pin 10

// Servo angles
const int SERVO_MIN_ANGLE = 0;
const int SERVO_MAX_ANGLE = 90;

// Update interval (ms)
const unsigned long UPDATE_INTERVAL = 100;
unsigned long lastUpdateTime = 0;

void setup() {
  // Attach servos to their pins
  servo1.attach(SERVO1_PIN);
  servo2.attach(SERVO2_PIN);
  
  // Set IR sensor pins as input
  pinMode(IR_SENSOR1_PIN, INPUT);
  pinMode(IR_SENSOR2_PIN, INPUT);
  
  // Initialize serial communication for debugging
  Serial.begin(9600);
  
  // Set initial position of servos
  servo1.write(SERVO_MIN_ANGLE);
  servo2.write(SERVO_MIN_ANGLE);
}

void loop() {
  // Check if it's time to update
  unsigned long currentTime = millis();
  if (currentTime - lastUpdateTime < UPDATE_INTERVAL) {
    return;  // Not enough time has passed, skip this iteration
  }
  lastUpdateTime = currentTime;

  // Read IR sensor values
  int irValue1 = digitalRead(IR_SENSOR1_PIN);
  int irValue2 = digitalRead(IR_SENSOR2_PIN);
  
  // Update servo positions based on IR sensors
  updateServo(1, servo1, irValue1);
  updateServo(2, servo2, irValue2);
}

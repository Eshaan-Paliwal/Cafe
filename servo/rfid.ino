#include <SPI.h>
#include <MFRC522.h>

// Define pins for RFID reader
#define RST_PIN         9          
#define SS_PIN          10         

MFRC522 mfrc522(SS_PIN, RST_PIN);  // Create MFRC522 instance

void setup() {
  Serial.begin(9600);     // Initialize serial communication
  SPI.begin();            // Initialize SPI bus
  mfrc522.PCD_Init();     // Initialize RFID reader
  Serial.println("Ready to scan RFID cards...");
  Serial.println("Place a card near the reader");
}

void loop() {
  // Look for new cards
  if (!mfrc522.PICC_IsNewCardPresent()) {
    return;
  }

  // Select one of the cards
  if (!mfrc522.PICC_ReadCardSerial()) {
    return;
  }

  // Show card details
  Serial.println("Card Detected!");
  Serial.print("Card UID: ");
  
  // Print UID in hexadecimal
  for (byte i = 0; i < mfrc522.uid.size; i++) {
    Serial.print(mfrc522.uid.uidByte[i] < 0x10 ? " 0" : " ");
    Serial.print(mfrc522.uid.uidByte[i], HEX);
  }
  Serial.println();
  
  // Print card type
  Serial.print("PICC type: ");
  MFRC522::PICC_Type piccType = mfrc522.PICC_GetType(mfrc522.uid.sak);
  Serial.println(mfrc522.PICC_GetTypeName(piccType));

  // Stop reading current card
  mfrc522.PICC_HaltA();
  // Stop encryption on PCD
  mfrc522.PCD_StopCrypto1();
  
  Serial.println("\nReady for next card...");
  delay(2000);  // Small delay before next read
}

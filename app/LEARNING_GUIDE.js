/**
 * LEARNING GUIDE - React Native Basics
 * 
 * This file documents key concepts used in this project
 */

// ============================================
// 1. IMPORTS
// ============================================
// React - Core library
// View - Container component (like div)
// Text - Display text (must use Text component)
// StyleSheet - For performance and style organization
// TouchableOpacity - Pressable component with opacity feedback
// ScrollView - For scrollable content
// FlatList - Efficient list rendering

// ============================================
// 2. COMPONENTS
// ============================================
// Functional Component:
// const MyComponent = () => {
//   return <View><Text>Hello</Text></View>;
// };

// Component with Props:
// const Greeting = ({ name }) => {
//   return <Text>Hello {name}</Text>;
// };

// ============================================
// 3. STATE MANAGEMENT
// ============================================
// useState Hook:
// const [state, setState] = useState(initialValue);
//
// Example:
// const [count, setCount] = useState(0);
// <Text onPress={() => setCount(count + 1)}>{count}</Text>

// ============================================
// 4. STYLING
// ============================================
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,                    // Take all available space
//     backgroundColor: '#fff',    // Background color
//     padding: 20,               // Internal spacing
//     justifyContent: 'center',  // Vertical centering (flex)
//     alignItems: 'center',      // Horizontal centering (flex)
//   },
// });

// Common Properties:
// - flex: fills available space
// - flexDirection: 'row' or 'column' (default)
// - justifyContent: center, space-between, etc.
// - alignItems: center, flex-start, flex-end
// - padding/margin: internal/external spacing
// - width/height: pixel dimensions or percentages
// - borderRadius: rounded corners
// - shadowColor/shadowOpacity: iOS shadows
// - elevation: Android shadows

// ============================================
// 5. COMMON COMPONENTS
// ============================================

// View - Container (like div)
// <View style={styles.container}></View>

// Text - Display text
// <Text style={styles.text}>Hello World</Text>

// TextInput - Input field
// <TextInput
//   style={styles.input}
//   placeholder="Enter text"
//   value={state}
//   onChangeText={setState}
// />

// TouchableOpacity - Pressable button with feedback
// <TouchableOpacity onPress={() => handlePress()}>
//   <Text>Press Me</Text>
// </TouchableOpacity>

// ScrollView - Scrollable container
// <ScrollView contentContainerStyle={styles.scroll}>
//   <Text>Content</Text>
// </ScrollView>

// FlatList - Efficient list rendering
// <FlatList
//   data={items}
//   renderItem={({ item }) => <Text>{item.name}</Text>}
//   keyExtractor={(item) => item.id}
// />

// ============================================
// 6. EVENTS
// ============================================
// onPress - Button/pressable touched
// onChangeText - Text input value changed
// onFocus - Element focused
// onBlur - Element lost focus
// onScroll - Scroll view scrolled

// ============================================
// 7. STYLING UNITS
// ============================================
// React Native doesn't use CSS
// - No 'px', 'em', or '%' for most properties
// - Sizes are in density-independent pixels (dp)
// - Colors: hex (#fff), rgb(255, 255, 255), or names ('red')

// ============================================
// 8. NAVIGATION (Not included, but example)
// ============================================
// Install: npm install @react-navigation/native @react-navigation/bottom-tabs
// Then import and use navigation stack or tabs

// ============================================
// 9. API CALLS
// ============================================
// useEffect Hook (for API calls):
// import { useEffect } from 'react';
//
// useEffect(() => {
//   const fetchData = async () => {
//     const response = await fetch('https://api.example.com/data');
//     const json = await response.json();
//     setData(json);
//   };
//   fetchData();
// }, []); // Empty array means run once on mount

// ============================================
// 10. TIPS & TRICKS
// ============================================
// - Always use Platform-specific code for iOS/Android differences
// - Test on actual devices for better performance feedback
// - Use Flexbox for responsive layouts
// - Keep components small and reusable
// - Use StyleSheet for performance
// - Debug with React Developer Tools or Flipper

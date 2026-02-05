# React Native Learning Project

A beginner-friendly React Native project with Expo to learn the fundamentals.

## 📦 Project Structure

```
app/
├── App.js                          # Main entry point
├── app.json                        # Expo configuration
├── package.json                    # Dependencies
├── components/                     # Reusable components
│   ├── CustomButton.js            # Custom button component
│   └── Card.js                    # Card wrapper component
├── screens/                        # Screen components
│   ├── ListExampleScreen.js       # FlatList example
│   └── FormExampleScreen.js       # Form handling example
└── assets/                         # Images and resources
```

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed
- Expo CLI: `npm install -g expo-cli`

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on specific platforms:
```bash
npm run android    # Android emulator
npm run ios        # iOS simulator
npm run web        # Web browser
```

## 📚 Learning Path

### Basics (App.js)
- Text components
- View containers
- StyleSheet basics
- State with useState hook
- TouchableOpacity for buttons

### Components (components/)
- Creating reusable components
- Props passing
- Component composition

### Screens (screens/)
- FlatList for rendering lists
- TextInput for forms
- Managing form state

## 🎯 Key Concepts to Learn

1. **Components** - Functional and class components
2. **Styling** - StyleSheet API with Flexbox
3. **State & Props** - Data flow in React Native
4. **Navigation** - Moving between screens (install `@react-navigation` to explore)
5. **API Calls** - Fetching data with `fetch()` or `axios`
6. **Lists** - Rendering items efficiently with FlatList
7. **Forms** - TextInput and form validation

## 📖 Useful Resources

- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Hooks Guide](https://react.dev/reference/react/hooks)

## 🛠️ Next Steps

1. Modify `App.js` to add more components
2. Create new screens in the `screens/` folder
3. Add navigation using React Navigation
4. Fetch real data from an API
5. Build and deploy your app

## 📝 Notes

- This project uses Expo for easy development without needing Android Studio or Xcode
- All styling uses Flexbox layout system
- Components are functional components with Hooks

Happy learning! 🎉

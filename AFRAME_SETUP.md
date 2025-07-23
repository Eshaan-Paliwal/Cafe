# A-Frame Setup Instructions

This project uses A-Frame to create a 3D scene with a panorama background and a 3D model. Follow these instructions to set up and run the application.

## Installation

1. Install A-Frame:

```bash
npm install aframe
```

2. Optional: Install additional A-Frame components for enhanced functionality:

```bash
npm install aframe-environment-component aframe-orbit-controls-component
```

## Adding a Panorama Image

1. Add your panorama image to the public folder. The image should be named `panorama.jpg` or update the path in `App.jsx`.

2. For best results, use an equirectangular panorama image. These are 360° images with a 2:1 aspect ratio.

## Running the Application

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to the URL shown in the terminal (usually http://localhost:5173).

## Controls

- Use WASD keys to move around
- Click and drag to look around
- Click on objects to interact with them (if interaction is implemented)

## Troubleshooting

- If the model doesn't load, check the console for errors and make sure the path to the model is correct.
- If the panorama doesn't appear, verify that the image exists in the public folder and the path is correct.
- If you see a blank screen, make sure A-Frame is properly installed.

## Resources

- [A-Frame Documentation](https://aframe.io/docs/)
- [A-Frame School](https://aframe.io/aframe-school/)
- [A-Frame Examples](https://aframe.io/aframe/examples/)
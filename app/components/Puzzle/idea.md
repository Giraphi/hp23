idea of this animation:

- each image renders a svg, gives this svg an id and sets this is in it's clip-path
- the svg consists of 3 rectangels that are together covering the whole screen
- css's clip path makes everything visible that is covered by a rectangle
- to trigger the animation, scale down the rectangels (e.g. `.rect1{scale(0.12)}`)
- to animate this, apply keyframes

Implement this in a better way with framer motion and AnimatePresence. There's even a <motion.rect> element!

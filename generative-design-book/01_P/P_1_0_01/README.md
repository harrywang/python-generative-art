## About
See this in p5.js web editor:
https://editor.p5js.org/harrywang/sketches/XSD7QUgDh



In this sketch, the x location of your mouse determines the size of the rectangle and the y location of your mouse determines the background of the canvas and the filled color of the rectangle in the middle.

## Related Concepts

### colorMode

\`colorMode()\` changes the way p5.js interprets color data: https://p5js.org/reference/#/p5/colorMode

By default, the parameters for fill(), stroke(), background(), and color() are defined by values between 0 and 255 using the RGB color model: colorMode(RGB, 255).

colorMode(HSB) lets you use the HSB (Hue, Saturation, Brightness) system. By default, this is colorMode(HSB, 360, 100, 100, 1).

colorMode(mode, max1, max2, max3, [maxA])

- mode Constant: either RGB, HSB or HSL, corresponding to Red/Green/Blue and Hue/Saturation/Brightness (or Lightness)
- max Number: range for all values (Optional)
- max1 Number: range for the red or hue depending on the current color mode
- max2 Number: range for the green or saturation depending on the current color mode
- max3 Number: range for the blue or brightness/lightness depending on the current color mode
- maxA Number: range for the alpha (Optional)

## About
See this in p5.js web editor:
https://editor.p5js.org/harrywang/sketches/XSD7QUgDh

- number keys (1-5) control different color segments (default is key 3 with 24 segments)
- hue is set using the angle
- mouse x controls the saturation
- mouse y controls the brightness

You need to understand some basic concepts and functions in trigonometry, check them out after the code block below.

## beginShape(sketch.TRIANGLE_FAN)

beginShape() begins recording vertices for a shape and endShape() stops recording. The value of the kind parameter tells it which types of shapes to create from the provided vertices. With no mode specified, the shape can be any irregular polygon.

TRIANGLE_FAN works with a number of vertices as follows:

start with the center vertex and go clockwise

![p5-TRIANGLE_FAN](https://user-images.githubusercontent.com/595772/83330913-71524a80-a260-11ea-8df3-d816269b6c65.png)

See an example at https://editor.p5js.org/harrywang/sketches/9OKOJUKwG

start with v1 and go clockwise to v2, v3, etc. and the x, y of each vertex is calculated using:

\`\`\`
x = cos(radian(angle)) * radius 
y = sin(radian(angle)) * radius 
\`\`\`
<img width="475" alt="Screen Shot 2020-05-30 at 10 28 42 AM" src="https://user-images.githubusercontent.com/595772/83330908-5f70a780-a260-11ea-8010-ce50f5119a91.png">


<img width="410" alt="Screen Shot 2020-05-29 at 9 23 37 PM" src="https://user-images.githubusercontent.com/595772/83316353-509fdb80-a1f3-11ea-8e9d-ec83fd98a4c1.png">


## Basic concepts and functions in trigonometry

- [Radian](https://en.wikipedia.org/wiki/Radian):

![Circle_radians](https://user-images.githubusercontent.com/595772/83313856-ea608c00-a1e5-11ea-9e9c-17fa7646434a.gif)
- [sine, cosine, tangent](https://en.wikipedia.org/wiki/Trigonometric_functions):

![trig_sin_cos_tan](https://user-images.githubusercontent.com/595772/83313993-71156900-a1e6-11ea-9f27-9268dacedf51.gif)

![Sine_one_period svg](https://user-images.githubusercontent.com/595772/83314275-b4240c00-a1e7-11ea-8b82-9ea3b89cda2b.png)

![2880px-Cosine_one_period svg](https://user-images.githubusercontent.com/595772/83314278-b6866600-a1e7-11ea-9961-0649d9d0550b.png)

![2880px-Tangent-plot svg](https://user-images.githubusercontent.com/595772/83314284-b8502980-a1e7-11ea-8a15-15a095fcea85.png)

![2560px-Unit_circle_angles_color svg](https://user-images.githubusercontent.com/595772/83330390-9218a100-a25c-11ea-8849-6302fa3d542a.png)

![Periodic_sine](https://user-images.githubusercontent.com/595772/83314147-0153ae00-a1e7-11ea-805b-db1161bbc914.png)
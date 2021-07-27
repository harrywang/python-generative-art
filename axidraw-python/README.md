# About
This notebook shows how to setup AxiDraw V3 and use Python to control it to plot a simple SVG.

This tutorial is based on the following tutorials and references:

- https://cdn.evilmadscientist.com/dl/ad/public/AxiDraw_Guide_v40_r3.pdf
- https://www.generativehut.com/post/robots-and-generative-art-and-python-oh-my
- https://www.chromatocosmos.com/post/a-brief-intro-to-generative-art-in-python-and-the-axidraw-plotter
- https://www.generativehut.com/post/axidraw-processing

## Setup Inkscape and Axidraw Driver

Please follow the instructions at https://wiki.evilmadscientist.com/Axidraw_Software_Installation and do the followings:

1. Download and install the latest version of [Inkscape for Mac](https://inkscape.org/) (1.1 tested)
2. Download and run the latest [AxiDraw installer](https://wiki.evilmadscientist.com/Axidraw_Software_Installation) (AxiDraw_Install_Mac_274r1 tested)

## Axidraw via Python

You can setup the environment as follows (tested with Python 3.8+)

```
$ python3 -m venv venv
$ source venv/bin/activate
$ pip install -r requirements.txt
```
then, `jupyter lab` to run the notebook `axidraw-python/axidraw-basics.ipynb` to learn how to setup Axidraw and plot a simple SVG image.

After that, you can look at `axidraw-python/voronoi-art.ipynb` for a more complicated tutorial on generating Voronoi diagram based art like:

![art](https://user-images.githubusercontent.com/595772/127227945-6e172864-345a-4e63-a977-64466acfba5a.png)







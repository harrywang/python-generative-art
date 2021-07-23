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

## Setup the Python API

You can access the official document at https://axidraw.com/doc/py_api

Python 3.8+ with virtual environment. 

```
$ python3 -m venv venv
$ source venv/bin/activate
$ pip install -r requirements.txt
```
then, `jupyter lab` to run the notebook




# About

This tutorial shows how to make generative art using Python and Axidraw pen plotter. 

You should start with `axidraw-python/axidraw-basics.ipynb` notebook, which shows how to setup AxiDraw V3 and use Python to control it to plot a simple SVG.

After that, you can look at `axidraw-python/voronoi-art.ipynb` notebook for a more complicated tutorial on generating art based on Voronoi diagram like:

![art](https://user-images.githubusercontent.com/595772/127227945-6e172864-345a-4e63-a977-64466acfba5a.png)

It's fun to watch the plotting process:

![voronoi-art](https://user-images.githubusercontent.com/595772/127374294-1c657a88-e1e8-4cc6-a0d8-f1965d778734.gif)

This tutorial is based on the following tutorials:

- [https://cdn.evilmadscientist.com/dl/ad/public/AxiDraw_Guide_v40_r3.pdf](https://cdn.evilmadscientist.com/dl/ad/public/AxiDraw_Guide_v40_r3.pdf)
- [https://www.generativehut.com/post/robots-and-generative-art-and-python-oh-my](https://www.generativehut.com/post/robots-and-generative-art-and-python-oh-my)

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

## Plotting via Inkscape

Once you have the SVG ready, you can follow the steps below to plot it via AxiDraw using Inkscape:

Open Inkscape and choose the paper size - here I choose Letter in landscape (this is related to how to position the paper under AxiDraw):

<img width="687" alt="Screen Shot 2021-07-28 at 9 08 40 AM" src="https://user-images.githubusercontent.com/595772/127328431-4aa61162-2ae9-4c1d-9e77-5bec390c7232.png">

Open the SVG:

<img width="757" alt="Screen Shot 2021-07-28 at 9 15 24 AM" src="https://user-images.githubusercontent.com/595772/127328517-497dca47-7831-4d98-84ff-2bf4bf3a79e6.png">

Choose AxiDraw Control:

<img width="733" alt="Screen Shot 2021-07-28 at 9 16 37 AM" src="https://user-images.githubusercontent.com/595772/127328745-b9ea73dd-51dd-48f5-abd8-383adc651f56.png">

Setup AxiDraw using "Raise pen, turn off motors" and move the plotting head to the Home position (see your AxiDraw machine - there is a Home):

<img width="603" alt="Screen Shot 2021-07-28 at 9 17 07 AM" src="https://user-images.githubusercontent.com/595772/127329145-6778fae5-f4b8-431e-953e-ead8a87fa311.png">

Setup the pen using "Pen up" and adjust the pen tip 3mm-6mm above the paper.

<img width="599" alt="Screen Shot 2021-07-28 at 9 17 14 AM" src="https://user-images.githubusercontent.com/595772/127329157-f6d2b574-9bd6-44f7-b3d6-55c04b1760d2.png">

Position the left upper corner of the paper directly underneath the pen tip and start plotting using the Apply button shown below. Note that the plotting will pause if the computer goes to sleep.

<img width="600" alt="Screen Shot 2021-07-28 at 9 31 25 AM" src="https://user-images.githubusercontent.com/595772/127330963-6fd1dd0b-971a-4435-8f17-08c59cfc15e4.png">



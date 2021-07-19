from pyaxidraw import axidraw
ad = axidraw.AxiDraw()

# Load file & configure plot context
ad.plot_setup('five-circles.svg')

# Plotting options can be set, here after plot_setup().
ad.plot_run()
# About
This repo includes my curated (and annotated) code for generative art from different sources - many thanks to the authors for open-sourcing their works.

If you are new to generative art using Python and Axidraw plotter, start with my tutorial at `axidraw-python` folder first.

# Setup

I put a separate requirement.txt file for each folder to make each tutorial self-contained. 

When you use the whole repo, I suggest you setup one virtual environment at the root of this project and install requirements from each sub folder as follows:

```
python3 -m venv venv
source venv/bin/activate
pip install -r axidraw-python/requirements.txt
pip install -r generativehut/gen-art-python/requirements.txt
```
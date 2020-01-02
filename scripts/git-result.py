import json
import pandas as pd
from pandas import DataFrame

total_files = 0
total_languages = []
total_lines = 0

with open('/home/ishant/ishant_linux/my-website-new/scripts/data/new_data.json') as f:
    repos = json.load(f)

for i in range(0, len(repos["full_name"])):
    with open('/home/ishant/ishant_linux/my-website-new/scripts/data/repos/'+str(i)+'.json') as f:
        code = json.load(f)
    for j in range(0, len(code["linesOfCode"])):
        total_lines = code["linesOfCode"][str(j)] + total_lines

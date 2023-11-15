import csv
import json

features = []

with open('ajbpolygons.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        polygons = [float(x.strip()) for x in row[10][1:-1].split(",")]
        ply1 = polygons[0:2][::-1]
        ply2 = polygons[2:4][::-1]
        ply3 = polygons[4:6][::-1]
        ply4 = polygons[6:8][::-1]
        hdi = row[6]
        poverty = row[8]
        feature = {
        "type": "Feature",
         "geometry": {
           "type": "Polygon",
           "coordinates": [
             [ ply1, ply2, ply3, ply4, ply1 ]
             ]
         },
         "properties": {
           "hdi": hdi,
           "pverty": poverty
           }
        }
        features.append(feature)


final = {"type": "FeatureCollection", "features": features}

print(json.dumps(final))
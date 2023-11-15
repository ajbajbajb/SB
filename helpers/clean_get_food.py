import requests
import csv
import json


with open('get_food.csv') as csvfile:

    read_csv = csv.reader(csvfile, delimiter=',', quotechar='"')

    for row in read_csv:
        lat = row[3]
        lon = row[4]

        # print(type(lat.split(".")[0]))
        lats_range = [38, 39, 40, 41, 42]
        longs_range = [-70, -71, -72, -73, -74, -75, -76]

        if int(lat.split(".")[0]) in lats_range and int(lon.split(".")[0]) in longs_range:
            print(row[0], row[1], row[2], lat, lon, sep="	")



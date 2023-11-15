from datetime import datetime
import requests
import json
import time
import csv

key = "AIzaSyDxiN3F6yspKTl3LxnEv5x5Dm6Eid1fumo"

coords = ["40.841944,-73.916294", "40.838048,-73.901865", "40.831814,-73.887780", "40.830515,-73.921791", "40.827138,-73.909080",\
          "40.820902,-73.894994", "40.815706,-73.925570", "40.812588,-73.914576", "40.809210,-73.900835", "40.808170,-73.928662",\
          "40.805832,-73.920760", "40.801154,-73.912859", "40.809210,-73.940342", "40.795696,-73.933815"]

files = ["re1.json", "re2.json", "re3.json"]

def get_rests(key, coords, files):

    url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location={coords}&radius=50000&type=restaurant&key={key}".format(coords=coords, key=key)

    r = requests.get(url)

    r = r.json()

    with open(files[0], 'w') as f:
        json.dump(r, f)

    new_token = r.get("next_page_token")

    print("Done 1 of 3")

    time.sleep(3)

    if new_token is not None:

        url2 = url+"&pagetoken={token}".format(token=new_token)

        r = requests.get(url2)

        r = r.json()

        with open(files[1], 'w') as f:
            json.dump(r, f)

        new_token2 = r.get("next_page_token")

        print("Done 2 of 3")

        time.sleep(3)

        if new_token2 is not None:

            url3 = url+"&pagetoken={token}".format(token=new_token2)

            r = requests.get(url3)

            r = r.json()

            with open(files[2], 'w') as f:
                json.dump(r, f)

            print("Done 3 of 3")

    return True

def write_csv(files):

    results = []

    for file in files:
        with open(file) as f:
            data = json.load(f)
        
            for result in data.get('results'):
                results.append(result)


    for result in results:
        lat = result.get("geometry").get("location").get("lat")
        lng = result.get("geometry").get("location").get("lng")

        # feature = {"type": "Feature", "geometry": {"type": "Point","coordinates": [lat, lng]},"properties": {"name": result.get("name"), "address": result.get("vicinity")}}
        
        row = "{}	{}	{}	{}	{}\n".format(result.get("name"), result.get("price_level"), result.get("vicinity"), lat, lng)

        with open('csv_file.csv','a') as fd:
            fd.write(row)

    print("wrote csv - done")

    return True

def write_geojson():

    features = []

    with open('csv_file.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter='	')

        for row in csv_reader:
            feature = {"type": "Feature", "geometry": {"type": "Point","coordinates": [float(row[4]), float(row[3])]},"properties": {"name": row[0], "address": row[2], "$":row[1]}}
            features.append(feature)

    final_json = {"type": "FeatureCollection","features":features}

    print("wrote geojson - done")

    with open('final_restaurants.geojson','w') as fd:
        json.dump(final_json, fd)

# for coord in coords:
#     get_rests(key, coord, files) 
#     write_csv(files)


write_geojson()
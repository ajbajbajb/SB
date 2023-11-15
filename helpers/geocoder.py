import requests
import csv
import json

key = "AIzaSyDxiN3F6yspKTl3LxnEv5x5Dm6Eid1fumo"


with open('missing.csv') as csvfile:

    read_csv = csv.reader(csvfile, delimiter=',', quotechar='"')

    for row in read_csv:

        address = row[0] + " " + row[2]

        url = "https://maps.googleapis.com/maps/api/geocode/json?address={address}&key={key}".format(address=address, key=key)

        r = requests.get(url)
        r = r.json()

        
        try:
            if r.get('status') != "ZERO_RESULTS": 
                addr = r.get('results')[0].get('formatted_address')
                latlon = r.get('results')[0].get('geometry').get('location')

                print(row[0], addr, latlon.get("lat"), latlon.get("lng"), sep=' ')
            else:
                print("-")

        except Exception:
            print(r)


# print(row[0], )
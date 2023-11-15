import json

results = []

files = ["xx1.json", "xx2.json", "xx3.json"]

for file in files:
    with open(file) as f:
        data = json.load(f)
    
        for result in data.get('results'):
            results.append(result)


for result in results:
    lat = result.get("geometry").get("location").get("lat")
    lng = result.get("geometry").get("location").get("lng")

    print(result.get("name"), result.get("price_level"), result.get("vicinity"), lat, lng, sep="	")


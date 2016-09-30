# Carto Developer Test

(Demo)[https://adelarosab.github.io/carto/]

I've decided to render Fire Company that service the tax lot. As we can find in 
http://www1.nyc.gov/assets/planning/download/pdf/data-maps/open-data/meta_mappluto.pdf

At the beginning I started splitting the functionality in 3 layers:
1. Canvas. It's in charge of painting shapes into canvas.
2. Map. It allows to translate coordinates (geometric ones based in GeoJSON) 
into actual shapes on the canvas layer.
3. Data. Right now, it isn't represented by any class. It's in the mix of 
main file.

I created Polygon which is the shape used in this dataset. I also created 
Rect for testing purposes. 
After that, I created Map class which allow me to assign some coeficients to 
draw GeoJSON geometries in a good scale.

You can follow all my steps through my repo: https://github.com/adelarosab/carto

Future development points:
1. Use web workers to paint different parts of the canvas.
2. Do not paint polygons outside of the canvas viewport. Easily calculated 
thank you to `coordinates` and `offset` attribute of the map.
3. Use css translation and scale to smooth transition between states. In the 
meantime we can use this time to render another canvas context.

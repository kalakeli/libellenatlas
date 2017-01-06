# Libellenatlas NRW

## Description
<p>The Libellenatlas NRW is a project to show sightings of dragonflies in North-Rhine Westphalia. Financed and initiated by the  <a href="http://www.lwl.org/LWL/Kultur/lwl-naturkunde/portal/" target="_blank">Naturkundemuseum Münster</a>, it is intended as a platform for dragonfly enthusiasts to enter their own sightings and find data about their favourite species. Of course, detailed information about the species is also available. As are pictures.</p>
<p>A map of North-Rhine Westphalia (NRW) shows 1000+ raster cells, each cell indicating a quarter of a TK25. TK stands for <a href="https://en.wikipedia.org/wiki/Topographic_map" target="_blank">topographic map</a> and in some states, quarters are added to one TK25 (topographic map at scale 1:25.000), thus about 1000 maps cover NRW. Where specific data about a sighting is available, users are encouraged to enter exact coordinates. Where this does not apply, at least the topographic map and the quarter should be provided.</p> 
<p>One sighting stems from one source, which may be an observer, a biological research station, a literature source, and so on. Each sighting also provides more detailed information, e.g. </p>
<ul>
   <li><strong>time of sighting: </strong> best case would be the specific date; if that is not available, the year is sufficient or a timespan can be given</li>
  <li><strong>place of sighting:</strong> was it in a national reserve, flora fauna habitat area, should there be some remark about it to be saved; <br>mandatory data are geographic coordinates or topographic map plus quarter &rarr; with coordinates provided, a Javascript function will determine the appropriate map plus quarter; with the map provided, an asynchronous request ist sent to read the center coordinates from the database</li>
  <li><strong>kind of sighting:</strong> was the dragonfly hatching, performing its maiden flight, depositing eggs, copulating, forming a tandem, etc.</li>  
</ul>


## Installation
simply grab the gulpfile and run it.
You need to have a src folder as well where CSS and JS files are residing; they will be minified from the src directory when the gulp file is running and watching the folders

## Licence
<p>The project itself is under copyright by the LWL Naturkundemuseum, while the sourcecode is open source.</p>

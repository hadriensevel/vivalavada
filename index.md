---
title: A journey through beer preferences
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
button: Discover the data story 🍺
---

*Beer, standing as the world's most widely consumed alcoholic drink, takes the third spot in overall beverage consumption, surpassed only by water and tea. “("Volume of World Beer Production". European Beer Guide. Archived from the original on 28 October 2006. Retrieved 17 October 2006.)”. However, as a beverage enjoyed worldwide, we believe that beer isn’t just a drink - but a cultural guide. People everywhere sip on this frothy concoction, and the way they enjoy it can vary from place to place and change as the years go by. In this study, we aim to find out exactly what these different preferences are and their evolutions! More specifically, we will identify the beer preferences for each location and analyze how their evaluation and spreading behave over time. Parallel to that, we will zoom out a bit and investigate the ‘global’ beer preferences, which will give us further insights into what the evolution of beer preferences signifies on a larger scale. Furthermore, we want to see which locations exhibit ‘similar’ beer preferences, and how these similarities change over time. In the end, we will try to understand how these similarities and differences are influenced by two factors: the geographical distances and the differences in wealth.*

### The dataset 

The data used for this study is collected from two different beer rating websites, namely BeerAdvocate and RateBeer. The dataset coming from each website includes information about different beers, their corresponding breweries, users, and the ratings that users gave to the beers. We first combined the two datasets into a single dataset and then filtered out the years and locations that offered too small of data to allow for reliable conclusions. In the end, our study is concerned only with the below-given time range and locations:

* Time range: years from 2006 to 2017, including 2006 and 2017.

* Location set: All states of the U.S. except for South Dakota (49 states), Iceland, Denmark, Canada, Norway, Sweden, Belgium, New Zealand, Ireland, Finland, Scotland, Australia, Netherlands, Luxembourg, England, Poland, Croatia, Northern Ireland, Spain, Italy, Germany, France and Brazil.


##### *So, what does a ‘beer preference’ even mean?*

     Now the question arises: “What do we mean by a ‘beer preference’?”. We define the beer preference of a location based on two different criteria:

The first criterion is the preferred beer style and the second is the preferred location of the brewery. For example, if the ratings coming from the users in Luxembourg indicate that they prefer “Imperial Stout” as the beer style and they prefer to drink beers from breweries that are located in the Netherlands, then their beer preference is “Imperial Stout” in terms of the style and “Netherlands” in terms of the brewery location.

For each criterion (beer style or brewery location), we define the “preference” again based on two different criteria: popularity-wise or rating-wise. As the names indicate, for each location the popularity-based approach captures the beer style or brewery location that got the largest amount of ratings, whereas the rating-based approach captures the beer style or brewery location that got the highest average rating.

Since both definitions of preference have two different categories, we end up with four different metrics of beer preference. But don’t worry! To not overwhelm you, we collect each of our findings in groups of four and you will be able to access them using a simple dropdown menu!


##### *Beer Preferences versus Location and Time*

Now, let’s find out what the beer preferences of each location are and how they evolve over time. For this, we first group the beer styles and brewery locations under broader categories so that we can assign them to a meaningful set of colors. Then, we color each location on the world map based on its beer preference. You can use the dropdown menu to look at different metrics, the slider to navigate through the years, and hover your mouse over a location in the map to see its name!
Let’s evaluate our results for each metric briefly:

# Brewery location preference maps
- one map popularity based for brewery locations
- one map rating based for brewery locations


##### Ratings of beer styles: 
We kick off with Belgian Ale reigning supreme in 2006. By 2009, Lambic & Sour Ale claims dominance, starting in North America and spreading to some European countries. Fast forward to 2011, and Lambic & Sour Ale takes control across nearly all locations in North America but loses ground in Europe. Up until 2014, the global beer map is a battleground between Lambic Sour Ale and Belgian Ale. Post-2015, Lambic & Sour Ale blankets the majority of the world. Notably, by 2017, only three styles—Lambic & Sour Ale, Belgian Ale, and Stout—shared the spotlight across the entire globe. It is also interesting to observe that Canada, Norway, and Sweden exhibit similar patterns in their preference shifts for the most part.
##### Popularity of beer styles: 
We begin with Lager as the predominant beer worldwide, facing competition, particularly from Pale Ale in the U.S. and Belgian Ale in Europe. Up until 2011, the scenario remains relatively consistent, albeit with Pale Ale and Belgian Ale gaining ground in the U.S. and Europe, respectively. In 2012, Lager significantly diminished in popularity in the U.S., and Europe became divided among Pale Ale, Pilsener, and Belgian Ale, with Pale Ale emerging as the global favorite. While the situation remains relatively stable until 2017, there's a notable rise in popularity for Lambic & Sour Ale in North America towards the end. Interestingly, it's observed that some Nordic countries, including Iceland, Sweden, and Finland, closely align their preferences with those of North America.
##### Ratings of brewery locations:
In 2006, there existed only two preferred brewery locations in the world, namely Central/Western Europe and North America. Until 2010, breweries in North America gained some popularity in Europe while breweries in Northern Europe started leading the popularity race in North America and Australia instead of breweries in Central/Western Europe. From 2010 to 2017, we see that breweries in North America take over the world in popularity year by year.
##### Popularity of brewery locations:
We begin in 2006 with most of the locations rating their local breweries the highest. However, it can be seen that some states of the U.S. and most of the countries of Europe prefer breweries from Central/Western Europe. As the years go by, we see that almost all locations become more and more “nationalist”, as almost every location rates their local breweries the highest. One interesting example of that are the European countries, mostly favoring breweries in Central/Western Europe in 2006, now rate breweries from their specific location in Europe the highest - East, North or South.

Okay cool, we can check out what kinds of beer different places like on the world map. But wouldn’t it also be interesting to see the “overall” opinion of the world and see how it changes over the years? However, we have to do this wisely. Simply looking at the total number of ratings and their distribution in that year would not represent the preference of the whole world since the locations with high populations heavily dominate the aggregated results.

         Instead, we came up with a much more thoughtful and interesting approach. If the Eurovision Song Contest can do it, so can we! In the Eurovision Song Contest, each country gives points to their top 10 favorite songs. The song that gets the highest number of total points is the winner of the year. We decided to do something similar. For each location, we assign points to their top 10 favorite beer styles or brewery locations. The beer style or brewery location that gets the highest number of points wins the contest. The points are assigned as follows: 12 points for the most preferred beer style or brewery location, 10 points for the second most preferred one, 8 points for the third most preferred one, and so on, the exact rating system used in the contest. This way, we obtain a better representation of the beer preferences of the whole globe. Note that we normally treat each U.S. state as a separate location. However, for the global beer preferences, we treat the whole U.S. as a single location or otherwise the U.S. would have too many votes in the contest.
         
	Below, you can see the global trends versus time in the form of bar chart races! Select your metric of interest, pick your preference, and see if it wins the contest!



# Bar chart races

{% include_relative assets/plots/bar-chart-race.html %}

# Map of trends (clustered)

{% include_relative assets/plots/trends-maps.html %}

# Arrow plot (somewhere)
{% include_relative assets/plots/arrow-graph.html %}

# Simirality graphs
{% include_relative data/html_graphs/similarity_global.html %}

## The 4 graphs
{% include_relative assets/plots/similarity-graphs.html %}


# Beer brotherhood
## Podium
{% include podium.html %}

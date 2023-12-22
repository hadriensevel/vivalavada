---
title: Cheers to Change - Exploring Temporal and Spatial Dynamics in Beer preferences
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
button: Discover the data story 🍺
---


Beer, standing as the world's most widely consumed alcoholic drink, takes the third spot in overall beverage consumption, surpassed only by water and tea. “("Volume of World Beer Production". European Beer Guide. Archived from the original on 28 October 2006. Retrieved 17 October 2006.)”. However, as a beverage enjoyed worldwide, we believe that beer isn’t just a drink - but a cultural guide. People everywhere sip on this frothy concoction, and the way they enjoy it can vary from place to place and change as the years go by. In this study, we aim to find out exactly what these different preferences are and their evolutions! More specifically, we will identify the beer preferences for each location and analyze how their evaluation and spreading behave over time. Parallel to that, we will zoom out a bit and investigate the ‘global’ beer preferences, which will give us further insights into what the evolution of beer preferences signifies on a larger scale. Furthermore, we want to see which locations exhibit ‘similar’ beer preferences, and how these similarities change over time. In the end, we will try to understand how these similarities and differences are influenced by two factors: the geographical distances and the differences in wealth.

## *The dataset*

The data used for this study is collected from two different beer rating websites, namely BeerAdvocate and RateBeer. The dataset coming from each website includes information about different beers, their corresponding breweries, users, and the ratings that users gave to the beers. We first combined the two datasets into a single dataset and then filtered out the years and locations that offered too small of data to allow for reliable conclusions. In the end, our study is concerned only with the below-given time range and locations:

* Time Range : 2006 to 2017 (inclusive)

* Location set:  All states of the U.S. except for South Dakota (49 states), Iceland, Denmark, Canada, 



# Brewery location preference maps
- one map popularity based for brewery locations
- one map rating based for brewery locations

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

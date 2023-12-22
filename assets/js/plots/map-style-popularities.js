async function createMap() {
    // Load the data.
    const world = await d3.json('data/countries-50m.json');
    const countries = topojson.feature(world, world.objects.countries)
    const countrymesh = topojson.mesh(world, world.objects.countries, (a, b) => a !== b)
    const hale = await d3.csv('data/hale.csv');

    // Specify the chart’s dimensions.
    const width = 928;
    const marginTop = 46;
    const height = width / 2 + marginTop;

    // Fit the projection.
    const projection = d3.geoEqualEarth().fitExtent([[2, marginTop + 2], [width - 2, height]], {type: "Sphere"});
    const path = d3.geoPath(projection);

    // Index the values and create the color scale.
    const valuemap = new Map(hale.map(d => [d.name, d.hale]));
    const color = d3.scaleSequential(d3.extent(valuemap.values()), d3.interpolateYlGnBu);

    // Create the SVG container.
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [0, 0, width, height])
        .attr("style", "max-width: 100%; height: auto;");

    // Append the legend.
    // svg.append("g")
    //     .attr("transform", "translate(20,0)")
    //     .append(() => Legend(color, {title: "Healthy life expectancy (years)", width: 260}));

    // Add a path for each country and color it according te this data.
    svg.append("g")
        .selectAll("path")
        .data(countries.features)
        .join("path")
        .attr("fill", d => color(valuemap.get(d.properties.name)))
        .attr("d", path)
        .append("title")
        .text(d => `${d.properties.name}\n${valuemap.get(d.properties.name)}`);

    // Add a white mesh.
    svg.append("path")
        .datum(countrymesh)
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("d", path);

    return svg.node();
}

document.addEventListener('DOMContentLoaded', async () => {
    // Create the map
    const map = await createMap();

    // Add the map to the DOM
    document.querySelector('#map-test').appendChild(map);
});
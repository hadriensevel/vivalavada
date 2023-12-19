document.addEventListener('DOMContentLoaded', async () => {
    const data = await d3.csv('data/bc_popularities_by_year.csv').then(data => {
        const transformedData = {};
        const years = Object.keys(data[0]).slice(0, 12);
        years.forEach(year => {
            transformedData[year] = [];
            data.forEach(row => {
                transformedData[year].push({
                    source: row[year],
                    target: row.location,
                    type: "most_rated"
                });
            });
        });

        return transformedData;
    });

    function linkArc(d) {
        if (d.source === d.target) {
            // Self-linking node: create a loop.
            const x = d.source.x;
            const y = d.source.y;
            const dx = 50; // Offset and size of the loop.
            const dy = 50;
            return `M${x},${y} C${x - dx},${y - dy} ${x + dx},${y - dy} ${x},${y}`;
        } else {
            const r = Math.hypot(d.target.x - d.source.x, d.target.y - d.source.y);
            return `
            M${d.source.x},${d.source.y}
            A${r},${r} 0 0,1 ${d.target.x},${d.target.y}
        `;
        }
    }

    function drag(simulation) {
        function dragstarted(event, d) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event, d) {
            if (!event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }

        return d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);
    }

    // Cell 1 translated into a function
    function createChart(year = 2006) {
        const data_year = data[year];
        const width = 928;
        const height = 600;
        const types = Array.from(new Set(data_year.map(d => d.type)));
        const nodes = Array.from(new Set(data_year.flatMap(l => [l.source, l.target])), id => ({id}));
        const links = data_year.map(d => Object.create(d))

        //const color = d3.scaleOrdinal(types, d3.schemePaired);
        const color = d3.scaleOrdinal(types, ['#1f78b4']);
        console.log(d3.schemePaired);

        const simulation = d3.forceSimulation(nodes)
            .force("link", d3.forceLink(links).id(d => d.id))
            .force("charge", d3.forceManyBody().strength(-400))
            .force("x", d3.forceX())
            .force("y", d3.forceY());

        const svg = d3.create("svg")
            .attr("viewBox", [-width / 2, -height / 2, width, height])
            .attr("width", width)
            .attr("height", height)
            .attr("style", "max-width: 100%; height: auto; font: 12px sans-serif;");

        // Per-type markers, as they don't inherit styles.
        svg.append("defs").selectAll("marker")
            .data(types)
            .join("marker")
            .attr("id", d => `arrow-${d}`)
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 15)
            .attr("refY", -0.5)
            .attr("markerWidth", 6)
            .attr("markerHeight", 6)
            .attr("orient", "auto")
            .append("path")
            .attr("fill", color)
            .attr("d", "M0,-5L10,0L0,5");

        const link = svg.append("g")
            .attr("fill", "none")
            .attr("stroke-width", 1.5)
            .selectAll("path")
            .data(links)
            .join("path")
            .attr("stroke", d => color(d.type))
            .attr("marker-end", d => `url(${new URL(`#arrow-${d.type}`, location)})`);

        const node = svg.append("g")
            .attr("fill", "currentColor")
            .attr("stroke-linecap", "round")
            .attr("stroke-linejoin", "round")
            .selectAll("g")
            .data(nodes)
            .join("g")
            .call(drag(simulation));

        node.append("circle")
            .attr("stroke", "white")
            .attr("stroke-width", 1.5)
            .attr("r", 4);

        node.append("text")
            .attr("x", 8)
            .attr("y", "0.31em")
            .text(d => d.id)
            .clone(true).lower()
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-width", 3);

        simulation.on("tick", () => {
            link.attr("d", linkArc);
            node.attr("transform", d => `translate(${d.x},${d.y})`);
        });

        return {svg: svg.node(), simulation, color};
    }

    // Render the chart
    const {svg, simulation, color} = createChart();
    document.querySelector('#highest-rated-breweries-graph').appendChild(svg);

    // For Cell 5, create a swatch legend (if necessary)
    // You would have to implement this yourself or include the color-legend module
    // function createSwatches() { ... }

    // Start the simulation
    // simulation.on("tick", () => {
    //     svg.selectAll("path").attr("d", linkArc);
    //     svg.selectAll("g").attr("transform", d => `translate(${d.x},${d.y})`);
    // });

    // Handle invalidation if needed (e.g., when the component unmounts)
    // This would depend on your application's architecture

    // Add an event listener to the slider to update the chart
    const slider = document.getElementById('year-slider');
    slider.addEventListener('input', () => {
        const year = slider.value;
        const {svg, simulation, color} = createChart(year);
        // Remove the old chart
        document.querySelector('#highest-rated-breweries-graph svg').remove();
        // Render the new chart
        document.querySelector('#highest-rated-breweries-graph').appendChild(svg);
        // Update the year label
        document.querySelector('#graph-year').innerHTML = year;
    });
});

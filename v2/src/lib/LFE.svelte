<script lang="ts">
  import { extent, line, scaleLinear } from 'd3';

  type DataPoint = [number, number];

  const unwindSeries = (x: number, r: number, iterations: number): DataPoint[] => {
    let series: DataPoint[] = [];
    series.push([0, x]);

    for (let i = 1; i < iterations; i++) {
      const [, population] = series[i - 1];
      const nextPopulation: number = r * population * (1 - population);
      series.push([i, nextPopulation]);
    }

    return series;
  };

  const margin = { top: 20, right: 20, bottom: 20, left: 30 };

  const width = 640 + margin.left + margin.right;
  const height = 202 + margin.bottom + margin.top;
  const generations = 100;

  $: x0 = 0.5;
  $: r = 2.5;

  $: data = unwindSeries(x0, r, generations);

  const xTicks = [] as number[];
  for (let i = 0; i <= generations; i += generations / 10) {
    xTicks.push(i);
  }

  $: xScale = scaleLinear()
    .domain(extent(data, (d) => d[0]) as [number, number])
    .range([margin.left, width - margin.left]);

  const yTicks: number[] = [];
  for (let i = 0; i <= 1; i += 0.1) {
    yTicks.push(i);
  }

  $: yScale = scaleLinear()
    .domain([1, 0])
    .range([margin.top, height - margin.bottom]);

  $: path = line()
    .x((d) => xScale(d[0]))
    .y((d) => yScale(d[1]));
</script>

<h1>The "Logistic Difference Equation"</h1>

<div class="config">
  x0: <input type="number" bind:value={x0} />
  r: <input type="number" bind:value={r} />
</div>

<!--<svg {width} {height} style="border: 1px solid black">-->
<svg {width} {height}>
  <g transform="translate(0,0)">
    <path d={path(data)} fill="none" stroke="currentColor" stroke-width="1.5" />
  </g>

  <!-- y axis -->
  <g transform="translate({margin.left},0)">
    {#each yTicks as tick}
      <g class="tick" opacity="1" transform="translate(0, {yScale(tick)})">
        <line stroke="currentColor" x2="-5" />
        <text dy="0.32em" fill="currentColor" x="{5 - margin.left}" font-size="smaller">
          {tick.toFixed(1)}
        </text>
      </g>
    {/each}

    <path class="axis-line" d={`M-1,${margin.top}H0V${height - margin.top}H-1`} />
  </g>

  <!-- x axis -->
  <g transform="translate(0, {height - margin.bottom})">
    {#each xTicks as tick}
      <g class="tick" opacity="1" transform="translate({xScale(tick)}, 0)">
        <line stroke="currentColor" y2="5" />
        <text dx="-0.32em" dy="0.32em" fill="currentColor" y="10" font-size="smaller">
          {tick}
        </text>
      </g>
    {/each}

    <!--<path class="axis-line" stroke="black" d={`M${margin.left},0h${width - margin.right - margin.left}`} />-->
    <path class="axis-line" d={`M${margin.left},0V-1H${width - margin.right}V0`} />
  </g>
</svg>

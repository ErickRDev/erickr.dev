<script lang="ts">
  import { scaleLinear } from 'd3';

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

  const generateLFEData = (x0: number, iterations: number, sampleSize: number) => {
    const data: DataPoint[] = [];

    for (let r = 0; r < 4.0; r += 0.01) {
      const populationEvolution = unwindSeries(x0, r, iterations);
      const uniquePopulationSizes = new Set<number>();

      for (let i = iterations - sampleSize; i < iterations; i++) {
        const [, population] = populationEvolution[i];
        uniquePopulationSizes.add(population);
      }

      uniquePopulationSizes.forEach((populationSize: number) => data.push([r, populationSize]));
    }

    return data;
  };

  const margin = { top: 20, right: 20, bottom: 20, left: 30 };

  const width = 640 + margin.left + margin.right;
  const height = 202 + margin.bottom + margin.top;

  const x0 = 0.5;
  const iterations = 400;
  const sampleSize = 200;

  const data = generateLFEData(x0, iterations, sampleSize);

  const xScale = scaleLinear()
    .domain([0, 4])
    .range([margin.left, width - margin.left]);

  const xTicks = [] as number[];
  for (let i = 0; i <= 4; i++) {
    xTicks.push(i);
  }

  const yScale = scaleLinear()
    .domain([1, 0])
    .range([margin.top, height - margin.bottom]);

  const yTicks: number[] = [];
  for (let i = 0; i <= 1; i += 0.1) {
    yTicks.push(i);
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Square+Peg">
</svelte:head>

<h1 style="font-family: Amatic SC">The "Logistic Difference Equation"</h1>

<svg {width} {height}>
  <g transform="translate(0,0)">
    {#each data as dataPoint}
      <circle r="1" cx={xScale(dataPoint[0])} cy={yScale(dataPoint[1])} fill="black" />
    {/each}
  </g>

  <!-- y axis -->
  <g transform="translate({margin.left},0)">
    {#each yTicks as tick}
      <g class="tick" opacity="1" transform="translate(0, {yScale(tick)})">
        <line stroke="currentColor" x2="-5" />
        <text dy="0.32em" fill="currentColor" x={5 - margin.left} font-size="smaller">
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

    <path class="axis-line" d={`M${margin.left},0V-1H${width - margin.right}V0`} />
  </g>
</svg>

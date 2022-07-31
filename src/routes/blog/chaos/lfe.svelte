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
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Square+Peg" />
</svelte:head>

<div class="container">
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
</div>

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo ligula, scelerisque sit amet ornare nec, vestibulum sed velit. Donec quis convallis dui, et varius urna. Nullam pharetra faucibus dictum. Quisque ornare risus vel leo tristique fringilla. Cras rutrum tortor ut vestibulum rhoncus. Praesent non consequat sem. Proin vitae ultrices ipsum, ut malesuada dui.
</p>

<p>Duis imperdiet ex sit amet tristique tincidunt. Sed eleifend consectetur odio. Vivamus hendrerit condimentum tellus, in porta mi tincidunt sit amet. Mauris sed lobortis velit. Pellentesque pharetra hendrerit tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam enim lectus, eleifend non mi nec, tincidunt sollicitudin nisl. Nullam eu diam quis ligula viverra consequat. Proin est leo, vulputate at tempus sed, varius nec leo. Donec ullamcorper turpis vitae venenatis vehicula. Quisque ullamcorper venenatis ipsum, non sodales lacus pharetra ac. Nulla sodales feugiat tortor.</p>

<p>Nullam nec scelerisque orci. Ut ac pharetra dui. Mauris hendrerit, mi at tempus sollicitudin, enim erat molestie quam, in venenatis nisl mauris quis turpis. Sed vestibulum diam sit amet leo maximus, et gravida metus lobortis. Quisque convallis turpis sit amet lectus efficitur ultrices. Praesent aliquet eu magna eget consequat. Nam quis nibh nunc.</p>

<p>Quisque vehicula enim sed fermentum lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum id neque vel vehicula. Nunc quis laoreet elit. Integer dapibus justo interdum lectus mattis vestibulum. Sed at pulvinar tortor. Nullam vitae metus non quam volutpat luctus a a massa. Donec malesuada massa ac urna egestas, in ultrices nunc consectetur. Praesent sagittis pellentesque dolor, at placerat ipsum vehicula sit amet. Vivamus nec eros vel sem egestas molestie.</p>

<p>Suspendisse ultricies arcu eget tempor convallis. Vestibulum rhoncus sed justo ut ornare. Praesent lobortis, mi sit amet molestie consequat, risus orci ultrices nisi, et interdum lacus diam id libero. Maecenas at tincidunt mauris. Aenean ut risus id eros tincidunt blandit. Mauris ut dolor in augue porttitor imperdiet non tincidunt enim. In quis lobortis eros. Donec imperdiet massa vel mattis lobortis. Etiam ut finibus ligula. Suspendisse non neque elementum purus rhoncus iaculis nec ac leo. Praesent fringilla eu mauris nec pharetra. Etiam tempus, dui interdum sollicitudin mollis, nunc urna iaculis erat, sit amet dapibus nisi tellus quis odio. Ut vitae nulla mattis, porta risus non, ornare erat. Nulla ante neque, consequat in tristique et, sollicitudin scelerisque arcu. Nullam vehicula, ipsum in ornare egestas, odio odio vehicula ipsum, a porta urna urna ac odio.</p>

<p>Donec metus libero, ullamcorper sed neque et, scelerisque efficitur quam. Duis malesuada, tortor in ornare accumsan, arcu nunc fermentum turpis, sit amet bibendum dui lorem at est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean ac feugiat ligula. Mauris rhoncus, mi vitae auctor efficitur, lorem enim volutpat lacus, vel aliquam justo lacus eget felis. Fusce sed posuere felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam elementum accumsan ullamcorper. Duis finibus sapien velit, ut suscipit ipsum varius ut. Nam leo neque, dignissim quis nibh non, varius iaculis elit. Mauris pretium rhoncus efficitur. Phasellus quis ex fermentum, volutpat lorem vel, tincidunt mauris.</p>

<p>Proin luctus id orci at tincidunt. Aenean eu libero quis elit facilisis aliquet. Nulla at elit ex. Donec aliquam tincidunt suscipit. Fusce viverra nisi risus, id convallis tortor efficitur ut. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ultrices, neque convallis scelerisque convallis, tortor eros vulputate massa, non efficitur nisi ante et magna. Maecenas gravida libero eu ipsum convallis eleifend. Vivamus ut tempor nibh. Fusce sed semper mauris, vel tempus eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum molestie non massa non aliquam. Nam est dui, ultrices et rutrum et, aliquam porttitor odio.</p>

<p>Sed blandit velit nisi, eget mollis diam hendrerit at. Vestibulum vestibulum posuere est sed scelerisque. Sed non odio id massa cursus tempor. Proin quis lacinia nunc, pellentesque blandit tortor. Fusce ut consequat tellus, non imperdiet sem. Maecenas quis porttitor nunc. Donec hendrerit vulputate augue nec viverra. Praesent aliquet sed neque vitae tincidunt. Proin sollicitudin nulla non tempus vestibulum. Morbi et tincidunt mauris. Sed ac pharetra sem. Proin dictum, nisi eget tincidunt ultricies, tellus leo semper odio, quis hendrerit sem ante at elit. Nullam quis mi vitae enim imperdiet pellentesque. Vestibulum sollicitudin egestas massa eget ultricies. In venenatis semper ultricies.</p>

<p>Sed lacinia euismod leo, eget rhoncus mi scelerisque ac. Vestibulum dapibus maximus efficitur. Nullam et condimentum turpis, a aliquam nunc. Aliquam erat volutpat. Morbi libero libero, molestie nec massa ut, gravida dictum tellus. Vestibulum id varius felis. Morbi ut mauris eget purus accumsan sagittis non et nisl.</p>

<p>Nunc pharetra, urna et semper dictum, dolor risus malesuada odio, sed consectetur orci tortor a tortor. Nunc luctus vehicula bibendum. Curabitur gravida eros in bibendum volutpat. Suspendisse id magna gravida, lacinia orci in, dignissim purus. Nam placerat vitae tellus ac vehicula. Mauris a dictum magna, non posuere justo. In enim eros, lacinia eu sem eu, pretium ullamcorper tortor. Vivamus luctus aliquet risus, at vulputate orci sagittis id. Fusce orci sapien, lacinia non imperdiet et, porttitor ut orci. Proin dictum mattis felis non porta. Vivamus gravida ipsum lorem, quis tincidunt arcu viverra vel. Nunc eleifend hendrerit feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vitae elementum ante, sed lobortis mauris. Maecenas et tempus quam. Cras convallis sodales quam, id accumsan nulla porttitor in. Aliquam nec mattis tortor. Maecenas non ligula vehicula, blandit eros quis, tristique lectus. Aenean ullamcorper dignissim sapien. Suspendisse eget dolor tincidunt, egestas quam sit amet, viverra dui. Aenean tristique nec dui sit amet scelerisque. Cras vestibulum laoreet nisl, non efficitur lacus eleifend viverra. Donec vitae varius augue. Suspendisse lacinia neque lobortis, dictum ipsum non, consectetur turpis.</p>

<p>Suspendisse mattis tortor dictum imperdiet rhoncus. Sed lobortis libero odio, sit amet lobortis nunc viverra sed. Donec congue odio a quam congue, quis aliquam nisl tempor. Fusce in magna et leo dapibus congue. Vestibulum ut ornare ligula, at blandit dolor. Suspendisse et lobortis mi. Cras auctor orci magna, a venenatis ipsum bibendum eu.</p>

<p>Fusce vel tincidunt sapien, lobortis suscipit massa. Curabitur purus tellus, vulputate vel ante non, interdum porttitor tortor. Aliquam vel condimentum quam, quis dictum purus. Ut eu pulvinar ex. Proin dictum eros sodales, faucibus neque et, posuere nisl. Nunc et varius lectus. Maecenas sit amet eleifend justo. Sed ante sapien, aliquet non sapien eu, pharetra iaculis lorem. Suspendisse potenti. Duis lorem felis, mollis eu molestie id, lobortis vulputate massa. Vivamus ut ante eros.</p>

<p>Donec lacinia urna vitae eros tincidunt pulvinar. Fusce venenatis risus nec nisi bibendum ullamcorper. Vestibulum pharetra, sapien sed rutrum viverra, justo sem bibendum ipsum, ut posuere massa leo quis nunc. Morbi volutpat mattis erat. Cras at felis lectus. Mauris quis lectus arcu. Nunc mollis enim a neque porttitor auctor. Donec et nibh odio. Nunc at arcu neque. Integer venenatis rhoncus eros id accumsan. Nullam tellus mi, placerat sed tortor eget, blandit feugiat augue. Duis id maximus massa, nec varius nulla.</p>

<p>Aliquam mollis lacus diam, eu convallis tellus placerat ut. Sed scelerisque, turpis eget suscipit blandit, ex lorem fringilla leo, at viverra sem purus ac eros. Aenean neque purus, pulvinar ac arcu non, porta dapibus lacus. Nam justo ipsum, aliquet a bibendum at, consectetur nec velit. Aenean efficitur mauris eu suscipit ultrices. Duis euismod a ipsum iaculis luctus. In risus nunc, condimentum et tincidunt eu, pellentesque a est. Maecenas in mollis tellus. Nullam ullamcorper nisl in tortor condimentum, nec sollicitudin tortor vestibulum.</p>

<p>Aenean sed magna ut felis ornare commodo. Duis imperdiet sodales ligula, ac sodales massa sollicitudin nec. Ut dignissim libero in lorem placerat rhoncus. In a nisi non enim tincidunt cursus in ac dui. Nunc efficitur augue consectetur posuere eleifend. Nulla lacinia eget augue sed ornare. Fusce sit amet urna fermentum, commodo purus eget, vulputate nunc. Pellentesque bibendum, elit non consectetur porttitor, nisl libero malesuada magna, non pulvinar arcu lacus quis orci. Maecenas nec tincidunt sem. Sed vitae laoreet augue. Donec in scelerisque velit, ut sagittis elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce imperdiet dolor a velit viverra, et pellentesque felis dictum.</p>

<p>Nullam eget viverra eros. Vestibulum maximus, massa ac pretium egestas, lectus velit faucibus nibh, sed iaculis arcu sem non erat. Suspendisse eu gravida ligula. Fusce sit amet purus id est fringilla viverra. Sed sit amet mi pharetra ex faucibus faucibus sed ut ex. Aenean imperdiet nec nisl sed tempus. Fusce convallis odio tortor, eget lacinia purus pulvinar vitae. Vivamus luctus efficitur odio at consectetur. Vivamus convallis iaculis tincidunt. Nullam neque augue, gravida non enim vitae, ornare finibus justo. Quisque non accumsan eros, et imperdiet dui.</p>

<p>Nunc condimentum libero et felis bibendum, et porttitor nisl efficitur. Nullam justo nisl, rutrum ut dui quis, scelerisque pellentesque elit. Duis euismod ullamcorper dui, at sodales massa commodo a. Aenean massa augue, gravida eu arcu ut, accumsan blandit justo. Suspendisse odio augue, lobortis at dictum ac, molestie id nibh. Curabitur in fringilla metus. Nulla sagittis elit id eros placerat semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

<p>Proin vitae tincidunt mauris. Curabitur elementum dui ut ex molestie congue. Cras quis erat a purus gravida rhoncus at vitae lacus. Phasellus lacinia pretium gravida. Nunc vitae sapien accumsan, tincidunt nulla ut, lacinia velit. Pellentesque aliquam ligula ac lacus bibendum, non consectetur lorem mattis. Morbi quis ipsum ac ante pretium semper. Aliquam a purus vel lectus maximus condimentum. Suspendisse a arcu ut mauris consectetur accumsan vitae eget nisi. Etiam iaculis sem ornare, efficitur dolor at, convallis quam. Fusce sit amet purus ac quam dictum ullamcorper. Praesent tincidunt, magna eu interdum commodo, quam lectus dictum lectus, ac blandit tellus arcu eget diam. Cras placerat odio ut lacus pharetra condimentum.</p>

<p>Suspendisse potenti. Donec vitae elit orci. Vivamus in enim sed dui aliquam tincidunt. Cras sed neque consectetur, scelerisque lorem eleifend, dapibus libero. Curabitur nisi metus, consectetur nec magna laoreet, consequat varius diam. Sed commodo malesuada enim a posuere. Nunc fermentum in mauris nec iaculis. Suspendisse at dolor at augue consectetur commodo ut nec sem.</p>

<style>
  .container {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
</style>

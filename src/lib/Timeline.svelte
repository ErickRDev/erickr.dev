<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import * as d3 from 'd3';
  import { scaleTime } from 'd3-scale';

  let visible = true;
  let height = 600;
  let width = 400;

  type WorkExperience = {
    company: string;
    position: string;
    startDate: Date;
    endDate?: Date;
  };

  const experiences: WorkExperience[] = [
    {
      company: 'BigDataCorp',
      position: 'Software Developer',
      startDate: new Date('2013-05-01'),
      endDate: new Date('2016-09-01')
    },
    {
      company: 'Bigu.tech',
      position: 'Freelance Web Developer',
      startDate: new Date('2017-11-01'),
      endDate: new Date('2018-11-01')
    },
    {
      company: 'UFRJ/Siemens',
      position: 'Data Analyst Researcher',
      startDate: new Date('2018-10-01'),
      endDate: new Date('2019-10-01')
    },
    {
      company: 'BigDataCorp',
      position: 'Sr. Software Engineer',
      startDate: new Date('2019-01-01'),
      endDate: new Date('2021-05-01')
    },
    {
      company: 'RunaHR',
      position: 'Sr. Software Engineer',
      startDate: new Date('2021-05-01'),
      endDate: new Date('2022-09-01')
    },
    { company: 'MessageBird', position: 'Sr. Software Engineer', startDate: new Date('2022-09-05') }
  ];

  /* const extents = d3.extent(experiences.map((e) => e.startDate)) as [Date, Date]; */

  const timeScale = scaleTime()
    .domain([new Date(2012, 1, 1), new Date(2023, 1, 1)])
    .range([0, height]);

  const timeAxis = d3.axisLeft(timeScale);

  onMount(() => {
    const svg = d3
      .select('#timeline-container')
      .append('svg')
      .attr('width', width)
      .attr('height', `${height + 20}px`);

    // axis
    svg
      .append('g')
      .attr('transform', `translate(${width / 2}, 0)`)
      .call(timeAxis);

    // data
    /* svg */
    /* .append('g') */
    /* .attr('stroke', 'black') */
    /* .selectAll('rect') */
    /* .data(experiences) */
    /* .join('rect') */
    /* .attr('x', (_) => width / 2 + 20) */
    /* .attr('y', (d) => timeScale(d.startDate)) */
    /* .attr('width', 10) */
    /* .attr('height', 10) */
    /* .text('Hello'); */

    svg
      .append('g')
      .selectAll('text')
      .data(experiences)
      .join('text')
      .attr('x', (_) => width / 2 + 20)
      .attr('y', (d) => timeScale(d.startDate))
      .text((d) => d.company);
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Amatic+SC" />
</svelte:head>

{#if visible}
  <h1 id="title">Experience over the years</h1>
  <div transition:fade id="timeline-container" />
{/if}

<style>
  #timeline-container {
    margin-top: 10px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  }

  #title {
    text-align: center;
    font-family: 'Amatic SC';
  }
</style>

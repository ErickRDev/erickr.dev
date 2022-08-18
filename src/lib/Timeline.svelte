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

  const drawTenureCurve = (exp: WorkExperience, i: number): string => {
    const y1 = timeScale(exp.startDate);
    const y3 = timeScale(exp.endDate || new Date(2023, 1, 1));
    const y2 = (y3 + y1) / 2;

    const rightFacing = i % 2 == 0;

    const x = rightFacing ? width / 2 + 10 : width / 2 - 10;

    /* const d = ` */
      /* M ${rightFacing ? x-1 : x+1} ${y1-2} */
      /* C ${x} ${y1-2}, ${x} ${y1-1}, ${x} ${y1} */
      /* L ${x} ${y2-5} */
      /* C ${x} ${y2-5}, ${x} ${y2}, ${rightFacing ? x+5 : x-5} ${y2} */
      /* C ${rightFacing ? x+5 : x-5} ${y2}, ${x} ${y2}, ${x} ${y2+5} */
      /* L ${x} ${y3} */
      /* C ${x} ${y3}, ${x} ${y3+1}, ${rightFacing ? x-1 : x+1} ${y3+2} */
    /* `; */

    const d = `
      M ${rightFacing ? x-1 : x+1} ${y1-2}
      C ${x} ${y1-2}, ${x} ${y1-1}, ${x} ${y1}
      C ${x} ${y1}, ${x} ${y2}, ${rightFacing ? x+5 : x-5} ${y2}
      C ${rightFacing ? x+5 : x-5} ${y2}, ${x} ${y2}, ${x} ${y3}
      C ${x} ${y3}, ${x} ${y3+1}, ${rightFacing ? x-1 : x+1} ${y3+2}
    `;

    return d;
  };

  const totalExperienceRange = [new Date(2012, 1, 1), new Date(2023, 1, 1)];

  const timeScale = scaleTime()
    .domain(totalExperienceRange)
    .range([0, height]);

  const timeAxis = d3.axisLeft(timeScale);

  timeAxis.tickSize(0);
  timeAxis.tickValues([]);

  onMount(() => {
    const svg = d3
      .select('#timeline-container')
      .append('svg')
      .attr('width', width)
      .attr('height', `${height + 20}px`);

    // Axis
    svg
      .append('g')
      .attr('transform', `translate(${width / 2}, 0)`)
      .call(timeAxis);

    // Company names
    svg
      .append('g')
      .selectAll('text')
      .data(experiences)
      .join('text')
      .attr('x', (_, i) => (i % 2 == 0 ? width / 2 + 30 : width / 2 - 120))
      .attr('y', (d) => (timeScale(d.startDate) + timeScale(d.endDate || new Date(2023, 1, 1))) / 2)
      .text((d) => d.company);

    // Tenure curves
    svg
      .append('g')
      .selectAll('path')
      .data(experiences)
      .join('path')
      .attr('d', drawTenureCurve)
      .attr('fill', 'none')
      .attr('stroke-width', '1px')
      .attr('stroke', 'black');
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

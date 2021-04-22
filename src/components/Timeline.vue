<template>
    <div v-if="show">
        <h1 class="canvas-title">PROFESSIONAL EXPERIENCE</h1>
        <ul id="timeline">
            <!-- row 1 -->
            <li class="stem-node stem-node-1"></li>
            <!-- row 2 -->
            <li class="stem stem-1"></li>
            <li class="timeline-item timeline-item-1 timeline-item-right">
                <p>May 2013 - Sep 2016</p>
                <p>@BigDataCorp</p>
                <a>..more details</a>
            </li>
            <!-- row 3 -->
            <li class="stem-node stem-node-2"></li>
            <!-- row 4 -->
            <li class="stem stem-2"></li>
            <li class="timeline-item timeline-item-2 timeline-item-left">
                <p>Nov 2017 - Nov 2018</p>
                <p>@BiguTech</p>
                <a>..more details</a>
            </li>
            <!-- row 5 -->
            <li class="stem-node stem-node-3"></li>
            <!-- row 6 -->
            <li class="stem stem-3"></li>
            <li class="timeline-item timeline-item-3 timeline-item-right">
                <p>Aug 2018 - Aug 2019</p>
                <p>@UFRJ/Siemens</p>
                <a>..more details</a>
            </li>
            <!-- row 7 -->
            <li class="stem-node stem-node-4"></li>
            <!-- row 8 -->
            <li class="stem stem-4"></li>
            <li class="timeline-item timeline-item-4 timeline-item-left">
                <p>Jan 2019 - current</p>
                <p>@BigDataCorp</p>
                <a>..more details</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Timeline',
    props: [
        'show'
    ]
}
</script>
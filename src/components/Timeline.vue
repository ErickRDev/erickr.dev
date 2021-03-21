<template>
    <div v-if="show">
        <h1 class="canvas-title">PROFESSIONAL EXPERIENCE</h1>
        <ul id="timeline">
            <!-- row 1 -->
            <li class="stem-node stem-node-1"></li>
            <!-- row 2 -->
            <li class="stem stem-1"></li>
            <li
                id="bigdata-1-experience"
                class="timeline-item-1 timeline-item-right"
            >
                <div>
                    <p>May 2013 - Sep 2016</p>
                    <p>@BigDataCorp</p>
                </div>
            </li>
            <!-- row 3 -->
            <li class="stem-node stem-node-2"></li>
            <!-- row 4 -->
            <li class="stem stem-2"></li>
            <li class="timeline-item-2 timeline-item-left">
                <div>
                    <p>Nov 2017 - Nov 2018</p>
                    <p>@BiguTech</p>
                </div>
            </li>
            <!-- row 5 -->
            <li class="stem-node stem-node-3"></li>
            <!-- row 6 -->
            <li class="stem stem-3"></li>
            <li class="timeline-item-3 timeline-item-right">
                <div>
                    <p>Aug 2018 - Aug 2019</p>
                    <p>@UFRJ/Siemens</p>
                </div>
            </li>
            <!-- row 7 -->
            <li class="stem-node stem-node-4"></li>
            <!-- row 8 -->
            <li class="stem stem-4"></li>
            <li class="timeline-item-4 timeline-item-left">
                <div>
                    <p>Jan 2019 - current</p>
                    <p>@BigDataCorp</p>
                </div>
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
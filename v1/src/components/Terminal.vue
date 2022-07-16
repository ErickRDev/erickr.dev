<template>
    <div id="terminal">
        <div id="terminal-top-bar">
            <button @click="collapsed = !collapsed">-</button>
        </div>
        <div id="terminal-content" v-if="!collapsed">
            <div id="stdout-content" class="stack stack-stdout" v-if="mode === 'stdout'" @click="focusInput">
                <p v-for="line in stdout" v-bind:key="line.id">
                    {{line}}
                </p>
                {{cmdPrefix}}<input id="cmd" autofocus v-model="cmd" @keyup.enter="executeCommand"/>
            </div>
            <div id="gui" class="stack" v-if="mode === 'gui'" :quit="this.quitCli">
                <div id="gui-title-bar">
                    <h1>ABOUT ME</h1>
                </div>
                <div id="gui-content">
                    <ul class="stack stack-gui-menu-items" v-if="selected === 'projects'">
                        <li>
                            <a @click="selected = 'pomodoro'">POMODORO CLI</a>
                        </li>
                        <li>
                            <a @click="selected = null">BACK</a>
                        </li>
                    </ul>
                    <ul class="stack stack-gui-menu-items" v-else>
                        <li>
                            <a @click="selected = 'xp'">PROFESSIONAL EXPERIENCE</a>
                        </li>
                        <li>
                            <a @click="selected = 'projects'">PROJECTS</a>
                        </li>
                        <li>
                            <a @click="selected = null">RESET</a>
                        </li>
                        <li>
                            <a @click="this.quitCli">EXIT</a>
                        </li>
                    </ul>
                </div>
                <teleport to="#canvas">
                    <transition name="pomodoro-animation">
                        <h1 class="canvas-title" v-if="selected === 'pomodoro'">POMODORO</h1>
                    </transition>
                    <pomodoro v-bind:show="selected === 'pomodoro'"></pomodoro>
                    <transition name="timeline-animation">
                        <timeline v-bind:show="selected === 'xp'"></timeline>
                    </transition>
                </teleport>
            </div>
        </div>
    </div>
</template>

<script>
import Typed from 'typed.js'

import Timeline from './Timeline'
import Pomodoro from './Pomodoro'

let FEEDBACKS = [
    '(╯°□°）╯︵ ┻━┻'
];

export default {
    name: 'Terminal',
    components: {
        Timeline,
        Pomodoro
    },
    data() {
        return {
            mode: 'stdout',
            cmdPrefix: '$ ',
            cmd: null,
            collapsed: false,
            stdout: [],
            feedbacksIndex: 0,
            selected: null
        }
    },
    mounted() {
        new Typed('#cmd', {
            strings: [ 'echo $ABOUT_ME' ],
            typeSpeed: 20,
            showCursor: true,
            onComplete: () => {
                this.focusInput();
                this.cmd = 'echo $ABOUT_ME';
                document.getElementById("cmd").dispatchEvent (new KeyboardEvent ('keyup', {
                    key: 'enter',
                    keyCode: 13
                }));
            }
        })
    },
    methods: {
        focusInput() {
            document.getElementById("cmd").focus();
        },
        executeCommand() {
            console.log("Executing command: " + this.cmd);

            this.stdout.push(this.cmdPrefix + this.cmd);

            switch (this.cmd) {
                case 'echo $ABOUT_ME':
                    this.stdout.push('Howdie! Welcome to my little corner on the internet! My name is Erick and I\'m a computer scientist who loves everything-software!');
                    break;
                case 'whoami':
                    this.stdout.push('Erick Rocha');
                    break;
                case 'ls':
                    break;
                case 'clear':
                    this.stdout.length = 0;
                    break;
                case '?':
                    break;
                case '.':
                    this.mode = 'gui';
                    break;
                default:
                    this.stdout.push(FEEDBACKS[this.feedbacksIndex % FEEDBACKS.length]);
                    this.feedbacksIndex += 1;
                    break;
            }

            this.cmd = '';
        },
        quitCli() {
            this.mode = 'stdout';
        }
    }
}
</script>

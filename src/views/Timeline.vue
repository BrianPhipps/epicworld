<template>
    <v-timeline

    style="background-color: rgb(102, 115, 123);
background-image: url('https://www.transparenttextures.com/patterns/cartographer.png');
background-image: url('https://www.transparenttextures.com/patterns/dimension.png');
  background-repeat: repeat;
  height: 100%;
    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */"
    >
        <v-timeline-item
                v-for="(time, i) in times"
                :key="i"
                :color="time.color"
                :icon="time.icon"


        >
            <span slot="opposite" class="font-weight-bold" style="text-shadow: 2px 2px #000000; font-size: larger">{{time.time}}</span>
            <v-card
                    class="rounded-card"
                    :color="time.color"
                    dark
                    ripple
                    raised
            >
                <v-card-title class="title font-weight-bold">{{time.title}}</v-card-title>
                <v-card-text class="white" style="color:black">
                    <p>{{time.body}}</p>
                    <v-btn
                            :color="time.color"
                            class="mx-0"
                            outlined
                    >
                        Button
                    </v-btn>
                </v-card-text>
            </v-card>
        </v-timeline-item>
    </v-timeline>
</template>

<script>


    export default {
        name: 'Timeline',
        components: {
        },
        data: () => ({
            times: [

                {
                    color: 'purple darken-1',
                    icon: 'mdi-book-variant',
                    title: 'The age of innocence',
                    body: 'A time mostly forgotten',
                    time: '???'
                },

            ],

        }),
        methods: {
            foo: function () {

            }
        }
    }
</script>

<style>
    .theme--dark.v-timeline .v-timeline-item__dot {
        background: #ffffff;
    }
    .theme--dark.v-timeline::before {
        background: rgb(222, 222, 222);
    }
</style>
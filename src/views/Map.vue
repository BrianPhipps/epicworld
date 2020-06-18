<template>

    <v-container dense
    style="background-color: rgb(214,212,170);
    background-image: url('https://www.transparenttextures.com/patterns/cartographer.png');

    background-repeat: repeat;
    height: 100%;
    max-width: 100%;
    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */"
    >
        <v-row>
            <v-col
                    v-for="(Map, index) in Maps"
                    :key="index"
                    cols="12"
                    sm="4"
            >
                <v-card
                        class="mx-auto"
                        max-width="400"
                >
                    <v-img
                            class="white--text align-end"
                            height="200px"
                            :src= "Map.src"
                    >
                        <v-card-title>{{Map.name}}</v-card-title>
                    </v-img>

                    <v-card-actions>
                        <v-btn
                                color="orange"
                                text
                                @click="getOverlay(Map.src)"
                        >
                            Explore
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-overlay  :value="overlay">
            <div class="mapHolder" >
                <v-btn
                        class="mapClose"
                        icon
                        @click="overlay = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <img class="map" :src="overlayMap" >
            </div>
        </v-overlay>
    </v-container>



</template>

<script>


    export default {
        name: 'Map',
        components: {
        },
        data: () => ({
            Maps: [
                {
                    name:"Harlan",
                    src: require(`@/assets/map/HarlanMap.png`)
                },
                {
                    name:"Harlan and Outlands",
                    src: require(`@/assets/map/HarlanAndOutlands.png`)
                }

            ],
            overlay: false,
            overlayMap: ''

        }),
        methods: {
            getOverlay: function (mapSrc) {
                this.overlay = !this.overlay;
                this.overlayMap = mapSrc;


            }
        }
    }
</script>

<style>
    img.map {
        max-width: 100%;
        max-height: 100vh;
        padding: 2vh;
    }
    .mapHolder{
        display: grid;
    }
    button.mapClose{
        position: absolute;
    }
</style>
<!--style="background-color: rgb(102, 115, 123);-->
<!--background-image: url('https://www.transparenttextures.com/patterns/cartographer.png');-->

<!--background-repeat: repeat;-->
<!--/* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */"-->

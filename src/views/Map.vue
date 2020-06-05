<template>
    <div>
    <v-container>
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
        <v-overlay :value="overlay" >
            <v-container>
                <v-btn
                        icon
                        @click="overlay = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-img :src="overlayMap" ></v-img>
            </v-container>
        </v-overlay>
    </v-container>

    </div>
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
                    src: require(`../assets/HarlanMap.png`)
                },
                {
                    name:"Harlan and Outlands",
                    src: require(`../assets/HarlanAndOutlands.png`)
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
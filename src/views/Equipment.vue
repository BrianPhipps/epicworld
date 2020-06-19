<template>
    <v-container
            style="background-color: rgb(81,122,81);
background-image: url('https://www.transparenttextures.com/patterns/simple-dashed.png');
  background-repeat: repeat;
    height: 100%;
    max-width: 100%;
    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */"
            class="px-2"
    >
        <v-expansion-panels>
            <v-expansion-panel
                    v-for="(ItemFound,index) in ItemsFound"
                    :key="index"
                    style="background-color: rgb(48,75,48);
background-image: url('https://www.transparenttextures.com/patterns/simple-dashed.png');
  background-repeat: repeat;"
            >
                <v-expansion-panel-header
                        class="font-weight-black"
                >{{ItemFound.Found}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row
                            v-for="(ItemType, index) in ItemFound.ItemsType"
                            :key="index"
                    >
                        <v-subheader
                            class="font-weight-bold"
                         >{{ItemType.name}}</v-subheader>
                        <v-list-item
                                v-for="(item, index) in ItemType.items"
                                :key="index"

                                inset
                        >
                            <v-list-item-subtitle

                            >{{item}}</v-list-item-subtitle>
                        </v-list-item>
                    </v-row>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-container>
</template>

<script>


    export default {
        name: 'Equipment',
        components: {
        },
        data: () => ({
            ItemsFound:[
                {
                    Found: "Alchemist Shop",
                    ItemsType: [
                        {
                            name:"Potions for Sale",
                            items: [
                                "Bewitching 75gp",
                                "Climbing 30gp",
                                "Healing 50gp, 150gp, 250gp",
                                "Animal Friendship 200gp",
                                "Fire Breath 350gp",
                                "Hill Giant Strenght 300gp",
                                "Resistance 500gp",
                                "Water Breathing 400gp"
                            ],
                        },
                        {
                            name:"Rings and Clothing for Sale",
                            items: [
                                "Ring of Jumping 250gp",
                                "Ring of Swimming 300gp",
                                "Ring of Warmth 480gp",
                                "Ring of Water Walking 500gp",
                                "Cloak of Billowing 100gp",
                                "Cloak of Fashions 100gp",
                                "Cloak of Elvenkind 300gp",
                                "Cloak of Protection 500gp",
                                "Eyes of the Eagle 500gp",
                                "Goggles of Night 400gp",
                                "Boots of Elvenkind 400gp",
                                "Boots of False Tracks 60gp"
                            ],
                        },
                        {
                            name:"Wonderous Items",
                            items: [
                                "Prone Arrow 50gp",
                                "Drift Orb 200gp",
                                "Collapsing Pole 100gp",
                                "Rope of Mending 100gp",
                                "Clockwork Amulet 450gp",
                                "Bag of Holding 2500gp",
                            ],
                        },
                    ],
                },
                {
                    Found: "Wizards Towers",
                    ItemsType: [
                        {
                            name:"Spells for Sale",
                            items: [
                                "Cantip 15gp",
                                "1st Level 25gp",
                                "2nd Level 150gp",
                                "3rd 400gp",
                                "4th 800gp",

                            ],
                        },
                    ],
                },

            ],
            overlay: false,
            overlayMap: '',
            profile: false,
            profileImg: '',
            profileBio: '',
            profileStats: ''

        }),
        methods: {
            getOverlay: function (mapSrc) {
                this.overlay = !this.overlay;
                this.overlayMap = mapSrc;
            },
            getProfile: function (profileImg, profileBio, profileStats, profileName) {
                this.profileImg = profileImg;
                this.profileBio = profileBio;
                this.profileStats = profileStats;
                this.profileName = profileName;
                this.profile = true;
            },
            closeProfile: function () {
                this.profileImg = '';
                this.profileBio = '';
                this.profileStats = '';
                this.profileName = '';
                this.profile = false;


            }
        }
    }
</script>
<style>
    .profile img {
        width: 100%;
        height: auto;
    }
    .profileImgText {
        display: inline;
        text-shadow: 2px 2px #000000;
    }
</style>
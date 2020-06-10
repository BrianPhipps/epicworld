<template>
    <v-container >
        <v-expansion-panels v-if="!profile">
            <v-expansion-panel
                    v-for="(CharacterType,index) in CharacterTypes"
                    :key="index"
            >
                <v-expansion-panel-header>{{CharacterType.type}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                        <v-col
                                v-for="(Character, index) in CharacterType.Characters"
                                :key="index"
                                cols="12"
                                sm="4"
                        >
                            <v-card
                                    class="mx-auto"
                                    max-width="200"
                            >
                                <v-img
                                        class="white--text align-end"
                                        height="250px"
                                        :src= "Character.src"
                                >
                                    <v-card-title class="profileImgText">{{Character.name}}</v-card-title>
                                </v-img>
                                <v-card-subtitle v-if="Character.class !== ''">
                                    <div  v-if="Character.class !== ''">{{Character.class}}</div><br>
                                    <div v-if="Character.race !== ''">{{Character.race}}</div>
                                </v-card-subtitle>

                                <v-card-actions>
                                    <v-btn
                                            color="orange"
                                            text
                                            @click="getProfile(Character.src, Character.bio, Character.stats, Character.name)"
                                    >
                                        Profile
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <v-container class="profile" fluid v-if="profile">
            <v-btn
                    class="profileClose"
                    icon
                    @click="closeProfile()"
            >
                <v-icon title="Go Back">mdi-arrow-left-bold-circle-outline</v-icon>
            </v-btn>
            <v-row>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-card>
                        <v-img :src="profileImg">
                            <v-card-title class="profileImgText">{{profileName}}</v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-card>
                        <span v-if="profileStats !== ''">
                        <v-list-item-subtitle
                                v-for="(stat,index) in profileStats"
                                :key="index"
                                class="font-weight-bold pa-0 ma-0"
                        >
                            {{stat.title}}
                            <v-card-text
                                    v-for="(item,index) in stat.items"
                                    :key="index"
                                    class="pa-0 ma-0"
                            >
                                {{item}}
                            </v-card-text>
                        </v-list-item-subtitle>
                            </span>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                        cols="12"
                >
                    <v-card>
                        {{profileBio}}
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>


    export default {
        name: 'Character',
        components: {
        },
        data: () => ({
            CharacterTypes:[
                {
                    type: "Player Characters",
                    Characters: [
                        {
                            name:"Morden",
                            src: require(`@/assets/pc/Morden.jpg`),
                            class: "Wizard: Abjuration",
                            race: "Human",
                            stats: [
                                {
                                    title: "Reputation",
                                    items: [
                                        "Friend: The Earl",
                                        "Enemy: Bek, a wizard at wizard’s tower who has it out for him"
                                    ]
                                },
                            ],
                            bio: "Loves to view the world through the eyes of his owl familiar, and is particularly fond of the Minor Illusion cantrip."


                        },
                        {
                            name:"Basha",
                            src: require(`@/assets/pc/Bosha.jpg`),
                            class: "Druid: Circle of the Moon",
                            race: "Human",
                            stats: [
                                {
                                    title: "Reputation",
                                    items: [
                                        "Friend: Trista at the wizard’s tower",
                                        "Enemy: The Earl’s steward"
                                    ]
                                },
                            ],
                            bio: "Would generally rather be in the woods in his preferred form as a panther."

                        },
                        {
                            name:"Farron",
                            src: require(`@/assets/pc/Farron.jpg`),
                            class: "Fighter: Two-Weapon",
                            race: "Human",
                            stats: [
                                {
                                    title: "Reputation",
                                    items: [
                                        "Friend: Otto, the Alchemist",
                                        "Enemy: Gildus, a rival at the Garrison"
                                    ]
                                },
                            ],
                            bio: "Raised as a farmer, left to join the Garrison. He is determined to prove himself."

                        },
                        {
                            name:"Failius",
                            src: require(`@/assets/pc/Byron.jpg`),
                            class: "Cleric: War Domain",
                            race: "Elf",
                            stats: [
                                {
                                    title: "Reputation",
                                    items: [
                                        "Friend: a follower called Crispus",
                                        "Enemy: The high priest Fallus"
                                    ]
                                },
                            ],
                            bio: "A haughty, but good natured elf that likes lightning a little too much."

                        },
                        {
                            name:"Temethue",
                            src: require(`@/assets/pc/Tristan.jpg`),
                            class: "Ranger: Archery School",
                            race: "Elf",
                            stats: [
                                {
                                    title: "Reputation",
                                    items: [
                                        "Friend: The Baron, a barkeep at the tavern",
                                        "Enemy: Guz, a fishmonger who hates elves"
                                    ]
                                },
                            ],
                            bio: "Dedicated to helping people. Friend to Basha. Wicked with a bow."

                        }

                    ],

                },
                {
                    type: "Non-Player Characters",
                    Characters: [
                        {
                            name:"Brenn",
                            src: require(`@/assets/npc/Brenn.png`),
                            class: "",
                            race: ""

                        },
                        {
                            name:"Buster",
                            src: require(`@/assets/npc/Buster.png`),
                            class: "",
                            race: ""
                        },
                        {
                            name:"Head Church Guild ??",
                            src: require(`@/assets/npc/ChurchGuild.png`),
                            class: "",
                            race: ""
                        },
                        {
                            name:"Head Church Guild ??",
                            src: require(`@/assets/npc/ChurchGuildMan.png`),
                            class: "",
                            race: ""
                        },
                        {
                            name:"Head Mechant Guild",
                            src: require(`@/assets/npc/mechantsGuild.png`),
                            class: "",
                            race: ""
                        },
                        {
                            name:"Crispusr",
                            src: require(`@/assets/npc/Crispus.png`),
                            class: "",
                            race: ""
                        },
                        {
                            name:"Earl",
                            src: require(`@/assets/npc/Earl.png`),
                            class: "",
                            race: ""
                        },
                        {
                            name:"Gildus",
                            src: require(`@/assets/npc/Gildus.png`),
                            class: "",
                            race: ""
                        },
                        {
                            name:"Owyn",
                            src: require(`@/assets/npc/Owyn.png`),
                            class: "",
                            race: ""
                        },
                        {
                            name:"Song",
                            src: require(`@/assets/npc/Song.png`),
                            class: "",
                            race: ""
                        },
                        {
                            name:"Telman",
                            src: require(`@/assets/npc/TelmanCommander.png`),
                            class: "",
                            race: ""
                        },
                        {
                            name:"Wizard Guild",
                            src: require(`@/assets/npc/WizardsGuild.png`),
                            class: "",
                            race: ""
                        }
                    ],
                },
                {
                    type: "Enemeies",
                    Characters: [
                        {
                            name:"Female Orc",
                            src: require(`@/assets/enemies/NaheeTheCunning.png`),
                            class: "",
                            race: ""
                        },
                        {
                            name:"Red Priest",
                            src: require(`@/assets/enemies/RedPriest.jpg`),
                            class: "",
                            race: ""
                        },
                        // {
                        //     name:"Farron",
                        //     src: require(`@/assets/pc/Farron.jpg`),
                        //     class: "Fighter: Two-Weapon",
                        //     race: "Human"
                        // },
                        // {
                        //     name:"Failius",
                        //     src: require(`@/assets/pc/Byron.jpg`),
                        //     class: "Cleric: War Domain",
                        //     race: "Elf"
                        // },
                        // {
                        //     name:"Temethue",
                        //     src: require(`@/assets/pc/Tristan.jpg`),
                        //     class: "Ranger: Archery School",
                        //     race: "Elf"
                        // }

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
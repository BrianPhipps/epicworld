<template>
    <v-container
            style="background-color: rgb(79,109,123);
background-image: url('https://www.transparenttextures.com/patterns/escheresque.png');
  background-repeat: repeat;
    height: 100%;
    max-width: 100%;
    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */"
            class="px-2"
    >
        <v-expansion-panels v-if="!profile">
            <v-expansion-panel
                    v-for="(CharacterType,index) in CharacterTypes"
                    :key="index"
                    style="background-color: rgb(17,18,25);
background-image: url('https://www.transparenttextures.com/patterns/escheresque.png');
  background-repeat: repeat;"
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
                                <v-card-subtitle v-if="Character.class !== ''"  class="pa-1 ma-1" >
                                    <div  v-if="Character.class !== ''">{{Character.class}}</div>
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
                    sm="3"
                >
                    <v-card>
                        <v-img :src="profileImg">
                            <v-card-title class="profileImgText">{{profileName}}</v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
                <v-col
                    cols="12"
                    sm="9"
                >
                    <v-card>
                        <span v-if="profileStats !== ''">
                        <v-list-item-subtitle
                                v-for="(stat,index) in profileStats"
                                :key="index"
                                class="font-weight-bold pa-2 ma-0"
                        >
                            {{stat.title}}
                            <v-card-text
                                    v-for="(item,index) in stat.items"
                                    :key="index"
                                    class="pa-1 ma-0"
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
                    <v-card
                            class="pa-3"
                            v-html="profileBio"
                    >
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
                                        "Enemy: Bek, a wizard at wizard’s tower who has it out for him",
                                        "Loves to view the world through the eyes of his owl familiar, and is particularly fond of the Minor Illusion cantrip."
                                    ]
                                },
                            ],
                            bio: "<p>Spending the day with the Earl somehow brought me to a city council meeting. At the meeting I saw many people I had seen before but never had talked to. One person I was happy to see was Bosha. One of the issues that came up at the meeting was the missing wine wagon for the upcoming festival, Finding Day. I don’t know why the Earl thinks finding me is so important? People will always be disappointed in me. I am weak and I am not good at talking. Out of the blue the Earl suggested I should go with a small band of people to discover what has become of the festival’s wagon. I am not sure what I can do but it sounds fun. I hope I don’t slow them down.\n</p>" +
                                "<p>Bosha and Tementhue walked with me back to the Wizard’s Tower. After saying goodbye and agreeing to meet in the morning for our quest. Finally the part of the day I was waiting for. I was going to sneak around and leave the wizards the sweets I had gotten from the Earl. Bek caught me putting the sweets I had for him on his desk and hurled insults at me. Picking the candy off the ground. I put it back on his desk and ran out. \n</p>" +
                                "\n" +
                                "\n" +
                                "\n" +
                                "<p>I awoke early and summoned my familiar. I decided to change him from a ferret to an owl because I thought it would be fun to see through her eyes as we traveled. Saying goodbye to Trista and some other wizard, I met with Bosha and Tementhue. We headed out on King’s Road with my horse Chip from the Earl. There was two other people with us name Phailius and Farron. I am not sure I can trust them yet. \n</p>" +
                                "<p>\tAbout a half day's ride on Kings Road Forron decided to stop at Cider Springs to ask the elder if they had seen or heard of the festival wagon passing by.  Elder had not seen the wagon but was very upset about his missing chickens. He promised a special elixir for the chickens' return and justice to the one that stole them. He went on to say he thought it was Tager in the High Hills but some party members thought it was raccoons. I flew my owl around and saw a very interesting looking building under a relaxed guard but we left before investigating more. \n</p>" +
                                "<p>\tFurther down the road we came to a place often called The Fangs. A beautiful place where for miles crimson rock came up like wolf canines. Out of the corner of my eye I noticed what seemed like wagon wheel marks in the dirt. Flying my owl high I saw that the marks went on before disappearing behind the red earth that jets up to the sky. I promptly told Bosha and the party headed down the trail following the marks. Clinging to Bosha I saw and heard through my owl for some time before seeing something move very fast next to Tementhue. Returning to my senses I saw Temunthue had been injured by some kind of spike trap. Going at about half speed the party found three more traps. Then through my owl sense I saw creatures I had never seen before. Most were about three feet tall, had red skin with scales. Three others were bigger, about six feet tall and had smooth greenish skin. They all looked humanoid and spoke either a different language or my owl was not close enough to hear them. I was moving closer to these new creatures when everything went black. Panicking I jumped back to my senses and put my owl into her pocket dimension. \n</p>" +
                                "<p>\tIn fear I told them what I had seen. We decided to send Tementhue to scout ahead and get more information about these new creatures. Successfully observing these creatures  Tementhue told us how many and where they were. He also said that they had stolen the festival's wagon and were currently eating the horse and drinking the wine. Bosha, Tementhue, and I thought it would be best to sneak around to the right of the thieves. While Phailius and Farron go in from the left to confront them head on. Hidden I could see Farron speak with the bigger of the creatures where it seems a duel was proposed. Most duels I had seen did not involve blood shed but this duel looked like a battle to the death. Fearing the worst I created a minor illusion to hide us three. Then Tementhue let an arrow fly that sunk deep into the green dueling creature's chest. From that point chaos exploded and all the creatures ran to attack us. Phailius ran forward and let loose lightning from his hand leaving behind charred corpses. Farron's sword swung swiftly cutting down the oncoming assault. Tementhue’s arrows zoomed through the air and hit their mark. Bosha called a whip of thorns to hit and pull them closer to us. What was I going to do? Was this right? They were running at me with a sword in hand so I made fire that I would use for cooking, formed it into a ball and threw it at them. \n</p>" +
                                "<p>\tAfter the battle I look around at the creatures and tried to make sense of it. Scanning one of the big green ones I found what looked like a map. I quickly gave it to Bosha who then gave it to Farron. Bosha asked me to form two floating discs to carry the wine. I remember creating the disc in the past to help with activities Bosha and I had done. I guess stumbling upon that book written by Tenser was not a waste of time. Farron and Tementhue went back for the horses and wagon while I made the floating discs and others loaded them up. Also, I am not sure how but we managed to capture one of the big green ones. At some point it awoke and said something about our doom and the red priestess. I must look into that.\n</p>" +
                                "<p>\tWe met the others and made our way back home. I flew my owl around and noticed someone, like the green ones, had been watching us during the battle. They then trailed off with several of the red ones and disappeared. Phailius created light because it had become dark. On the way home the darkness seemed to hold the eyes of the creatures we had encountered. I stayed close to the wagon, on my horse, where Bosha was. \n</p>" +
                                "<p>\tWhen I got home and was in my room, every time I closed my eyes to sleep all I could see were horrors. I saw the malice on their faces with intent to kill. I saw the pain they suffered from our injuries. I saw the lifeless bodies with blank stares.\n</p>"


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
                                        "Enemy: The Earl’s steward",
                                        "Would generally rather be in the woods in his preferred form as a panther."
                                    ]
                                },
                            ],
                            bio: '<p>It was well after midnight when they returned to Harlan, delivered Morden to the Wizard\'s Tower (and a very grumpy Trista who was displeased with this entire excursion), and secured the orc scout at the Garrison.</p>'+
'<p>Basha looked at Tementhue, “I need time in the woods to clear my mind and ponder the ill omens we encountered today.” Tementhue nodded, and without delay they went deep into the woods to the east of town.</p>'+
'<p>Basha settled into meditation at the edge of an ancient river. He reached out with all of his senses to the natural world that surrounded him. The rush of water, the wind in the trees, the light from that evening’s full moon, even the dull thwang and thud of Tementhue’s bow as he diligently practiced bled into a kind of oneness. Basha had experienced this before—the melting of his consciousness into the greatness of nature.</p>'+
'<p>But what happened next was unlike anything he had ever experienced.</p>'+
'<p>As Basha sat his meditation, the full moon turned blood red, the shadows around him deepened, and fell images seemed to sneak through the night—darkness turned to life, shadow made motion. Basha was afraid. Then a vision of the boy, like a bright light broke through the darkness and shook him from his trance.</p>'+
'<p>Hours had passed and the red glow of daybreak was in the east. Basha knew the universe had given him a vision. Evil was now upon them, peace was a thing of the past, and the rivers and roads would run with the blood he saw in the moon that night. And, somehow, the boy—Morden—was at the very center of what would soon come to be. That was why he found him. Morden was already a powerful mage, far more gifted in magic than Basha would ever be, but he was meant to help him, to protect him. He knew what he must do</p>.'+
'<p>After sharing his vision with Tementhue, the pair of them ranged quickly through the woods to the Druid Circle. There Basha sought audience with the leader of his order, a dwarven women named Diesa. He told Diesa all he had seen, and requested entrance into the Circle of the Moon. “I know it is early Diesa, and I have much to learn. But I know I am meant to help the boy. You know I have long ranged in the woods with my bond-brother Tementhue. I must range further. I must deepen my understanding of the forms of the beasts we have seen in our journeys.”</p>'+
'<p>Diesa was surprised by the earnestness of Basha’s entreaty. He was typically distant, quiet, reserved. She was also alarmed at his story and the vision he had. Her people were long-lived enough that she grew up with her grandmother’s stories of the great wars. Diesa did not relish the idea that such a time might be upon them again. But if what Basha said held any truth, it would be best if they were all prepared.</p>'+
'<p>She agreed that Basha should join the Circle of the Moon. That night at the height of the full moon, there in the Druid’s Circle, she took him deep into a trance. She chanted the ancient Druidic words that she and the others of their order knew. She guided Basha through a complex sequence of visualization exercises. She taught him to open his mind to possibilities he had not realized existed. She trained him to think of himself not as “Basha” but as an extension of the natural world, a part of all things.</p>'+
'<p>Basha felt the magic flowing through him. He knew he was no longer one distinct creature but a part of the whole, a multitude. Basha was not this body or this mind. Basha was whatever form Basha needed to be. He breathed deeply, slowly, quietly and took his first Wild Shape: The Panther. A black cat to battle the oncoming darkness. He bowed his head to Diesa then looked at Tementhue, and without a spoken word between them they darted away into the night. Diesa smiled.</p>'


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
                            name:"Head Artisan Guild",
                            src: require(`@/assets/npc/ChurchGuild.png`),
                            class: "",
                            race: ""
                        },
                        {
                            name:"Head Church Guild ",
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
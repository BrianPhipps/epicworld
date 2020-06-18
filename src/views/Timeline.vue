<template>
    <v-timeline

    style="background-color: rgb(66,123,117);
background-image: url('https://www.transparenttextures.com/patterns/cartographer.png');
background-image: url('https://www.transparenttextures.com/patterns/dimension.png');
  background-repeat: repeat;
  height: 100%;
    /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */"
    class="px-2"
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
<!--                    <v-btn-->
<!--                            :color="time.color"-->
<!--                            class="mx-0"-->
<!--                            outlined-->
<!--                    >-->
<!--                        Button-->
<!--                    </v-btn>-->
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
                    color: '#9D9515',
                    icon: ' mdi-brightness-5',
                    title: 'The age of innocence',
                    body: 'A time mostly forgotten',
                    time: '???'
                },
                {
                    color: '#52252f',
                    icon: ' mdi-skull',
                    title: 'The age of darkness',
                    body: ' Elvish historian Elric studied the age of darkness and it’s stories his writing states: “During the age of darkness humanity, dwarf and elf did little more than survive. Beasts with wicked appetites roamed freely, lairs of the foulest creatures flourished and bands of orc wandered the land looking only to inflict misery.  Many times man (elf,dwarf, or human) was little better than the beasts they fought.”',
                    time: '600?-1463'
                },
                {
                    color: '#482252',
                    icon: 'mdi-sword-cross',
                    title: 'The age of conflict',
                    body: 'Dravo the dwarven  general during the final conflict in year 1973 and The Burning of New Hammer told his troops holding the final tower: “Someday some fool will think nothing about the cost of peace, but we know it.  It’s the blood of countless sons, the tears of nameless widows, it’s standing in a path when you can’t win the battle, holding the gate when it’s wiser to flee from it, the cost is greater than any one man can pay... but today at this tower we pay a portion of it.”. Of course we only know his speech because some one ran away before the tower fell. ',
                    time: '1464-2103'
                },
                {
                    color: '#3f657d',
                    icon: 'mdi-flower-tulip-outline',
                    title: 'The age of peace',
                    body: 'Melrig the Charming, a human bard of immense popularity, started the common thought that the past wasn’t nearly as dangerous as we once thought.  “Our ancestors were Superstitious blundering buffoons, they claimed that every shadow was a different beast, that every enemy was a snarling orc, and that every unknown was a demon waiting to strike. The only enemy we had to overcome was our foolishness.”',
                    time: '2103-2453'
                },
                {
                    color: '#479e9a',
                    icon: 'mdi-hand',
                    title: 'Introductions',
                    body: 'The characters all meet one another in the council chambers, where one council member notes that a wine shipment has gone missing.\n' +
                        'Farron and Failius take up the call to retrieve the stolen wine.\n' +
                        'The Earl decides that this would be a good adventure for his young friend Morden to go on, and asks Basha and Tementhue to join the party to protect Morden.\n',
                    time: 'Episode 1'
                },
                {
                    color: '#999930',
                    icon: 'mdi-barn',
                    title: 'Tagger',
                    body: 'The characters set out the next morning after having been fitted out with horses and a wagon to retrieve the missing goods.\n' +
                        'On their way they pass through the town of Cider Springs where they meet Elder Brice who complains viciously of a man named Tagger who he accuses of stealing chickens. Elder Brice offer the adventurers a reward if they track down Tagger and retrieve his stolen chickens.\n' +
                        'The group declines and carries on with their mission to find the wine.\n',
                    time: 'Episode 1'
                },
                {
                    color: '#ae3f4b',
                    icon: 'mdi-skull',
                    title: 'First Battle',
                    body: 'Morden, looking through the eyes of his owl familiar finds evidence of where a wagon veered off the road into some brush around The Fangs.\n' +
                        'Led by Morden (who is doing reconnaissance through his owl) Basha and Temethue take the lead with Farron and Falius just behind them on the trail the wagon left.\n' +
                        'A trap is triggered that injures Tementhue, but not badly. The remaining traps along the way are disabled.\n' +
                        'The characters ultimately come upon an encampment of orcs that seem to rule over bands of kobolds. A half-orc woman takes her kobolds and leaves for reasons that are not completely clear.\n' +
                        'Ultimately our party encounters the orcs and kobolds ultimately defeating them and saving the remaining wine. A captured orc says the following before going completely silent:\n' +
                        '\n' +
                        '\t\t"Jaruk the brutal has united the tribes\n' +
                        '\t\tThe red priest serves him\n' +
                        '\t\tYour days of peace are over"\n' +
                        '\n' +
                        'Though night has fallen and Farron’s horse is missing, the party goes back to Harlan with the captured orc.\n',
                    time: 'Episode 1'
                },
                {
                    color: '#9f6b35',
                    icon: 'mdi-account-alert',
                    title: 'High Alert',
                    body: 'The council members are scandalized by the news brought back by the party and don’t even initially believe it to be true.\n' +
                        'Eventually they are convinced, and despite efforts to contain the news it is leaked all over town.\n' +
                        'Harlan doubles down on security for a time, but memory is short and the world has been at peace for too long. After a month with no signs of danger life goes more or less back to normal.\n',
                    time: 'Episode 2'
                },
                {
                    color: '#b49b4c',
                    icon: 'mdi-barley',
                    title: 'Fall Festival',
                    body: 'Around this time, the Fall Festival comes along: A major event held in Harlan where people from all over the area come to be regaled with shows, fortune tellers, tests of strength, and more.\n' +
                        'Our adventurers attend the festival along with the rest of the town, and each has a slightly different adventure in store.\n' +
                        'Farron wins duel with his nemesis Glidus, only deepening the divide between them.\n' +
                        'After a stellar start at a test of his archery skills, Tementhue has a bad miss but receives a medal nevertheless.\n' +
                        'Morden tests his intelligence in the puzzle room, and succeeds blowing the minds of the folks that watch.\n' +
                        'Bashsa ends up with a somewhat unfortunate Hello Kitty tattoo on his bicep. He was hoping for a panther.\n' +
                        'Failius has the most interesting encounter of all. He goes to the fortune teller’s tent, to have his fortune read. During the reading the teller’s eyes go white, she falls and the table and says:\n' +
                        '\n' +
                        '\t\t"Betrayal. Fire. Loss.\n' +
                        '\t\tBeware of the hags bargain.\n' +
                        '\t\tBlood. Death. War.\n' +
                        '\t\tJaruk’s sword thirsts.\n' +
                        '\t\tPain. Death. Loss.\n' +
                        '\t\tThe Foundling. The Cleric. The Elf. The Fighter. The Druid."\n',
                    time: 'Episode 2'
                },
                {
                    color: '#7d2929',
                    icon: 'mdi-chess-bishop',
                    title: 'Enter Red Priest',
                    body: 'chaos erupts at the festival when a priest dressed all in red released red smoke that send the animals in the show into a violent fit. The animals then start attacking everyone at the festival.\n' +
                        'The adventurers intervene. And after many unfortunate die rolls, eventually turn the tides in their favor and subdue the beasts.\n' +
                        'Once the immediate threat is dealt with, Morden looks through his owls eyes to scout around and see if he can find any trace of the people who were responsible for the chaos.\n' +
                        'He finds a man putting a child into a bag and hauling the boy away.\n' +
                        'Morden jumps on Basha’s back while he is in dire wolf form, and they run off to catch the man. The others follow in hot pursuit.\n' +
                        'They subdue him, release the child, and eventually the man admits that he made a bargain with a hag who demanded the child.\n' +
                        'Eventually, the characters discover that children all over town were kidnapped. By whom and for what end, is not yet clear.\n',
                    time: 'Episode 2'
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
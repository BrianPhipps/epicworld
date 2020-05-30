<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-compass-rose</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>      <router-link to="/">Map</router-link> </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>      <router-link to="/">Characters</router-link> </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-timeline-text</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>      <router-link to="/">Timeline</router-link> </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
<!--            <v-icon>mdi-bottle-tonic</v-icon>-->
          <v-icon>mdi-sword</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>      <router-link to="/">Equipment</router-link> </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            clipped-left

    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
      <v-toolbar-title>Great Advanture</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
<!--      <v-container-->
<!--              class="fill-height"-->
<!--              fluid-->
<!--      >-->
<!--        <v-row-->
<!--                align="center"-->
<!--                justify="center"-->
<!--        >-->
<!--          <v-col class="shrink">-->
<!--            <v-tooltip right>-->
<!--              <template v-slot:activator="{ on }">-->
<!--                <v-btn-->
<!--                        :href="source"-->
<!--                        icon-->
<!--                        large-->
<!--                        target="_blank"-->
<!--                        v-on="on"-->
<!--                >-->
<!--                  <v-icon large>mdi-code-tags</v-icon>-->
<!--                </v-btn>-->
<!--              </template>-->
<!--              <span>Source</span>-->
<!--            </v-tooltip>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->
    </v-content>

<!--    <v-footer app>-->
<!--      <span>&copy; 2020</span>-->
<!--    </v-footer>-->
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>


<!--<template>-->
<!--  <div id="app">-->
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->
<!--  </div>-->
<!--</template>-->

<!--<style lang="scss">-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--}-->

<!--#nav {-->
<!--  padding: 30px;-->

<!--  a {-->
<!--    font-weight: bold;-->
<!--    color: #2c3e50;-->

<!--    &.router-link-exact-active {-->
<!--      color: #42b983;-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->

<template>
  <header class="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light row">
        <div class="navbar-brand">
          <logo></logo>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarHeader">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <nuxt-link class="nav-link profitoro-link" to="/">Home </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link profitoro-link" to="about">About </nuxt-link>
            </li>            
            <li class="nav-item">
              <nuxt-link class="nav-link profitoro-link" :class="{disabled:!isAuthenticated}" to="statistics">Statistics </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link profitoro-link" :class="{disabled:!isAuthenticated}" to="workouts">Workouts </nuxt-link>
            </li>
          </ul>
          <form class="buttons-holder">
            <div v-if="isAuthenticated" class="nav-link profitoro-link" @click="hideShowSubmenu" @mouseleave="hideSubmenu">              
              <div class="scene" >
                <div class="login-card" v-bind:class="{ withTransform: !showSubmenu }">                  
                  <img class="login-card__face login-card__face--front" :src="photoURL" alt="Avatar">
                  <div class="container">
                    <img class="login-card__face login-card__face--back" :src="photoURL" alt="Avatar">
                    <div class="login-text">{{displayName}}</div>
                  </div>
                </div>              
                <div v-show="showSubmenu" class="dropdown">
                  <div class="dropdown-menu">
                    <ul>
                      <li class="nav-item">
                        <div class="nav-link profitoro-link" @click="onLogout">Logout</div>
                      </li>
                      <li class="nav-item">
                        <nuxt-link class="nav-link profitoro-link" to="settings">Settings</nuxt-link>
                      </li>
                    </ul>
                  </div>
                </div>
                </div>
            </div>
            <span v-if="!isAuthenticated" class="nav-link profitoro-link" @click="onLogout">Go to the start page</span>
          </form>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import Logo from '~/components/common/Logo'

  export default {
    data () {
      return {
        showSubmenu: false
      }
    },
    name: 'header-component',
    computed: {
      ...mapGetters({photoURL: 'getPhotoURL', displayName: 'getDisplayName', isAuthenticated: 'isAuthenticated'})
    },
    methods: {
      ...mapActions(['logout']),
      onLogout () {
        this.logout()
        this.$router.push('/')
      },
      hideShowSubmenu () {
        this.showSubmenu = !this.showSubmenu
      },
      hideSubmenu () {
        this.showSubmenu = false
      }
    },
    components: {
      Logo
    }
  }
</script>
<style lang="scss">
  @import "../../assets/styles/base/colors";
  @import "../../assets/styles/base/variables";
  @import "../../assets/styles/vendors/flex";
  @import "../../assets/styles/vendors/bootstrap/functions";
  @import "../../assets/styles/vendors/bootstrap/variables";
  @import "../../assets/styles/vendors/bootstrap/mixins";

  .header {
    height: $header-height;
    color: $color-primary;
    margin-bottom: 20px;

    @include media-breakpoint-down(md) {
      height: auto;
      min-height: $header-md-height;
      background-color: $color-white;
    }
    .nav-item {
      list-style: none;
    }
    .container {
      height: 100%;
    }
    .nuxt-link-active {
      font-weight: bold;
    }
    .nav-link.profitoro-link {
      color: rgba($color-primary, 0.7);
      cursor: pointer;

      @include media-breakpoint-down(md) {
        padding-right: 0;
        padding-left: 0;
      }
      &:hover,
      &:active,
      &:focus {
        color: $color-primary;
      }
      &.disabled {
        cursor: default;
        color: $nav-link-disabled-color;
      }
    }
    .buttons-holder {
      margin-left: 60px;

      @include media-breakpoint-down(md) {
        margin-left: 0;
      }
    }
    .scene {
      width: 100px;
      height: 100px;
      perspective: 600px;      
      vertical-align: middle;
    }

    .login-card {
      width: 100%;
      height: 100%;
      transition: transform 1s;
      transition-delay: 0s;
      transform-style: preserve-3d;      
      cursor: pointer;
      border: 0;
    }

    .login-card.withTransform:hover {
      transform: rotateY(180deg);
      transition-delay: 2s;
    }

    .login-card__face {
      position: absolute;
      width: 100%;
      height: 100%;
      color: white;
      text-align: center;
      font-weight: bold;
      font-size: 10px;
      backface-visibility: hidden;
      border-radius: 50px;
      padding: 2px;
      border: 1px solid black;
    }

    .login-card__face--front {      
      background-color:white;      
    }

    .login-card__face--back {
      background: rgba(241, 93, 89, .7);
      transform: rotateY(180deg) scaleX(-1);
      opacity: 0.2;
    }    

    .login-text {
      transform: rotateY(180deg);      
      font-weight: 900;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
    }

    .container {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .dropdown {
      display: inline-block;
      position: relative;
    }

    .dropdown-menu {
      display: block;
      position: absolute;
      border: 0;
      left: 100px;
      top: -100px;
      min-width: 100%;
    }

    .dropdown:hover .dropdown-menu {
      display: block;
    }

    .dropdown-menu .nav-link {
      padding: 0
    }


  }
</style>

<template>
  <div class="side-nav navbar-dark bg-dark">
  
    <div class="navbar shadow-sm mb-3">
      <div class="container d-flex justify-content-between">
        <a href="#" class="navbar-brand d-flex align-items-center">
          <strong>MENU</strong>
        </a>
      </div>
    </div>
    
    <template v-for="(item, index) in menus" :key="index">

      <template v-if="item.link_to !== ''">
        <router-link :to="item.link_to">{{item.title}}
        </router-link>
      </template>
      
      <!-- <template v-else>
        <button class="dropdown-btn">{{item.title}}</button>
        <div class="dropdown-container">
          <template v-for="(subItem , index2) in item.sub" :key="index2">
            <router-link :to="subItem.link_to">{{subItem.title}}</router-link>
          </template>
        </div>
      </template> -->
      
    </template>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menus: [
        { title: 'Home', link_to: '/'},
        { title: 'Posts', link_to: '/posts'},
        { title: 'Hello', link_to: '/hello'}
        // { title: 'Test', link_to: '', sub:
        //   [
        //     { title: 'Test1', link_to: '/test1' },
        //     { title: 'Test2', link_to: '/test2' },
        //     { title: 'Test3', link_to: '/test3' }
        //   ]
        // }
      ]
    }
  },
  methods: {
    
  }
}
</script>

<style>

  .side-nav {
    height: 100%;
    width: 250px;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
  }


  .side-nav a, .dropdown-btn {
    padding: 6px 8px 6px 48px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block;
    border: none;
    background: none;
    width:100%;
    text-align: left;
    cursor: pointer;
    outline: none;
  }

  .side-nav a:hover {
    color: #f1f1f1;
  }
  .main {
    margin-left: 160px; 
    padding: 0px 10px;
  }

  @media screen and (max-height: 450px) {
    .side-nav {padding-top: 15px;}
    .side-nav a {font-size: 18px;}
  }

  @media screen and (max-width: 500px) {
    .side-nav {width: 50px;}
  }

  .side-nav a:hover, .dropdown-btn:hover {
    color: #f1f1f1;
  }

  .main {
    margin-left: 200px; /* Same as the width of the side-nav */
    font-size: 20px; /* Increased text to enable scrolling */
    padding: 0px 10px;
  }

  .active {
    background-color: green;
    color: white;
  }

  .dropdown-container {
    display: none;
    background-color: #5eaf13;
    padding-left: 8px;
  }

  .fa-caret-down {
    float: right;
    padding-right: 8px;
  }
</style>
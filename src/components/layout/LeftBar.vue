<template>
  <div class="side-nav navbar-dark bg-dark">
    <template 
      v-for="(item, index) in menus" 
      :key="index">
      <template 
        v-if="item.link_to !== ''">
      <router-link 
        :to="item.link_to">{{item.title}}
      </router-link>
      </template>
      <template v-else>
        <button 
          class="dropdown-btn">{{item.title}}
        </button>
        <div 
          class="dropdown-container">
        <template v-for="(subItem , index2) in item.sub" :key="index2">
          <router-link :to="subItem.link_to">{{subItem.title}}</router-link>
        </template>
        </div>
      </template>
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
    padding-top: 20px;
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

  /* When you mouse over the navigation links, change their color */
  .side-nav a:hover {
    color: #f1f1f1;
  }
  /* Style page content */
  .main {
    margin-left: 160px; /* Same as the width of the sidebar */
    padding: 0px 10px;
  }

  /* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */
  @media screen and (max-height: 450px) {
    .side-nav {padding-top: 15px;}
    .side-nav a {font-size: 18px;}
  }

  /* On mouse-over */
  .side-nav a:hover, .dropdown-btn:hover {
    color: #f1f1f1;
  }

  /* Main content */
  .main {
    margin-left: 200px; /* Same as the width of the side-nav */
    font-size: 20px; /* Increased text to enable scrolling */
    padding: 0px 10px;
  }

  /* Add an active class to the active dropdown button */
  .active {
    background-color: green;
    color: white;
  }

  /* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
  .dropdown-container {
    display: none;
    background-color: #5eaf13;
    padding-left: 8px;
  }

  /* Optional: Style the caret down icon */
  .fa-caret-down {
    float: right;
    padding-right: 8px;
  }
</style>
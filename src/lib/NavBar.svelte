<script>
    import {page} from '$app/stores'
    import {goto} from '$app/navigation'

    export let appName = "App Name"
    export let menu1 = "Menu1"
    export let menu1URL = "/"
    export let menu2 = "Menu2"
    export let menu2URL= "/"
    export let menu2sub1 = "Menu2sub1"
    export let menu2sub2 = "Menu2sub2"
    export let menu3 = "Menu3"
    export let btnMenu = "btnMenu"
</script>

<div class="navbar bg-slate-900">
    <div class="navbar-start">
      <div class="dropdown">
        <label for="navbar" tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52">
          <li><a href={menu1URL}>{menu1}</a></li>
          <li tabindex="0">
            <a href={menu2URL} class="justify-between">
              {menu2}
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
            </a>
            <ul class="p-2 bg-slate-700">
              <li><a href="/">{menu2sub1}</a></li>
              <li><a href="/">{menu2sub2}</a></li>
            </ul>
          </li>
          <li><a href="/">{menu3}</a></li>
        </ul>
      </div>
      <a href="/" class="btn btn-ghost normal-case text-xl">{appName}</a>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li><a href={menu1URL}>{menu1}</a></li>
        <li tabindex="0">
          <a href={menu2URL}>
            {menu2}
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </a>
          <ul class="p-2 bg-slate-700">
            <li><a href="/">{menu2sub1}</a></li>
            <li><a href="/">{menu2sub2}</a></li>
          </ul>
        </li>
        <li><a href="/">{menu3}</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <a class="btn"  href="http://zoetrope.biz" target="_blank">{btnMenu}</a>
    </div>
  </div>
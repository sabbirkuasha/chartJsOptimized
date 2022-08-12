<script>
	import '../app.css';
	import NavBar from '../lib/NavBar.svelte';

</script>


<NavBar appName="ChartJs Overlay & floating bar"
		export let btnMenu = "Who am I"
		menu1="Overlay Bar"
		menu1URL="/OverlayBar"
/>
<slot />

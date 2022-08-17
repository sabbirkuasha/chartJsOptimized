<script>
	import '../app.css';
	import NavBar from '../lib/NavBar.svelte';

</script>


<NavBar appName="ChartJs Overlay & floating bar"
		btnMenu = "Who am I"
		menu1="Overlay Bar"
		menu1URL="/OverlayBar"
		menu3 = "Half Doughnut"
		menu3URL="/Doughnut/half"
/>
<slot />

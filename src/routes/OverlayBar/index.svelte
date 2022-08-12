<script>
    import {chartRender} from '$lib/Actions/chartRender'
    import {BarData2} from '$lib/data/chartData'
    import { onMount } from 'svelte'
    import pattern from 'patternomaly'



    onMount(()=>{
        console.log("on mount called")
        console.log(BarData2.data.datasets[0].backgroundColor)
        BarData2.data.datasets[0].backgroundColor = pattern.draw('dot-dash','rgb(255, 99, 132, 0.5)')
    })


</script>

<main class="text-center">
    <div class="w-5/5 h-96 mt-10 border m-auto ">
        <canvas use:chartRender={BarData2}></canvas>
    </div>
</main>
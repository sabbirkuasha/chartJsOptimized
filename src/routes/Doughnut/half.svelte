<script>
    import {chartRender} from '$lib/Actions/chartRender'
    import {DoughnutData} from '$lib/data/chartData'
    import {onMount } from 'svelte'
    import pattern from 'patternomaly'

    // onMount(()=>{
    //     // console.log("on mount called")
    //     // console.log(BarData2.data.datasets[0].backgroundColor)
    //     BarData2.data.datasets[0].backgroundColor = pattern.draw('dot-dash','rgb(255, 99, 132, 0.5)')
    // })

</script>

<main class="text-center">
    <div class="w-4/5 h-96 mt-10 border m-auto ">
        <canvas use:chartRender={DoughnutData}></canvas>
    </div>
</main>
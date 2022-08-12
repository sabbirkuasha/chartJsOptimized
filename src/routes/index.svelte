<script>
    import {chartRender} from '$lib/Actions/chartRender'
    import {BarData, DoughnutData} from '$lib/data/chartData'
    import pattern from 'patternomaly'
    
    let myInterval
    const fetchChartData = () => {
        myInterval = setInterval(()=>{
            BarData.data.datasets[0].data = Array.from(BarData.data.datasets[0].data, ()=>Math.random()*40) 
        },2000) 
    }
    let showBarChart = true
    const toggleBarChart = ()=>{
        showBarChart = !showBarChart
        clearInterval(myInterval)

    }
</script>

<main class="text-center p-10">
    <button class="btn btn-primary"
            on:click={()=>fetchChartData()}>
        Random Bar Data
    </button>
    <button class="btn btn-primary"
            on:click={()=>{toggleBarChart()}}>
        Show/ Hide Bar Chart
    </button>
{#if showBarChart}
    <div class="w-3/5 h-96 mt-10 border m-auto rounded-3xl bg-cyan-900">
        <canvas use:chartRender={BarData}></canvas>
    </div>
{/if}
    <!-- <div class="w-2/5 h-84 mt-10 border m-auto">
        <canvas use:chartRender={DoughnutData}></canvas>
    </div> -->
</main>
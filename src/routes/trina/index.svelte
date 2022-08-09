<script>
    import {chartRender} from '$lib/Actions/chartRender'
    import {BarData, DoughnutData} from '$lib/data/chartData'
</script>

<main class="text-center">
    <div class="w-2/5 h-96 mt-10 border m-auto ">
        <canvas use:chartRender={BarData}></canvas>
    </div>
    <!-- <div class="w-2/5 h-84 mt-10 border m-auto">
        <canvas use:chartRender={DoughnutData}></canvas>
    </div> -->
</main>
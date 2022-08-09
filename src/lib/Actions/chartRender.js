//import Chart from 'chart.js/auto'//This doesnt work when building app 
import Chart from '../../../node_modules/chart.js/auto/auto'

export const chartRender = (node, options) => {
    // console.log('Action')
    // console.log(node)
    // console.log("This is options: ")
    // console.log(options)

     console.log("Chart Render is called: ")
    const _chart = new Chart (node, options)

    return {
        update(updatedoptions) {
            // console.log("next line will be updatedoptions")
            // console.log(updatedoptions)
            _chart.data = updatedoptions.data
            _chart.update()
        },
        destroy(){
            console.log("Destroy function is called:")
            _chart.destroy()
        }
    }
}
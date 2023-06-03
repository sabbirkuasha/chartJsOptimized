

export const BarData2 = {
    type: 'bar',
    data:   {
                labels: ['January','February', 'March', 'April', 'May'],
                datasets: [
                    {
                        label: 'Red',
                        data: [[200,160],[180,140],[200,180],[200,160],[180,160]],
                        backgroundColor:['rgba(245, 0, 0, 0.2)'],
                        borderColor:['rgba(245, 0, 0, 1)'],
                        borderWidth: 2,
                        barPercentage: 0.9,
                        yAxisID: 'percentage', //this will create a new scale for this data, also this is an Id too, we can call and configure it inside option
                        

                        // hover 
                        hoverBackgroundColor: "rgba(245, 0, 0, 0.4)",
                        hoverBorderColor: "rgba(245, 0, 0, 1)",
                        hoverBorderWidth: 10,
                    },   
                    {
                        label: 'Purple',
                        data: [25,70,65,50,65],
                        backgroundColor:['rgba(162, 0, 255, 1)'],
                        barPercentage: 0.9,
                    },   
                    {
                        label: 'Blue',
                        data: [85,40,60,20,45],
                        backgroundColor:['rgba(0, 162, 255, 1)'],
                        barPercentage: .9,
                    },   
                    {
                        label: 'Green',
                        // data: [63,18,64,58,38],
                        data: [[63,0],[18,0],[64,0],[58,0],[38,0]],
                        backgroundColor:['rgba(0, 255, 167, 1)']
                    },   
                ],    
            },
            
    options: {
        scales: {
            x:{
                stacked: true,
                grid:{
                    display: false
                }
            },
            y:{
                beginAtZero: true,
                stacked: true,
                grid:{
                    display: false
                }
            }
        },
        maintainAspectRatio: false,
        percentage:{
            beginAtZero:true, 
            position: 'right',
            grid: {
            }
        },
    },
}

export const BarData = {
    type: 'bar',
    data: {
        labels: ['January','February', 'March', 'April', 'May'],
        datasets: [
            {
                label: 'Bar Dataset',
                data: [55,20,30,10,85],
                backgroundColor:[
                    'rgba(245, 40, 145, 0.8)'
                ]
            }   
    ],    
    },
    options: {
        maintainAspectRatio: false,
    },
}

export const DoughnutData ={
    type: 'doughnut',
    data: {
        
        labels:['Yellow', 'Orange', 'Red',],
        datasets: [{
            data: [14,56,34],
            backgroundColor: ["rgba(237, 210, 0, 0.8)","rgba(237, 111, 0, 0.8)","rgba(255, 0, 0, 0.8)"],
            borderWidth: 2,
            cutout: '60%', //cutout from center
            circumference: 180,
            rotation: -90,
        }
    ],
        
    },
    options: {
        maintainAspectRatio: false,
    },
}
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
        labels:['Green', 'Blue', 'Gray', 'Purple', 'Yellow', 'Red', 'Black'],
        datasets: [{
            data: [14,56,34,45,85,64,64],
            backgroundColor: [
                "green",
                "blue",
                "gray",
                "Purple",
                "yellow",
                "red",
                "black"
            ],
        }],
        
    },
    options: {
        maintainAspectRatio: false,
    },
}
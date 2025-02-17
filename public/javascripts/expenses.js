expenses=[
    {
        "Fuel":5000
    },
    {
        "Food":510
    },
    {
        "Toll":370
    },
    {
        "Repair":550
    },
    {
        "Others":150
    },
    {
        "Profit":2000
    }
]

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart6');

    // Extract labels and data from expenses
    const labels = [];
    const data = [];
    expenses.forEach(item => {
        const key = Object.keys(item)[0];
        if (key !== "Profit") { // Exclude Profit from the pie chart
            labels.push(key);
            data.push(item[key]);
        }
    });

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Expenses',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Expenses Breakdown'
                }
            }
        },
        layout: {
            padding: {
                left: 5,
                right: 5,
                top: 5,
                bottom: 5
            }
        }
    });
});

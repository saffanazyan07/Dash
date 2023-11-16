///////////////////////////////////////////////////////////////
//                                                           //
//                           AMF part                        //
//                                                           //
///////////////////////////////////////////////////////////////
AMR_table_initial();
function AMR_table_initial() {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=amf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            AMF_usage_table(source);
        });
}

setInterval(function () {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=amf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            AMF_usage_table(source);
        });
}, 100000);

function AMF_usage_table(source) {
    console.log(source);
    var AMF_CPU = {
        series: [
            {
                name: "CPU usage",
                data: [
                    source[0].s_cpu,
                    source[1].s_cpu,
                    source[2].s_cpu,
                    source[3].s_cpu,
                    source[4].s_cpu,
                    source[5].s_cpu,
                    source[6].s_cpu,
                    source[7].s_cpu,
                    source[8].s_cpu,
                    source[9].s_cpu,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var AMF_chart_1 = new ApexCharts(document.querySelector("#AMF_chart_CPU"), AMF_CPU);
    AMF_chart_1.render();

    var AMF_RAM = {
        series: [
            {
                name: "Memory usage",
                data: [
                    source[0].s_memory,
                    source[1].s_memory,
                    source[2].s_memory,
                    source[3].s_memory,
                    source[4].s_memory,
                    source[5].s_memory,
                    source[6].s_memory,
                    source[7].s_memory,
                    source[8].s_memory,
                    source[9].s_memory,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var AMF_chart_2 = new ApexCharts(document.querySelector("#AMF_chart_RAM"), AMF_RAM);
    AMF_chart_2.render();

    var AMF_Network = {
        series: [
            {
                name: "Network In",
                data: [
                    source[0].s_networkin,
                    source[1].s_networkin,
                    source[2].s_networkin,
                    source[3].s_networkin,
                    source[4].s_networkin,
                    source[5].s_networkin,
                    source[6].s_networkin,
                    source[7].s_networkin,
                    source[8].s_networkin,
                    source[9].s_networkin,
                ],
            },
            {
                name: "Network Out",
                data: [
                    source[0].s_networkout,
                    source[1].s_networkout,
                    source[2].s_networkout,
                    source[3].s_networkout,
                    source[4].s_networkout,
                    source[5].s_networkout,
                    source[6].s_networkout,
                    source[7].s_networkout,
                    source[8].s_networkout,
                    source[9].s_networkout,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var AMF_chart_3 = new ApexCharts(document.querySelector("#AMF_chart_Net"), AMF_Network);
    AMF_chart_3.render();

    var AMF_Disk = {
        series: [
            {
                name: "Disk In",
                data: [
                    source[0].s_diskin,
                    source[1].s_diskin,
                    source[2].s_diskin,
                    source[3].s_diskin,
                    source[4].s_diskin,
                    source[5].s_diskin,
                    source[6].s_diskin,
                    source[7].s_diskin,
                    source[8].s_diskin,
                    source[9].s_diskin,
                ],
            },
            {
                name: "Disk Out",
                data: [
                    source[0].s_diskout,
                    source[1].s_diskout,
                    source[2].s_diskout,
                    source[3].s_diskout,
                    source[4].s_diskout,
                    source[5].s_diskout,
                    source[6].s_diskout,
                    source[7].s_diskout,
                    source[8].s_diskout,
                    source[9].s_diskout,
                ],
            },
        ],
        chart: {
            height: 350,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var AMF_chart_4 = new ApexCharts(document.querySelector("#AMF_chart_Disk"), AMF_Disk);
    AMF_chart_4.render();
}

///////////////////////////////////////////////////////////////
//                                                           //
//                           SMF part                        //
//                                                           //
///////////////////////////////////////////////////////////////
SMF_table_initial();
function SMF_table_initial() {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=smf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            SMF_usage_table(source);
        });
}

setInterval(function () {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=smf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            SMF_usage_table(source);
        });
}, 100000);

function SMF_usage_table(source) {
    var SMF_CPU = {
        series: [
            {
                name: "CPU usage",
                data: [
                    source[0].s_cpu,
                    source[1].s_cpu,
                    source[2].s_cpu,
                    source[3].s_cpu,
                    source[4].s_cpu,
                    source[5].s_cpu,
                    source[6].s_cpu,
                    source[7].s_cpu,
                    source[8].s_cpu,
                    source[9].s_cpu,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var SMF_chart_1 = new ApexCharts(document.querySelector("#SMF_chart_CPU"), SMF_CPU);
    SMF_chart_1.render();

    var SMF_RAM = {
        series: [
            {
                name: "Memory usage",
                data: [
                    source[0].s_memory,
                    source[1].s_memory,
                    source[2].s_memory,
                    source[3].s_memory,
                    source[4].s_memory,
                    source[5].s_memory,
                    source[6].s_memory,
                    source[7].s_memory,
                    source[8].s_memory,
                    source[9].s_memory,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var SMF_chart_2 = new ApexCharts(document.querySelector("#SMF_chart_RAM"), SMF_RAM);
    SMF_chart_2.render();

    var SMF_Network = {
        series: [
            {
                name: "Network In",
                data: [
                    source[0].s_networkin,
                    source[1].s_networkin,
                    source[2].s_networkin,
                    source[3].s_networkin,
                    source[4].s_networkin,
                    source[5].s_networkin,
                    source[6].s_networkin,
                    source[7].s_networkin,
                    source[8].s_networkin,
                    source[9].s_networkin,
                ],
            },
            {
                name: "Network Out",
                data: [
                    source[0].s_networkout,
                    source[1].s_networkout,
                    source[2].s_networkout,
                    source[3].s_networkout,
                    source[4].s_networkout,
                    source[5].s_networkout,
                    source[6].s_networkout,
                    source[7].s_networkout,
                    source[8].s_networkout,
                    source[9].s_networkout,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var SMF_chart_3 = new ApexCharts(document.querySelector("#SMF_chart_Net"), SMF_Network);
    SMF_chart_3.render();

    var SMF_Disk = {
        series: [
            {
                name: "Disk In",
                data: [
                    source[0].s_diskin,
                    source[1].s_diskin,
                    source[2].s_diskin,
                    source[3].s_diskin,
                    source[4].s_diskin,
                    source[5].s_diskin,
                    source[6].s_diskin,
                    source[7].s_diskin,
                    source[8].s_diskin,
                    source[9].s_diskin,
                ],
            },
            {
                name: "Disk Out",
                data: [
                    source[0].s_diskout,
                    source[1].s_diskout,
                    source[2].s_diskout,
                    source[3].s_diskout,
                    source[4].s_diskout,
                    source[5].s_diskout,
                    source[6].s_diskout,
                    source[7].s_diskout,
                    source[8].s_diskout,
                    source[9].s_diskout,
                ],
            },
        ],
        chart: {
            height: 350,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var SMF_chart_4 = new ApexCharts(document.querySelector("#SMF_chart_Disk"), SMF_Disk);
    SMF_chart_4.render();
}

///////////////////////////////////////////////////////////////
//                                                           //
//                           UPF part                        //
//                                                           //
///////////////////////////////////////////////////////////////
UPF_table_initial();
function UPF_table_initial() {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=upf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            UPF_usage_table(source);
        });
}

setInterval(function () {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=upf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            UPF_usage_table(source);
        });
}, 100000);

function UPF_usage_table(source) {
    var UPF_CPU = {
        series: [
            {
                name: "CPU usage",
                data: [
                    source[0].s_cpu,
                    source[1].s_cpu,
                    source[2].s_cpu,
                    source[3].s_cpu,
                    source[4].s_cpu,
                    source[5].s_cpu,
                    source[6].s_cpu,
                    source[7].s_cpu,
                    source[8].s_cpu,
                    source[9].s_cpu,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var UPF_chart_1 = new ApexCharts(document.querySelector("#UPF_chart_CPU"), UPF_CPU);
    UPF_chart_1.render();

    var UPF_RAM = {
        series: [
            {
                name: "Memory usage",
                data: [
                    source[0].s_memory,
                    source[1].s_memory,
                    source[2].s_memory,
                    source[3].s_memory,
                    source[4].s_memory,
                    source[5].s_memory,
                    source[6].s_memory,
                    source[7].s_memory,
                    source[8].s_memory,
                    source[9].s_memory,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var UPF_chart_2 = new ApexCharts(document.querySelector("#UPF_chart_RAM"), UPF_RAM);
    UPF_chart_2.render();

    var UPF_Network = {
        series: [
            {
                name: "Network In",
                data: [
                    source[0].s_networkin,
                    source[1].s_networkin,
                    source[2].s_networkin,
                    source[3].s_networkin,
                    source[4].s_networkin,
                    source[5].s_networkin,
                    source[6].s_networkin,
                    source[7].s_networkin,
                    source[8].s_networkin,
                    source[9].s_networkin,
                ],
            },
            {
                name: "Network Out",
                data: [
                    source[0].s_networkout,
                    source[1].s_networkout,
                    source[2].s_networkout,
                    source[3].s_networkout,
                    source[4].s_networkout,
                    source[5].s_networkout,
                    source[6].s_networkout,
                    source[7].s_networkout,
                    source[8].s_networkout,
                    source[9].s_networkout,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var UPF_chart_3 = new ApexCharts(document.querySelector("#UPF_chart_Net"), UPF_Network);
    UPF_chart_3.render();

    var UPF_Disk = {
        series: [
            {
                name: "Disk In",
                data: [
                    source[0].s_diskin,
                    source[1].s_diskin,
                    source[2].s_diskin,
                    source[3].s_diskin,
                    source[4].s_diskin,
                    source[5].s_diskin,
                    source[6].s_diskin,
                    source[7].s_diskin,
                    source[8].s_diskin,
                    source[9].s_diskin,
                ],
            },
            {
                name: "Disk Out",
                data: [
                    source[0].s_diskout,
                    source[1].s_diskout,
                    source[2].s_diskout,
                    source[3].s_diskout,
                    source[4].s_diskout,
                    source[5].s_diskout,
                    source[6].s_diskout,
                    source[7].s_diskout,
                    source[8].s_diskout,
                    source[9].s_diskout,
                ],
            },
        ],
        chart: {
            height: 350,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var UPF_chart_4 = new ApexCharts(document.querySelector("#UPF_chart_Disk"), UPF_Disk);
    UPF_chart_4.render();
}

///////////////////////////////////////////////////////////////
//                                                           //
//                           AUSF part                        //
//                                                           //
///////////////////////////////////////////////////////////////
AUSF_table_initial();
function AUSF_table_initial() {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=ausf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            AUSF_usage_table(source);
        });
}

setInterval(function () {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=ausf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            AUSF_usage_table(source);
        });
}, 100000);

function AUSF_usage_table(source) {
    var AUSF_CPU = {
        series: [
            {
                name: "CPU usage",
                data: [
                    source[0].s_cpu,
                    source[1].s_cpu,
                    source[2].s_cpu,
                    source[3].s_cpu,
                    source[4].s_cpu,
                    source[5].s_cpu,
                    source[6].s_cpu,
                    source[7].s_cpu,
                    source[8].s_cpu,
                    source[9].s_cpu,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var AUSF_RAM = {
        series: [
            {
                name: "Memory usage",
                data: [
                    source[0].s_memory,
                    source[1].s_memory,
                    source[2].s_memory,
                    source[3].s_memory,
                    source[4].s_memory,
                    source[5].s_memory,
                    source[6].s_memory,
                    source[7].s_memory,
                    source[8].s_memory,
                    source[9].s_memory,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var AUSF_Network = {
        series: [
            {
                name: "Network In",
                data: [
                    source[0].s_networkin,
                    source[1].s_networkin,
                    source[2].s_networkin,
                    source[3].s_networkin,
                    source[4].s_networkin,
                    source[5].s_networkin,
                    source[6].s_networkin,
                    source[7].s_networkin,
                    source[8].s_networkin,
                    source[9].s_networkin,
                ],
            },
            {
                name: "Network Out",
                data: [
                    source[0].s_networkout,
                    source[1].s_networkout,
                    source[2].s_networkout,
                    source[3].s_networkout,
                    source[4].s_networkout,
                    source[5].s_networkout,
                    source[6].s_networkout,
                    source[7].s_networkout,
                    source[8].s_networkout,
                    source[9].s_networkout,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var AUSF_Disk = {
        series: [
            {
                name: "Disk In",
                data: [
                    source[0].s_diskin,
                    source[1].s_diskin,
                    source[2].s_diskin,
                    source[3].s_diskin,
                    source[4].s_diskin,
                    source[5].s_diskin,
                    source[6].s_diskin,
                    source[7].s_diskin,
                    source[8].s_diskin,
                    source[9].s_diskin,
                ],
            },
            {
                name: "Disk Out",
                data: [
                    source[0].s_diskout,
                    source[1].s_diskout,
                    source[2].s_diskout,
                    source[3].s_diskout,
                    source[4].s_diskout,
                    source[5].s_diskout,
                    source[6].s_diskout,
                    source[7].s_diskout,
                    source[8].s_diskout,
                    source[9].s_diskout,
                ],
            },
        ],
        chart: {
            height: 350,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var AUSF_chart_1 = new ApexCharts(document.querySelector("#AUSF_chart_CPU"), AUSF_CPU);
    AUSF_chart_1.render();

    var AUSF_chart_2 = new ApexCharts(document.querySelector("#AUSF_chart_RAM"), AUSF_RAM);
    AUSF_chart_2.render();

    var AUSF_chart_3 = new ApexCharts(document.querySelector("#AUSF_chart_Net"), AUSF_Network);
    AUSF_chart_3.render();

    var AUSF_chart_4 = new ApexCharts(document.querySelector("#AUSF_chart_Disk"), AUSF_Disk);
    AUSF_chart_4.render();
}

///////////////////////////////////////////////////////////////
//                                                           //
//                           NSSF part                        //
//                                                           //
///////////////////////////////////////////////////////////////
NSSF_table_initial();
function NSSF_table_initial() {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=nssf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            NSSF_usage_table(source);
        });
}

setInterval(function () {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=nssf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            NSSF_usage_table(source);
        });
}, 100000);

function NSSF_usage_table(source) {
    var NSSF_CPU = {
        series: [
            {
                name: "CPU usage",
                data: [
                    source[0].s_cpu,
                    source[1].s_cpu,
                    source[2].s_cpu,
                    source[3].s_cpu,
                    source[4].s_cpu,
                    source[5].s_cpu,
                    source[6].s_cpu,
                    source[7].s_cpu,
                    source[8].s_cpu,
                    source[9].s_cpu,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var NSSF_RAM = {
        series: [
            {
                name: "Memory usage",
                data: [
                    source[0].s_memory,
                    source[1].s_memory,
                    source[2].s_memory,
                    source[3].s_memory,
                    source[4].s_memory,
                    source[5].s_memory,
                    source[6].s_memory,
                    source[7].s_memory,
                    source[8].s_memory,
                    source[9].s_memory,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var NSSF_Network = {
        series: [
            {
                name: "Network In",
                data: [
                    source[0].s_networkin,
                    source[1].s_networkin,
                    source[2].s_networkin,
                    source[3].s_networkin,
                    source[4].s_networkin,
                    source[5].s_networkin,
                    source[6].s_networkin,
                    source[7].s_networkin,
                    source[8].s_networkin,
                    source[9].s_networkin,
                ],
            },
            {
                name: "Network Out",
                data: [
                    source[0].s_networkout,
                    source[1].s_networkout,
                    source[2].s_networkout,
                    source[3].s_networkout,
                    source[4].s_networkout,
                    source[5].s_networkout,
                    source[6].s_networkout,
                    source[7].s_networkout,
                    source[8].s_networkout,
                    source[9].s_networkout,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var NSSF_Disk = {
        series: [
            {
                name: "Disk In",
                data: [
                    source[0].s_diskin,
                    source[1].s_diskin,
                    source[2].s_diskin,
                    source[3].s_diskin,
                    source[4].s_diskin,
                    source[5].s_diskin,
                    source[6].s_diskin,
                    source[7].s_diskin,
                    source[8].s_diskin,
                    source[9].s_diskin,
                ],
            },
            {
                name: "Disk Out",
                data: [
                    source[0].s_diskout,
                    source[1].s_diskout,
                    source[2].s_diskout,
                    source[3].s_diskout,
                    source[4].s_diskout,
                    source[5].s_diskout,
                    source[6].s_diskout,
                    source[7].s_diskout,
                    source[8].s_diskout,
                    source[9].s_diskout,
                ],
            },
        ],
        chart: {
            height: 350,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var NSSF_chart_1 = new ApexCharts(document.querySelector("#NSSF_chart_CPU"), NSSF_CPU);
    NSSF_chart_1.render();

    var NSSF_chart_2 = new ApexCharts(document.querySelector("#NSSF_chart_RAM"), NSSF_RAM);
    NSSF_chart_2.render();

    var NSSF_chart_3 = new ApexCharts(document.querySelector("#NSSF_chart_Net"), NSSF_Network);
    NSSF_chart_3.render();

    var NSSF_chart_4 = new ApexCharts(document.querySelector("#NSSF_chart_Disk"), NSSF_Disk);
    NSSF_chart_4.render();
}

///////////////////////////////////////////////////////////////
//                                                           //
//                           PCF part                        //
//                                                           //
///////////////////////////////////////////////////////////////
PCF_table_initial();
function PCF_table_initial() {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=pcf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            PCF_usage_table(source);
        });
}

setInterval(function () {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=pcf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            PCF_usage_table(source);
        });
}, 100000);

function PCF_usage_table(source) {
    var PCF_CPU = {
        series: [
            {
                name: "CPU usage",
                data: [
                    source[0].s_cpu,
                    source[1].s_cpu,
                    source[2].s_cpu,
                    source[3].s_cpu,
                    source[4].s_cpu,
                    source[5].s_cpu,
                    source[6].s_cpu,
                    source[7].s_cpu,
                    source[8].s_cpu,
                    source[9].s_cpu,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var PCF_RAM = {
        series: [
            {
                name: "Memory usage",
                data: [
                    source[0].s_memory,
                    source[1].s_memory,
                    source[2].s_memory,
                    source[3].s_memory,
                    source[4].s_memory,
                    source[5].s_memory,
                    source[6].s_memory,
                    source[7].s_memory,
                    source[8].s_memory,
                    source[9].s_memory,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var PCF_Network = {
        series: [
            {
                name: "Network In",
                data: [
                    source[0].s_networkin,
                    source[1].s_networkin,
                    source[2].s_networkin,
                    source[3].s_networkin,
                    source[4].s_networkin,
                    source[5].s_networkin,
                    source[6].s_networkin,
                    source[7].s_networkin,
                    source[8].s_networkin,
                    source[9].s_networkin,
                ],
            },
            {
                name: "Network Out",
                data: [
                    source[0].s_networkout,
                    source[1].s_networkout,
                    source[2].s_networkout,
                    source[3].s_networkout,
                    source[4].s_networkout,
                    source[5].s_networkout,
                    source[6].s_networkout,
                    source[7].s_networkout,
                    source[8].s_networkout,
                    source[9].s_networkout,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var PCF_Disk = {
        series: [
            {
                name: "Disk In",
                data: [
                    source[0].s_diskin,
                    source[1].s_diskin,
                    source[2].s_diskin,
                    source[3].s_diskin,
                    source[4].s_diskin,
                    source[5].s_diskin,
                    source[6].s_diskin,
                    source[7].s_diskin,
                    source[8].s_diskin,
                    source[9].s_diskin,
                ],
            },
            {
                name: "Disk Out",
                data: [
                    source[0].s_diskout,
                    source[1].s_diskout,
                    source[2].s_diskout,
                    source[3].s_diskout,
                    source[4].s_diskout,
                    source[5].s_diskout,
                    source[6].s_diskout,
                    source[7].s_diskout,
                    source[8].s_diskout,
                    source[9].s_diskout,
                ],
            },
        ],
        chart: {
            height: 350,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var PCF_chart_1 = new ApexCharts(document.querySelector("#PCF_chart_CPU"), PCF_CPU);
    PCF_chart_1.render();

    var PCF_chart_2 = new ApexCharts(document.querySelector("#PCF_chart_RAM"), PCF_RAM);
    PCF_chart_2.render();

    var PCF_chart_3 = new ApexCharts(document.querySelector("#PCF_chart_Net"), PCF_Network);
    PCF_chart_3.render();

    var PCF_chart_4 = new ApexCharts(document.querySelector("#PCF_chart_Disk"), PCF_Disk);
    PCF_chart_4.render();
}

///////////////////////////////////////////////////////////////
//                                                           //
//                           UDM part                        //
//                                                           //
///////////////////////////////////////////////////////////////
UDM_table_initial();
function UDM_table_initial() {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=udm", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            UDM_usage_table(source);
        });
}

setInterval(function () {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=udm", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            UDM_usage_table(source);
        });
}, 100000);

function UDM_usage_table(source) {
    var UDM_CPU = {
        series: [
            {
                name: "CPU usage",
                data: [
                    source[0].s_cpu,
                    source[1].s_cpu,
                    source[2].s_cpu,
                    source[3].s_cpu,
                    source[4].s_cpu,
                    source[5].s_cpu,
                    source[6].s_cpu,
                    source[7].s_cpu,
                    source[8].s_cpu,
                    source[9].s_cpu,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var UDM_RAM = {
        series: [
            {
                name: "Memory usage",
                data: [
                    source[0].s_memory,
                    source[1].s_memory,
                    source[2].s_memory,
                    source[3].s_memory,
                    source[4].s_memory,
                    source[5].s_memory,
                    source[6].s_memory,
                    source[7].s_memory,
                    source[8].s_memory,
                    source[9].s_memory,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var UDM_Network = {
        series: [
            {
                name: "Network In",
                data: [
                    source[0].s_networkin,
                    source[1].s_networkin,
                    source[2].s_networkin,
                    source[3].s_networkin,
                    source[4].s_networkin,
                    source[5].s_networkin,
                    source[6].s_networkin,
                    source[7].s_networkin,
                    source[8].s_networkin,
                    source[9].s_networkin,
                ],
            },
            {
                name: "Network Out",
                data: [
                    source[0].s_networkout,
                    source[1].s_networkout,
                    source[2].s_networkout,
                    source[3].s_networkout,
                    source[4].s_networkout,
                    source[5].s_networkout,
                    source[6].s_networkout,
                    source[7].s_networkout,
                    source[8].s_networkout,
                    source[9].s_networkout,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var UDM_Disk = {
        series: [
            {
                name: "Disk In",
                data: [
                    source[0].s_diskin,
                    source[1].s_diskin,
                    source[2].s_diskin,
                    source[3].s_diskin,
                    source[4].s_diskin,
                    source[5].s_diskin,
                    source[6].s_diskin,
                    source[7].s_diskin,
                    source[8].s_diskin,
                    source[9].s_diskin,
                ],
            },
            {
                name: "Disk Out",
                data: [
                    source[0].s_diskout,
                    source[1].s_diskout,
                    source[2].s_diskout,
                    source[3].s_diskout,
                    source[4].s_diskout,
                    source[5].s_diskout,
                    source[6].s_diskout,
                    source[7].s_diskout,
                    source[8].s_diskout,
                    source[9].s_diskout,
                ],
            },
        ],
        chart: {
            height: 350,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var UDM_chart_1 = new ApexCharts(document.querySelector("#UDM_chart_CPU"), UDM_CPU);
    UDM_chart_1.render();

    var UDM_chart_2 = new ApexCharts(document.querySelector("#UDM_chart_RAM"), UDM_RAM);
    UDM_chart_2.render();

    var UDM_chart_3 = new ApexCharts(document.querySelector("#UDM_chart_Net"), UDM_Network);
    UDM_chart_3.render();

    var UDM_chart_4 = new ApexCharts(document.querySelector("#UDM_chart_Disk"), UDM_Disk);
    UDM_chart_4.render();
}

///////////////////////////////////////////////////////////////
//                                                           //
//                           NRF part                        //
//                                                           //
///////////////////////////////////////////////////////////////
NRF_table_initial();
function NRF_table_initial() {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=nrf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            NRF_usage_table(source);
        });
}

setInterval(function () {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=nrf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            NRF_usage_table(source);
        });
}, 100000);

function NRF_usage_table(source) {
    var NRF_CPU = {
        series: [
            {
                name: "CPU usage",
                data: [
                    source[0].s_cpu,
                    source[1].s_cpu,
                    source[2].s_cpu,
                    source[3].s_cpu,
                    source[4].s_cpu,
                    source[5].s_cpu,
                    source[6].s_cpu,
                    source[7].s_cpu,
                    source[8].s_cpu,
                    source[9].s_cpu,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var NRF_RAM = {
        series: [
            {
                name: "Memory usage",
                data: [
                    source[0].s_memory,
                    source[1].s_memory,
                    source[2].s_memory,
                    source[3].s_memory,
                    source[4].s_memory,
                    source[5].s_memory,
                    source[6].s_memory,
                    source[7].s_memory,
                    source[8].s_memory,
                    source[9].s_memory,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var NRF_Network = {
        series: [
            {
                name: "Network In",
                data: [
                    source[0].s_networkin,
                    source[1].s_networkin,
                    source[2].s_networkin,
                    source[3].s_networkin,
                    source[4].s_networkin,
                    source[5].s_networkin,
                    source[6].s_networkin,
                    source[7].s_networkin,
                    source[8].s_networkin,
                    source[9].s_networkin,
                ],
            },
            {
                name: "Network Out",
                data: [
                    source[0].s_networkout,
                    source[1].s_networkout,
                    source[2].s_networkout,
                    source[3].s_networkout,
                    source[4].s_networkout,
                    source[5].s_networkout,
                    source[6].s_networkout,
                    source[7].s_networkout,
                    source[8].s_networkout,
                    source[9].s_networkout,
                ],
            },
        ],
        chart: {
            height: 250,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var NRF_Disk = {
        series: [
            {
                name: "Disk In",
                data: [
                    source[0].s_diskin,
                    source[1].s_diskin,
                    source[2].s_diskin,
                    source[3].s_diskin,
                    source[4].s_diskin,
                    source[5].s_diskin,
                    source[6].s_diskin,
                    source[7].s_diskin,
                    source[8].s_diskin,
                    source[9].s_diskin,
                ],
            },
            {
                name: "Disk Out",
                data: [
                    source[0].s_diskout,
                    source[1].s_diskout,
                    source[2].s_diskout,
                    source[3].s_diskout,
                    source[4].s_diskout,
                    source[5].s_diskout,
                    source[6].s_diskout,
                    source[7].s_diskout,
                    source[8].s_diskout,
                    source[9].s_diskout,
                ],
            },
        ],
        chart: {
            height: 350,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var NRF_chart_1 = new ApexCharts(document.querySelector("#NRF_chart_CPU"), NRF_CPU);
    NRF_chart_1.render();

    var NRF_chart_2 = new ApexCharts(document.querySelector("#NRF_chart_RAM"), NRF_RAM);
    NRF_chart_2.render();

    var NRF_chart_3 = new ApexCharts(document.querySelector("#NRF_chart_Net"), NRF_Network);
    NRF_chart_3.render();

    var NRF_chart_4 = new ApexCharts(document.querySelector("#NRF_chart_Disk"), NRF_Disk);
    NRF_chart_4.render();
}

///////////////////////////////////////////////////////////////
//                                                           //
//                       MainChart part                      //
//                                                           //
///////////////////////////////////////////////////////////////
CHART_table_initial();
function CHART_table_initial() {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=VM", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            CHART_usage_table(source);
        });
}

setInterval(function () {
    fetch("http://140.118.121.85:5000/nfs/resource/recode?s_nf=VM", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            CHART_usage_table(source);
        });
}, 100000);

function CHART_usage_table(source) {
    var MainChart_CPU = {
        series: [
            {
                name: "CPU",
                data: [
                    source[0].s_cpu,
                    source[1].s_cpu,
                    source[2].s_cpu,
                    source[3].s_cpu,
                    source[4].s_cpu,
                    source[5].s_cpu,
                    source[6].s_cpu,
                    source[7].s_cpu,
                    source[8].s_cpu,
                    source[9].s_cpu,
                ],
            },
        ],
        chart: {
            height: 350,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };
    var MainChart_RAM = {
        series: [
            {
                name: "Memory",
                data: [
                    source[0].s_memory,
                    source[1].s_memory,
                    source[2].s_memory,
                    source[3].s_memory,
                    source[4].s_memory,
                    source[5].s_memory,
                    source[6].s_memory,
                    source[7].s_memory,
                    source[8].s_memory,
                    source[9].s_memory,
                ],
            },
        ],
        chart: {
            height: 350,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var MainChart_Network = {
        series: [
            {
                name: "Network In",
                data: [
                    source[0].s_networkin,
                    source[1].s_networkin,
                    source[2].s_networkin,
                    source[3].s_networkin,
                    source[4].s_networkin,
                    source[5].s_networkin,
                    source[6].s_networkin,
                    source[7].s_networkin,
                    source[8].s_networkin,
                    source[9].s_networkin,
                ],
            },
            {
                name: "Network Out",
                data: [
                    source[0].s_networkout,
                    source[1].s_networkout,
                    source[2].s_networkout,
                    source[3].s_networkout,
                    source[4].s_networkout,
                    source[5].s_networkout,
                    source[6].s_networkout,
                    source[7].s_networkout,
                    source[8].s_networkout,
                    source[9].s_networkout,
                ],
            },
        ],
        chart: {
            height: 350,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var MainChart_Disk = {
        series: [
            {
                name: "Disk In",
                data: [
                    source[0].s_diskin,
                    source[1].s_diskin,
                    source[2].s_diskin,
                    source[3].s_diskin,
                    source[4].s_diskin,
                    source[5].s_diskin,
                    source[6].s_diskin,
                    source[7].s_diskin,
                    source[8].s_diskin,
                    source[9].s_diskin,
                ],
            },
            {
                name: "Disk Out",
                data: [
                    source[0].s_diskout,
                    source[1].s_diskout,
                    source[2].s_diskout,
                    source[3].s_diskout,
                    source[4].s_diskout,
                    source[5].s_diskout,
                    source[6].s_diskout,
                    source[7].s_diskout,
                    source[8].s_diskout,
                    source[9].s_diskout,
                ],
            },
        ],
        chart: {
            height: 350,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                source[0].dt_infotime,
                source[1].dt_infotime,
                source[2].dt_infotime,
                source[3].dt_infotime,
                source[4].dt_infotime,
                source[5].dt_infotime,
                source[6].dt_infotime,
                source[7].dt_infotime,
                source[8].dt_infotime,
                source[9].dt_infotime,
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    var MainChart_chart_1 = new ApexCharts(document.querySelector("#MainChart_chart_CPU"), MainChart_CPU);
    MainChart_chart_1.render();

    var MainChart_chart_2 = new ApexCharts(document.querySelector("#MainChart_chart_RAM"), MainChart_RAM);
    MainChart_chart_2.render();

    var MainChart_chart_3 = new ApexCharts(document.querySelector("#MainChart_chart_Net"), MainChart_Network);
    MainChart_chart_3.render();

    var MainChart_chart_4 = new ApexCharts(document.querySelector("#MainChart_chart_Disk"), MainChart_Disk);
    MainChart_chart_4.render();
}

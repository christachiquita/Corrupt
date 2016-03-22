    google.setOnLoadCallback(drawSeriesChart);

    function drawSeriesChart() {

      var data = google.visualization.arrayToDataTable([
        ['ID', 'Anggaran', 'Durasi (tahun)', 'Region',     'Population'],
        ['BDG',    80.66,              1.67,      'Jawa Barat',  33739900],
        ['DPS',    79.84,              1.36,      'Bali',         81902307],
        ['SMG',    78.6,               1.84,      'Jawa Tengah',         5523095],
        ['JKT',    72.73,              2.78,      'Jakarta',    79716203],
        ['BDG',    80.05,              2,         'Jawa Barat',         61801570],
        ['SOLO',    72.49,              1.7,       'Jawa Tengah',    73137148],
        ['PON',    68.09,              4.77,      'Kalimantan Barat',    31090763],
        ['MDN',    81.55,              2.96,      'Sumatera Utara',    7485600],
        ['JKT',    68.6,               1.54,      'Jakarta',         141850000],
        ['SBY',    78.09,              2.05,      'Jawa Timur',  307007000]
      ]);

      var options = {
        title: 'Correlation between life expectancy, fertility rate and population of some world countries (2010)',
        hAxis: {title: 'Bidang'},
        vAxis: {title: 'Anggaran'},
        bubble: {textStyle: {fontSize: 12}}
      };

      var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
      chart.draw(data, options);
    }
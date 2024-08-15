<template>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex w-full justify-between gap-8 mb-3">
            <h2 class="font-bold text-lg self-center"> All School </h2>
            <div class="">
                <button class="border rounded-full shadow-sm font-bold py-2.5 px-8 focus:outline-none focus:ring 
                        focus:ring-opacity-50 bg-blue-500 hover:bg-primary-400 active:bg-primary-600 text-white 
                        border-transparent focus:border-primary-300 focus:ring-primary-200" @click="showModal = true">
                    Create new
                    <svg class="w-5 h-5 -mr-1 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M12 5l0 14"></path>
                        <path d="M5 12l14 0"></path>
                    </svg>
                </button>
            </div>

        </div>

        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-8 mb-3">
            <div><span class="text-gray-500 text-sm font-bold uppercase mb-2 text-center"> Schools Added 30d </span>
                <div class="my-4"></div>
                <div class="vue-apexcharts" style="min-height: 315px;">
                    <div id="apexchartscflf56ok" class="apexcharts-canvas apexchartscflf56ok apexcharts-theme-light"
                        style="width: 1098px; height: 300px;"><svg id="SvgjsSvg1922" width="1098" height="300"
                            xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg apexcharts-zoomable"
                            xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;">
                            <foreignObject x="0" y="0" width="1098" height="300">
                                <div class="apexcharts-legend" xmlns="http://www.w3.org/1999/xhtml"
                                    style="max-height: 150px;"></div>
                            </foreignObject>
                            <rect id="SvgjsRect1928" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1"
                                stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect>
                            <g id="SvgjsG2074" class="apexcharts-yaxis" rel="0"
                                transform="translate(3.4000000953674316, 0)">
                                <g id="SvgjsG2075" class="apexcharts-yaxis-texts-g"><text id="SvgjsText2077"
                                        font-family="Helvetica, Arial, sans-serif" x="20" y="31.5" text-anchor="end"
                                        dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f"
                                        class="apexcharts-text apexcharts-yaxis-label "
                                        style="font-family: Helvetica, Arial, sans-serif;">
                                        <tspan id="SvgjsTspan2078">5</tspan>
                                        <title>5</title>
                                    </text><text id="SvgjsText2080" font-family="Helvetica, Arial, sans-serif" x="20"
                                        y="71.32203662618001" text-anchor="end" dominant-baseline="auto"
                                        font-size="11px" font-weight="400" fill="#373d3f"
                                        class="apexcharts-text apexcharts-yaxis-label "
                                        style="font-family: Helvetica, Arial, sans-serif;">
                                        <tspan id="SvgjsTspan2081">4</tspan>
                                        <title>4</title>
                                    </text><text id="SvgjsText2083" font-family="Helvetica, Arial, sans-serif" x="20"
                                        y="111.14407325236002" text-anchor="end" dominant-baseline="auto"
                                        font-size="11px" font-weight="400" fill="#373d3f"
                                        class="apexcharts-text apexcharts-yaxis-label "
                                        style="font-family: Helvetica, Arial, sans-serif;">
                                        <tspan id="SvgjsTspan2084">3</tspan>
                                        <title>3</title>
                                    </text><text id="SvgjsText2086" font-family="Helvetica, Arial, sans-serif" x="20"
                                        y="150.96610987854" text-anchor="end" dominant-baseline="auto" font-size="11px"
                                        font-weight="400" fill="#373d3f" class="apexcharts-text apexcharts-yaxis-label "
                                        style="font-family: Helvetica, Arial, sans-serif;">
                                        <tspan id="SvgjsTspan2087">2</tspan>
                                        <title>2</title>
                                    </text><text id="SvgjsText2089" font-family="Helvetica, Arial, sans-serif" x="20"
                                        y="190.78814650472003" text-anchor="end" dominant-baseline="auto"
                                        font-size="11px" font-weight="400" fill="#373d3f"
                                        class="apexcharts-text apexcharts-yaxis-label "
                                        style="font-family: Helvetica, Arial, sans-serif;">
                                        <tspan id="SvgjsTspan2090">1</tspan>
                                        <title>1</title>
                                    </text><text id="SvgjsText2092" font-family="Helvetica, Arial, sans-serif" x="20"
                                        y="230.61018313090005" text-anchor="end" dominant-baseline="auto"
                                        font-size="11px" font-weight="400" fill="#373d3f"
                                        class="apexcharts-text apexcharts-yaxis-label "
                                        style="font-family: Helvetica, Arial, sans-serif;">
                                        <tspan id="SvgjsTspan2093">0</tspan>
                                        <title>0</title>
                                    </text></g>
                            </g>
                            <g id="SvgjsG1924" class="apexcharts-inner apexcharts-graphical"
                                transform="translate(33.40000009536743, 30)">
                                <defs id="SvgjsDefs1923">
                                    <clipPath id="gridRectMaskcflf56ok">
                                        <rect id="SvgjsRect1930" width="1063.5999999046326" height="223.11018313090005"
                                            x="-7" y="-12" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none"
                                            stroke-dasharray="0" fill="#fff"></rect>
                                    </clipPath>
                                    <clipPath id="forecastMaskcflf56ok"></clipPath>
                                    <clipPath id="nonForecastMaskcflf56ok"></clipPath>
                                    <clipPath id="gridRectMarkerMaskcflf56ok">
                                        <rect id="SvgjsRect1931" width="1058.5999999046326" height="203.11018313090005"
                                            x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none"
                                            stroke-dasharray="0" fill="#fff"></rect>
                                    </clipPath>
                                </defs>
                                <line id="SvgjsLine1929" x1="0" y1="0" x2="0" y2="199.11018313090005" stroke="#b6b6b6"
                                    stroke-dasharray="3" stroke-linecap="butt" class="apexcharts-xcrosshairs" x="0"
                                    y="0" width="1" height="199.11018313090005" fill="#b1b9c4" filter="none"
                                    fill-opacity="0.9" stroke-width="1"></line>
                                <line id="SvgjsLine1941" x1="0" y1="200.11018313090005" x2="0" y2="206.11018313090005"
                                    stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt"
                                    class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1942" x1="36.36551723809078" y1="200.11018313090005"
                                    x2="36.36551723809078" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1943" x1="72.73103447618156" y1="200.11018313090005"
                                    x2="72.73103447618156" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1944" x1="109.09655171427235" y1="200.11018313090005"
                                    x2="109.09655171427235" y2="206.11018313090005" stroke="#e0e0e0"
                                    stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1945" x1="145.46206895236313" y1="200.11018313090005"
                                    x2="145.46206895236313" y2="206.11018313090005" stroke="#e0e0e0"
                                    stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1946" x1="181.8275861904539" y1="200.11018313090005"
                                    x2="181.8275861904539" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1947" x1="218.19310342854467" y1="200.11018313090005"
                                    x2="218.19310342854467" y2="206.11018313090005" stroke="#e0e0e0"
                                    stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1948" x1="254.55862066663545" y1="200.11018313090005"
                                    x2="254.55862066663545" y2="206.11018313090005" stroke="#e0e0e0"
                                    stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1949" x1="290.92413790472625" y1="200.11018313090005"
                                    x2="290.92413790472625" y2="206.11018313090005" stroke="#e0e0e0"
                                    stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1950" x1="327.289655142817" y1="200.11018313090005"
                                    x2="327.289655142817" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1951" x1="363.6551723809078" y1="200.11018313090005"
                                    x2="363.6551723809078" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1952" x1="400.0206896189986" y1="200.11018313090005"
                                    x2="400.0206896189986" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1953" x1="436.38620685708935" y1="200.11018313090005"
                                    x2="436.38620685708935" y2="206.11018313090005" stroke="#e0e0e0"
                                    stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1954" x1="472.7517240951801" y1="200.11018313090005"
                                    x2="472.7517240951801" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1955" x1="509.1172413332709" y1="200.11018313090005"
                                    x2="509.1172413332709" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1956" x1="545.4827585713617" y1="200.11018313090005"
                                    x2="545.4827585713617" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1957" x1="581.8482758094525" y1="200.11018313090005"
                                    x2="581.8482758094525" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1958" x1="618.2137930475433" y1="200.11018313090005"
                                    x2="618.2137930475433" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1959" x1="654.579310285634" y1="200.11018313090005"
                                    x2="654.579310285634" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1960" x1="690.9448275237248" y1="200.11018313090005"
                                    x2="690.9448275237248" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1961" x1="727.3103447618156" y1="200.11018313090005"
                                    x2="727.3103447618156" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1962" x1="763.6758619999064" y1="200.11018313090005"
                                    x2="763.6758619999064" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1963" x1="800.0413792379971" y1="200.11018313090005"
                                    x2="800.0413792379971" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1964" x1="836.4068964760879" y1="200.11018313090005"
                                    x2="836.4068964760879" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1965" x1="872.7724137141787" y1="200.11018313090005"
                                    x2="872.7724137141787" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1966" x1="909.1379309522695" y1="200.11018313090005"
                                    x2="909.1379309522695" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1967" x1="945.5034481903602" y1="200.11018313090005"
                                    x2="945.5034481903602" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1968" x1="981.868965428451" y1="200.11018313090005"
                                    x2="981.868965428451" y2="206.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1969" x1="1018.2344826665418" y1="200.11018313090005"
                                    x2="1018.2344826665418" y2="206.11018313090005" stroke="#e0e0e0"
                                    stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1970" x1="1054.5999999046326" y1="200.11018313090005"
                                    x2="1054.5999999046326" y2="206.11018313090005" stroke="#e0e0e0"
                                    stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <g id="SvgjsG1937" class="apexcharts-grid">
                                    <g id="SvgjsG1938" class="apexcharts-gridlines-horizontal">
                                        <line id="SvgjsLine1972" x1="0" y1="39.82203662618001" x2="1054.5999999046326"
                                            y2="39.82203662618001" stroke="#e0e0e0" stroke-dasharray="0"
                                            stroke-linecap="butt" class="apexcharts-gridline"></line>
                                        <line id="SvgjsLine1973" x1="0" y1="79.64407325236002" x2="1054.5999999046326"
                                            y2="79.64407325236002" stroke="#e0e0e0" stroke-dasharray="0"
                                            stroke-linecap="butt" class="apexcharts-gridline"></line>
                                        <line id="SvgjsLine1974" x1="0" y1="119.46610987854002" x2="1054.5999999046326"
                                            y2="119.46610987854002" stroke="#e0e0e0" stroke-dasharray="0"
                                            stroke-linecap="butt" class="apexcharts-gridline"></line>
                                        <line id="SvgjsLine1975" x1="0" y1="159.28814650472003" x2="1054.5999999046326"
                                            y2="159.28814650472003" stroke="#e0e0e0" stroke-dasharray="0"
                                            stroke-linecap="butt" class="apexcharts-gridline"></line>
                                    </g>
                                    <g id="SvgjsG1939" class="apexcharts-gridlines-vertical"></g>
                                    <line id="SvgjsLine1978" x1="0" y1="199.11018313090005" x2="1054.5999999046326"
                                        y2="199.11018313090005" stroke="transparent" stroke-dasharray="0"
                                        stroke-linecap="butt"></line>
                                    <line id="SvgjsLine1977" x1="0" y1="1" x2="0" y2="199.11018313090005"
                                        stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                                </g>
                                <g id="SvgjsG1940" class="apexcharts-grid-borders">
                                    <line id="SvgjsLine1971" x1="0" y1="0" x2="1054.5999999046326" y2="0"
                                        stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt"
                                        class="apexcharts-gridline"></line>
                                    <line id="SvgjsLine1976" x1="0" y1="199.11018313090005" x2="1054.5999999046326"
                                        y2="199.11018313090005" stroke="#e0e0e0" stroke-dasharray="0"
                                        stroke-linecap="butt" class="apexcharts-gridline"></line>
                                    <line id="SvgjsLine2073" x1="0" y1="200.11018313090005" x2="1054.5999999046326"
                                        y2="200.11018313090005" stroke="#e0e0e0" stroke-dasharray="0" stroke-width="1"
                                        stroke-linecap="butt"></line>
                                </g>
                                <g id="SvgjsG1932" class="apexcharts-line-series apexcharts-plot-series">
                                    <g id="SvgjsG1933" class="apexcharts-series" zIndex="0" seriesName="SchoolsxAdded"
                                        data:longestSeries="true" rel="1" data:realIndex="0">
                                        <path id="SvgjsPath1936"
                                            d="M 0 199.11018313090005 L 36.365517238090774 199.11018313090005 L 72.73103447618155 199.11018313090005 L 109.09655171427234 199.11018313090005 L 145.4620689523631 199.11018313090005 L 181.8275861904539 199.11018313090005 L 218.19310342854467 199.11018313090005 L 254.55862066663545 199.11018313090005 L 290.9241379047262 199.11018313090005 L 327.28965514281697 199.11018313090005 L 363.6551723809078 199.11018313090005 L 400.0206896189986 199.11018313090005 L 436.38620685708935 199.11018313090005 L 472.7517240951801 199.11018313090005 L 509.1172413332709 199.11018313090005 L 545.4827585713616 199.11018313090005 L 581.8482758094524 199.11018313090005 L 618.2137930475432 199.11018313090005 L 654.5793102856339 199.11018313090005 L 690.9448275237247 199.11018313090005 L 727.3103447618156 199.11018313090005 L 763.6758619999064 199.11018313090005 L 800.0413792379971 199.11018313090005 L 836.4068964760879 199.11018313090005 L 872.7724137141787 199.11018313090005 L 909.1379309522695 199.11018313090005 L 945.5034481903602 199.11018313090005 L 981.868965428451 199.11018313090005 L 1018.2344826665418 199.11018313090005 L 1054.5999999046326 199.11018313090005"
                                            fill="none" fill-opacity="1" stroke="rgba(0,143,251,0.85)"
                                            stroke-opacity="1" stroke-linecap="butt" stroke-width="5"
                                            stroke-dasharray="0" class="apexcharts-line" index="0"
                                            clip-path="url(#gridRectMaskcflf56ok)"
                                            pathTo="M 0 199.11018313090005 L 36.365517238090774 199.11018313090005 L 72.73103447618155 199.11018313090005 L 109.09655171427234 199.11018313090005 L 145.4620689523631 199.11018313090005 L 181.8275861904539 199.11018313090005 L 218.19310342854467 199.11018313090005 L 254.55862066663545 199.11018313090005 L 290.9241379047262 199.11018313090005 L 327.28965514281697 199.11018313090005 L 363.6551723809078 199.11018313090005 L 400.0206896189986 199.11018313090005 L 436.38620685708935 199.11018313090005 L 472.7517240951801 199.11018313090005 L 509.1172413332709 199.11018313090005 L 545.4827585713616 199.11018313090005 L 581.8482758094524 199.11018313090005 L 618.2137930475432 199.11018313090005 L 654.5793102856339 199.11018313090005 L 690.9448275237247 199.11018313090005 L 727.3103447618156 199.11018313090005 L 763.6758619999064 199.11018313090005 L 800.0413792379971 199.11018313090005 L 836.4068964760879 199.11018313090005 L 872.7724137141787 199.11018313090005 L 909.1379309522695 199.11018313090005 L 945.5034481903602 199.11018313090005 L 981.868965428451 199.11018313090005 L 1018.2344826665418 199.11018313090005 L 1054.5999999046326 199.11018313090005"
                                            pathFrom="M -1 199.11018313090005 L -1 199.11018313090005 L 36.365517238090774 199.11018313090005 L 72.73103447618155 199.11018313090005 L 109.09655171427234 199.11018313090005 L 145.4620689523631 199.11018313090005 L 181.8275861904539 199.11018313090005 L 218.19310342854467 199.11018313090005 L 254.55862066663545 199.11018313090005 L 290.9241379047262 199.11018313090005 L 327.28965514281697 199.11018313090005 L 363.6551723809078 199.11018313090005 L 400.0206896189986 199.11018313090005 L 436.38620685708935 199.11018313090005 L 472.7517240951801 199.11018313090005 L 509.1172413332709 199.11018313090005 L 545.4827585713616 199.11018313090005 L 581.8482758094524 199.11018313090005 L 618.2137930475432 199.11018313090005 L 654.5793102856339 199.11018313090005 L 690.9448275237247 199.11018313090005 L 727.3103447618156 199.11018313090005 L 763.6758619999064 199.11018313090005 L 800.0413792379971 199.11018313090005 L 836.4068964760879 199.11018313090005 L 872.7724137141787 199.11018313090005 L 909.1379309522695 199.11018313090005 L 945.5034481903602 199.11018313090005 L 981.868965428451 199.11018313090005 L 1018.2344826665418 199.11018313090005 L 1054.5999999046326 199.11018313090005"
                                            fill-rule="evenodd"></path>
                                        <g id="SvgjsG1934"
                                            class="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                            data:realIndex="0">
                                            <g class="apexcharts-series-markers">
                                                <circle id="SvgjsCircle2097" r="0" cx="0" cy="0"
                                                    class="apexcharts-marker wnubh6xit no-pointer-events"
                                                    stroke="#ffffff" fill="#008ffb" fill-opacity="1" stroke-width="2"
                                                    stroke-opacity="0.9" default-marker-size="0"></circle>
                                            </g>
                                        </g>
                                    </g>
                                    <g id="SvgjsG1935" class="apexcharts-datalabels" data:realIndex="0"></g>
                                </g>
                                <line id="SvgjsLine1979" x1="0" y1="0" x2="1054.5999999046326" y2="0" stroke="#b6b6b6"
                                    stroke-dasharray="0" stroke-width="1" stroke-linecap="butt"
                                    class="apexcharts-ycrosshairs"></line>
                                <line id="SvgjsLine1980" x1="0" y1="0" x2="1054.5999999046326" y2="0"
                                    stroke-dasharray="0" stroke-width="0" stroke-linecap="butt"
                                    class="apexcharts-ycrosshairs-hidden"></line>
                                <g id="SvgjsG1981" class="apexcharts-xaxis" transform="translate(0, 0)">
                                    <g id="SvgjsG1982" class="apexcharts-xaxis-texts-g" transform="translate(0, -10)">
                                        <text id="SvgjsText1984" font-family="Helvetica, Arial, sans-serif" x="0"
                                            y="222.11018313090005" text-anchor="end" dominant-baseline="auto"
                                            font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 1 216.710186958313)">
                                            <tspan id="SvgjsTspan1985">17 Jul</tspan>
                                            <title>17 Jul</title>
                                        </text><text id="SvgjsText1987" font-family="Helvetica, Arial, sans-serif"
                                            x="36.36551723809079" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 37.365516662597656 216.710186958313)">
                                            <tspan id="SvgjsTspan1988">18 Jul</tspan>
                                            <title>18 Jul</title>
                                        </text><text id="SvgjsText1990" font-family="Helvetica, Arial, sans-serif"
                                            x="72.73103447618158" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 73.73103332519531 216.710186958313)">
                                            <tspan id="SvgjsTspan1991">19 Jul</tspan>
                                            <title>19 Jul</title>
                                        </text><text id="SvgjsText1993" font-family="Helvetica, Arial, sans-serif"
                                            x="109.09655171427235" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 110.0965461730957 216.710186958313)">
                                            <tspan id="SvgjsTspan1994">20 Jul</tspan>
                                            <title>20 Jul</title>
                                        </text><text id="SvgjsText1996" font-family="Helvetica, Arial, sans-serif"
                                            x="145.46206895236313" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 146.4620704650879 216.710186958313)">
                                            <tspan id="SvgjsTspan1997">21 Jul</tspan>
                                            <title>21 Jul</title>
                                        </text><text id="SvgjsText1999" font-family="Helvetica, Arial, sans-serif"
                                            x="181.8275861904539" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 182.82759475708008 216.710186958313)">
                                            <tspan id="SvgjsTspan2000">22 Jul</tspan>
                                            <title>22 Jul</title>
                                        </text><text id="SvgjsText2002" font-family="Helvetica, Arial, sans-serif"
                                            x="218.19310342854467" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 219.19308853149414 216.710186958313)">
                                            <tspan id="SvgjsTspan2003">23 Jul</tspan>
                                            <title>23 Jul</title>
                                        </text><text id="SvgjsText2005" font-family="Helvetica, Arial, sans-serif"
                                            x="254.55862066663548" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 255.5586280822754 216.710186958313)">
                                            <tspan id="SvgjsTspan2006">24 Jul</tspan>
                                            <title>24 Jul</title>
                                        </text><text id="SvgjsText2008" font-family="Helvetica, Arial, sans-serif"
                                            x="290.92413790472625" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 291.92412185668945 216.710186958313)">
                                            <tspan id="SvgjsTspan2009">25 Jul</tspan>
                                            <title>25 Jul</title>
                                        </text><text id="SvgjsText2011" font-family="Helvetica, Arial, sans-serif"
                                            x="327.289655142817" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 328.2896614074707 216.710186958313)">
                                            <tspan id="SvgjsTspan2012">26 Jul</tspan>
                                            <title>26 Jul</title>
                                        </text><text id="SvgjsText2014" font-family="Helvetica, Arial, sans-serif"
                                            x="363.6551723809078" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 364.6551704406738 216.710186958313)">
                                            <tspan id="SvgjsTspan2015">27 Jul</tspan>
                                            <title>27 Jul</title>
                                        </text><text id="SvgjsText2017" font-family="Helvetica, Arial, sans-serif"
                                            x="400.0206896189986" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 401.0207099914551 216.710186958313)">
                                            <tspan id="SvgjsTspan2018">28 Jul</tspan>
                                            <title>28 Jul</title>
                                        </text><text id="SvgjsText2020" font-family="Helvetica, Arial, sans-serif"
                                            x="436.38620685708935" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 437.3861885070801 216.710186958313)">
                                            <tspan id="SvgjsTspan2021">29 Jul</tspan>
                                            <title>29 Jul</title>
                                        </text><text id="SvgjsText2023" font-family="Helvetica, Arial, sans-serif"
                                            x="472.7517240951801" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 473.7517280578613 216.710186958313)">
                                            <tspan id="SvgjsTspan2024">30 Jul</tspan>
                                            <title>30 Jul</title>
                                        </text><text id="SvgjsText2026" font-family="Helvetica, Arial, sans-serif"
                                            x="509.1172413332709" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 510.11723709106445 216.710186958313)">
                                            <tspan id="SvgjsTspan2027">31 Jul</tspan>
                                            <title>31 Jul</title>
                                        </text><text id="SvgjsText2029" font-family="Helvetica, Arial, sans-serif"
                                            x="545.4827585713616" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 546.4828128814697 216.710186958313)">
                                            <tspan id="SvgjsTspan2030">01 Aug</tspan>
                                            <title>01 Aug</title>
                                        </text><text id="SvgjsText2032" font-family="Helvetica, Arial, sans-serif"
                                            x="581.8482758094524" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 582.8482303619385 216.710186958313)">
                                            <tspan id="SvgjsTspan2033">02 Aug</tspan>
                                            <title>02 Aug</title>
                                        </text><text id="SvgjsText2035" font-family="Helvetica, Arial, sans-serif"
                                            x="618.2137930475432" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 619.213830947876 216.710186958313)">
                                            <tspan id="SvgjsTspan2036">03 Aug</tspan>
                                            <title>03 Aug</title>
                                        </text><text id="SvgjsText2038" font-family="Helvetica, Arial, sans-serif"
                                            x="654.5793102856339" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 655.579309463501 216.710186958313)">
                                            <tspan id="SvgjsTspan2039">04 Aug</tspan>
                                            <title>04 Aug</title>
                                        </text><text id="SvgjsText2041" font-family="Helvetica, Arial, sans-serif"
                                            x="690.9448275237247" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 691.9448490142822 216.710186958313)">
                                            <tspan id="SvgjsTspan2042">05 Aug</tspan>
                                            <title>05 Aug</title>
                                        </text><text id="SvgjsText2044" font-family="Helvetica, Arial, sans-serif"
                                            x="727.3103447618155" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 728.3103885650635 216.710186958313)">
                                            <tspan id="SvgjsTspan2045">06 Aug</tspan>
                                            <title>06 Aug</title>
                                        </text><text id="SvgjsText2047" font-family="Helvetica, Arial, sans-serif"
                                            x="763.6758619999063" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 764.6758670806885 216.710186958313)">
                                            <tspan id="SvgjsTspan2048">07 Aug</tspan>
                                            <title>07 Aug</title>
                                        </text><text id="SvgjsText2050" font-family="Helvetica, Arial, sans-serif"
                                            x="800.041379237997" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 801.0414066314697 216.710186958313)">
                                            <tspan id="SvgjsTspan2051">08 Aug</tspan>
                                            <title>08 Aug</title>
                                        </text><text id="SvgjsText2053" font-family="Helvetica, Arial, sans-serif"
                                            x="836.4068964760878" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 837.406946182251 216.710186958313)">
                                            <tspan id="SvgjsTspan2054">09 Aug</tspan>
                                            <title>09 Aug</title>
                                        </text><text id="SvgjsText2056" font-family="Helvetica, Arial, sans-serif"
                                            x="872.7724137141786" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 873.7723636627197 216.710186958313)">
                                            <tspan id="SvgjsTspan2057">10 Aug</tspan>
                                            <title>10 Aug</title>
                                        </text><text id="SvgjsText2059" font-family="Helvetica, Arial, sans-serif"
                                            x="909.1379309522694" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 910.1378784179688 216.710186958313)">
                                            <tspan id="SvgjsTspan2060">11 Aug</tspan>
                                            <title>11 Aug</title>
                                        </text><text id="SvgjsText2062" font-family="Helvetica, Arial, sans-serif"
                                            x="945.5034481903601" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 946.5034427642822 216.710186958313)">
                                            <tspan id="SvgjsTspan2063">12 Aug</tspan>
                                            <title>12 Aug</title>
                                        </text><text id="SvgjsText2065" font-family="Helvetica, Arial, sans-serif"
                                            x="981.8689654284509" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 982.8689823150635 216.710186958313)">
                                            <tspan id="SvgjsTspan2066">13 Aug</tspan>
                                            <title>13 Aug</title>
                                        </text><text id="SvgjsText2068" font-family="Helvetica, Arial, sans-serif"
                                            x="1018.2344826665417" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 1019.2344608306885 216.710186958313)">
                                            <tspan id="SvgjsTspan2069">14 Aug</tspan>
                                            <title>14 Aug</title>
                                        </text><text id="SvgjsText2071" font-family="Helvetica, Arial, sans-serif"
                                            x="1054.5999999046326" y="222.11018313090005" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 1055.6000003814697 216.710186958313)">
                                            <tspan id="SvgjsTspan2072">15 Aug</tspan>
                                            <title>15 Aug</title>
                                        </text></g>
                                </g>
                                <g id="SvgjsG2094" class="apexcharts-yaxis-annotations"></g>
                                <g id="SvgjsG2095" class="apexcharts-xaxis-annotations"></g>
                                <g id="SvgjsG2096" class="apexcharts-point-annotations"></g>
                                <rect id="SvgjsRect2098" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1"
                                    stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"
                                    class="apexcharts-zoom-rect"></rect>
                                <rect id="SvgjsRect2099" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1"
                                    stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"
                                    class="apexcharts-selection-rect"></rect>
                            </g>
                        </svg>
                        <div class="apexcharts-tooltip apexcharts-theme-light">
                            <div class="apexcharts-tooltip-title"
                                style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div>
                            <div class="apexcharts-tooltip-series-group" style="order: 1;"><span
                                    class="apexcharts-tooltip-marker"
                                    style="background-color: rgb(0, 143, 251);"></span>
                                <div class="apexcharts-tooltip-text"
                                    style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                    <div class="apexcharts-tooltip-y-group"><span
                                            class="apexcharts-tooltip-text-y-label"></span><span
                                            class="apexcharts-tooltip-text-y-value"></span></div>
                                    <div class="apexcharts-tooltip-goals-group"><span
                                            class="apexcharts-tooltip-text-goals-label"></span><span
                                            class="apexcharts-tooltip-text-goals-value"></span></div>
                                    <div class="apexcharts-tooltip-z-group"><span
                                            class="apexcharts-tooltip-text-z-label"></span><span
                                            class="apexcharts-tooltip-text-z-value"></span></div>
                                </div>
                            </div>
                        </div>
                        <div class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                            <div class="apexcharts-xaxistooltip-text"
                                style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;"></div>
                        </div>
                        <div
                            class="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                            <div class="apexcharts-yaxistooltip-text"></div>
                        </div>
                        <div class="apexcharts-toolbar" style="top: 0px; right: 3px;">
                            <div class="apexcharts-zoomin-icon" title="Zoom In"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z">
                                    </path>
                                </svg>
                            </div>
                            <div class="apexcharts-zoomout-icon" title="Zoom Out"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z">
                                    </path>
                                </svg>
                            </div>
                            <div class="apexcharts-zoom-icon apexcharts-selected" title="Selection Zoom"><svg
                                    xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24"
                                    width="24">
                                    <path
                                        d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                    </path>
                                    <path d="M0 0h24v24H0V0z" fill="none"></path>
                                    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path>
                                </svg></div>
                            <div class="apexcharts-pan-icon" title="Panning"><svg xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24"
                                    viewBox="0 0 24 24" width="24">
                                    <defs>
                                        <path d="M0 0h24v24H0z" id="a"></path>
                                    </defs>
                                    <clipPath id="b">
                                        <use overflow="visible" xlink:href="#a"></use>
                                    </clipPath>
                                    <path clip-path="url(#b)"
                                        d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z">
                                    </path>
                                </svg></div>
                            <div class="apexcharts-reset-icon" title="Reset Zoom"><svg fill="#000000" height="24"
                                    viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                </svg></div>
                            <div class="apexcharts-menu-icon" title="Menu"><svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24">
                                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                                </svg></div>
                            <div class="apexcharts-menu">
                                <div class="apexcharts-menu-item exportSVG" title="Download SVG">Download SVG</div>
                                <div class="apexcharts-menu-item exportPNG" title="Download PNG">Download PNG</div>
                                <div class="apexcharts-menu-item exportCSV" title="Download CSV">Download CSV</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <schoolTable></schoolTable>

        <!-- Admin User Create Modal Component -->
        <!-- Header with "Create New" Button -->
        <!-- Admin User Create Modal Component -->
        <schoolCreateModal :isVisible="showModal" @close="showModal = false" />

    </div>


</template>

<script setup>
import { useUserStore } from '~/stores/userStore'
import schoolTable from '~/components/tables/schoolTables.vue';
import schoolCreateModal from '~/components/shared/schoolCreateModal.vue';

const userStore = useUserStore()

const email = userStore.user?.email
const token = userStore.user?.token

// Reference to the modal component
const modalRef = ref(null);

// Function to open the modal
const openModal = () => {
    modalRef.value.openModal();
    console.log('open')
}

</script>

<style scoped>
.container {
    max-width: 600px;
}
</style>
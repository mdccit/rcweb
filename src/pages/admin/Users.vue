<template>
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div class="flex w-full justify-between gap-8 mb-3">
            <h2 class="font-bold text-lg self-center"> All Users </h2>

            <div class="">

                <button  @clik="openCreateUserModal('create', null)" class=" border rounded-full shadow-sm font-bold py-2.5 px-8 
                        focus:outline-none focus:ring focus:ring-opacity-50 
                        bg-blue-500 hover:bg-primary-400 
                        active:bg-primary-600 text-white 
                        border-transparent focus:border-primary-300 
                        focus:ring-primary-200" @click="showModal = true">
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
            <div><span class="text-gray-500 text-sm font-bold uppercase mb-2 text-center"> Registrations 30d </span>
                <div class="my-4"></div>
                <div class="vue-apexcharts" style="min-height: 315px;">
                    <div id="apexcharts2ctanqr5" class="apexcharts-canvas apexcharts2ctanqr5 apexcharts-theme-light"
                        style="width: 1134px; height: 300px;"><svg id="SvgjsSvg1905" width="1134" height="300"
                            xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                            xmlns:svgjs="http://svgjs.dev" class="apexcharts-svg apexcharts-zoomable hovering-zoom"
                            xmlns:data="ApexChartsNS" transform="translate(0, 0)" style="background: transparent;">
                            <foreignObject x="0" y="0" width="1134" height="300">
                                <div class="apexcharts-legend" xmlns="http://www.w3.org/1999/xhtml"
                                    style="max-height: 150px;"></div>
                            </foreignObject>
                            <rect id="SvgjsRect1911" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1"
                                stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"></rect>
                            <g id="SvgjsG2057" class="apexcharts-yaxis" rel="0"
                                transform="translate(12.57382869720459, 0)">
                                <g id="SvgjsG2058" class="apexcharts-yaxis-texts-g"><text id="SvgjsText2060"
                                        font-family="Helvetica, Arial, sans-serif" x="20" y="31.5" text-anchor="end"
                                        dominant-baseline="auto" font-size="11px" font-weight="400" fill="#373d3f"
                                        class="apexcharts-text apexcharts-yaxis-label "
                                        style="font-family: Helvetica, Arial, sans-serif;">
                                        <tspan id="SvgjsTspan2061">1.0</tspan>
                                        <title>1.0</title>
                                    </text><text id="SvgjsText2063" font-family="Helvetica, Arial, sans-serif" x="20"
                                        y="71.32203333435058" text-anchor="end" dominant-baseline="auto"
                                        font-size="11px" font-weight="400" fill="#373d3f"
                                        class="apexcharts-text apexcharts-yaxis-label "
                                        style="font-family: Helvetica, Arial, sans-serif;">
                                        <tspan id="SvgjsTspan2064">0.8</tspan>
                                        <title>0.8</title>
                                    </text><text id="SvgjsText2066" font-family="Helvetica, Arial, sans-serif" x="20"
                                        y="111.14406666870116" text-anchor="end" dominant-baseline="auto"
                                        font-size="11px" font-weight="400" fill="#373d3f"
                                        class="apexcharts-text apexcharts-yaxis-label "
                                        style="font-family: Helvetica, Arial, sans-serif;">
                                        <tspan id="SvgjsTspan2067">0.6</tspan>
                                        <title>0.6</title>
                                    </text><text id="SvgjsText2069" font-family="Helvetica, Arial, sans-serif" x="20"
                                        y="150.96610000305174" text-anchor="end" dominant-baseline="auto"
                                        font-size="11px" font-weight="400" fill="#373d3f"
                                        class="apexcharts-text apexcharts-yaxis-label "
                                        style="font-family: Helvetica, Arial, sans-serif;">
                                        <tspan id="SvgjsTspan2070">0.4</tspan>
                                        <title>0.4</title>
                                    </text><text id="SvgjsText2072" font-family="Helvetica, Arial, sans-serif" x="20"
                                        y="190.78813333740231" text-anchor="end" dominant-baseline="auto"
                                        font-size="11px" font-weight="400" fill="#373d3f"
                                        class="apexcharts-text apexcharts-yaxis-label "
                                        style="font-family: Helvetica, Arial, sans-serif;">
                                        <tspan id="SvgjsTspan2073">0.2</tspan>
                                        <title>0.2</title>
                                    </text><text id="SvgjsText2075" font-family="Helvetica, Arial, sans-serif" x="20"
                                        y="230.6101666717529" text-anchor="end" dominant-baseline="auto"
                                        font-size="11px" font-weight="400" fill="#373d3f"
                                        class="apexcharts-text apexcharts-yaxis-label "
                                        style="font-family: Helvetica, Arial, sans-serif;">
                                        <tspan id="SvgjsTspan2076">0.0</tspan>
                                        <title>0.0</title>
                                    </text></g>
                            </g>
                            <g id="SvgjsG1907" class="apexcharts-inner apexcharts-graphical"
                                transform="translate(42.57382869720459, 30)">
                                <defs id="SvgjsDefs1906">
                                    <clipPath id="gridRectMask2ctanqr5">
                                        <rect id="SvgjsRect1913" width="1090.4261713027954" height="223.11016667175292"
                                            x="-7" y="-12" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none"
                                            stroke-dasharray="0" fill="#fff"></rect>
                                    </clipPath>
                                    <clipPath id="forecastMask2ctanqr5"></clipPath>
                                    <clipPath id="nonForecastMask2ctanqr5"></clipPath>
                                    <clipPath id="gridRectMarkerMask2ctanqr5">
                                        <rect id="SvgjsRect1914" width="1085.4261713027954" height="203.11016667175292"
                                            x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none"
                                            stroke-dasharray="0" fill="#fff"></rect>
                                    </clipPath>
                                </defs>
                                <line id="SvgjsLine1912" x1="1043.6356136716645" y1="0" x2="1043.6356136716645"
                                    y2="199.11016667175292" stroke="#b6b6b6" stroke-dasharray="3" stroke-linecap="butt"
                                    class="apexcharts-xcrosshairs" x="1043.6356136716645" y="0" width="1"
                                    height="199.11016667175292" fill="#b1b9c4" filter="none" fill-opacity="0.9"
                                    stroke-width="1"></line>
                                <line id="SvgjsLine1924" x1="0" y1="200.11016667175292" x2="0" y2="206.11016667175292"
                                    stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt"
                                    class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1925" x1="37.29055763113087" y1="200.11016667175292"
                                    x2="37.29055763113087" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1926" x1="74.58111526226175" y1="200.11016667175292"
                                    x2="74.58111526226175" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1927" x1="111.87167289339263" y1="200.11016667175292"
                                    x2="111.87167289339263" y2="206.11016667175292" stroke="#e0e0e0"
                                    stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1928" x1="149.1622305245235" y1="200.11016667175292"
                                    x2="149.1622305245235" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1929" x1="186.45278815565436" y1="200.11016667175292"
                                    x2="186.45278815565436" y2="206.11016667175292" stroke="#e0e0e0"
                                    stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1930" x1="223.74334578678523" y1="200.11016667175292"
                                    x2="223.74334578678523" y2="206.11016667175292" stroke="#e0e0e0"
                                    stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1931" x1="261.0339034179161" y1="200.11016667175292"
                                    x2="261.0339034179161" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1932" x1="298.324461049047" y1="200.11016667175292"
                                    x2="298.324461049047" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1933" x1="335.61501868017785" y1="200.11016667175292"
                                    x2="335.61501868017785" y2="206.11016667175292" stroke="#e0e0e0"
                                    stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1934" x1="372.9055763113087" y1="200.11016667175292"
                                    x2="372.9055763113087" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1935" x1="410.1961339424396" y1="200.11016667175292"
                                    x2="410.1961339424396" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1936" x1="447.48669157357045" y1="200.11016667175292"
                                    x2="447.48669157357045" y2="206.11016667175292" stroke="#e0e0e0"
                                    stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1937" x1="484.7772492047013" y1="200.11016667175292"
                                    x2="484.7772492047013" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1938" x1="522.0678068358322" y1="200.11016667175292"
                                    x2="522.0678068358322" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1939" x1="559.3583644669632" y1="200.11016667175292"
                                    x2="559.3583644669632" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1940" x1="596.6489220980941" y1="200.11016667175292"
                                    x2="596.6489220980941" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1941" x1="633.939479729225" y1="200.11016667175292"
                                    x2="633.939479729225" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1942" x1="671.2300373603559" y1="200.11016667175292"
                                    x2="671.2300373603559" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1943" x1="708.5205949914869" y1="200.11016667175292"
                                    x2="708.5205949914869" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1944" x1="745.8111526226178" y1="200.11016667175292"
                                    x2="745.8111526226178" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1945" x1="783.1017102537487" y1="200.11016667175292"
                                    x2="783.1017102537487" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1946" x1="820.3922678848796" y1="200.11016667175292"
                                    x2="820.3922678848796" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1947" x1="857.6828255160106" y1="200.11016667175292"
                                    x2="857.6828255160106" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1948" x1="894.9733831471415" y1="200.11016667175292"
                                    x2="894.9733831471415" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1949" x1="932.2639407782724" y1="200.11016667175292"
                                    x2="932.2639407782724" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1950" x1="969.5544984094033" y1="200.11016667175292"
                                    x2="969.5544984094033" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1951" x1="1006.8450560405342" y1="200.11016667175292"
                                    x2="1006.8450560405342" y2="206.11016667175292" stroke="#e0e0e0"
                                    stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1952" x1="1044.1356136716652" y1="200.11016667175292"
                                    x2="1044.1356136716652" y2="206.11016667175292" stroke="#e0e0e0"
                                    stroke-dasharray="0" stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <line id="SvgjsLine1953" x1="1081.426171302796" y1="200.11016667175292"
                                    x2="1081.426171302796" y2="206.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                    stroke-linecap="butt" class="apexcharts-xaxis-tick"></line>
                                <g id="SvgjsG1920" class="apexcharts-grid">
                                    <g id="SvgjsG1921" class="apexcharts-gridlines-horizontal">
                                        <line id="SvgjsLine1955" x1="0" y1="39.822033334350586" x2="1081.4261713027954"
                                            y2="39.822033334350586" stroke="#e0e0e0" stroke-dasharray="0"
                                            stroke-linecap="butt" class="apexcharts-gridline"></line>
                                        <line id="SvgjsLine1956" x1="0" y1="79.64406666870117" x2="1081.4261713027954"
                                            y2="79.64406666870117" stroke="#e0e0e0" stroke-dasharray="0"
                                            stroke-linecap="butt" class="apexcharts-gridline"></line>
                                        <line id="SvgjsLine1957" x1="0" y1="119.46610000305176" x2="1081.4261713027954"
                                            y2="119.46610000305176" stroke="#e0e0e0" stroke-dasharray="0"
                                            stroke-linecap="butt" class="apexcharts-gridline"></line>
                                        <line id="SvgjsLine1958" x1="0" y1="159.28813333740234" x2="1081.4261713027954"
                                            y2="159.28813333740234" stroke="#e0e0e0" stroke-dasharray="0"
                                            stroke-linecap="butt" class="apexcharts-gridline"></line>
                                    </g>
                                    <g id="SvgjsG1922" class="apexcharts-gridlines-vertical"></g>
                                    <line id="SvgjsLine1961" x1="0" y1="199.11016667175292" x2="1081.4261713027954"
                                        y2="199.11016667175292" stroke="transparent" stroke-dasharray="0"
                                        stroke-linecap="butt"></line>
                                    <line id="SvgjsLine1960" x1="0" y1="1" x2="0" y2="199.11016667175292"
                                        stroke="transparent" stroke-dasharray="0" stroke-linecap="butt"></line>
                                </g>
                                <g id="SvgjsG1923" class="apexcharts-grid-borders">
                                    <line id="SvgjsLine1954" x1="0" y1="0" x2="1081.4261713027954" y2="0"
                                        stroke="#e0e0e0" stroke-dasharray="0" stroke-linecap="butt"
                                        class="apexcharts-gridline"></line>
                                    <line id="SvgjsLine1959" x1="0" y1="199.11016667175292" x2="1081.4261713027954"
                                        y2="199.11016667175292" stroke="#e0e0e0" stroke-dasharray="0"
                                        stroke-linecap="butt" class="apexcharts-gridline"></line>
                                    <line id="SvgjsLine2056" x1="0" y1="200.11016667175292" x2="1081.4261713027954"
                                        y2="200.11016667175292" stroke="#e0e0e0" stroke-dasharray="0" stroke-width="1"
                                        stroke-linecap="butt"></line>
                                </g>
                                <g id="SvgjsG1915" class="apexcharts-line-series apexcharts-plot-series">
                                    <g id="SvgjsG1916" class="apexcharts-series" zIndex="0" seriesName="Registrations"
                                        data:longestSeries="true" rel="1" data:realIndex="0">
                                        <path id="SvgjsPath1919"
                                            d="M 0 199.11016667175292 L 37.29055763113087 199.11016667175292 L 74.58111526226175 199.11016667175292 L 111.87167289339263 199.11016667175292 L 149.1622305245235 199.11016667175292 L 186.4527881556544 199.11016667175292 L 223.74334578678526 199.11016667175292 L 261.0339034179161 199.11016667175292 L 298.324461049047 0 L 335.61501868017785 199.11016667175292 L 372.9055763113088 199.11016667175292 L 410.19613394243964 199.11016667175292 L 447.4866915735705 199.11016667175292 L 484.7772492047014 199.11016667175292 L 522.0678068358322 199.11016667175292 L 559.3583644669632 199.11016667175292 L 596.648922098094 0 L 633.9394797292249 199.11016667175292 L 671.2300373603557 199.11016667175292 L 708.5205949914866 199.11016667175292 L 745.8111526226176 199.11016667175292 L 783.1017102537484 199.11016667175292 L 820.3922678848793 199.11016667175292 L 857.6828255160101 199.11016667175292 L 894.973383147141 199.11016667175292 L 932.263940778272 199.11016667175292 L 969.5544984094028 199.11016667175292 L 1006.8450560405337 199.11016667175292 L 1044.1356136716645 199.11016667175292 L 1081.4261713027954 199.11016667175292"
                                            fill="none" fill-opacity="1" stroke="rgba(0,143,251,0.85)"
                                            stroke-opacity="1" stroke-linecap="butt" stroke-width="5"
                                            stroke-dasharray="0" class="apexcharts-line" index="0"
                                            clip-path="url(#gridRectMask2ctanqr5)"
                                            pathTo="M 0 199.11016667175292 L 37.29055763113087 199.11016667175292 L 74.58111526226175 199.11016667175292 L 111.87167289339263 199.11016667175292 L 149.1622305245235 199.11016667175292 L 186.4527881556544 199.11016667175292 L 223.74334578678526 199.11016667175292 L 261.0339034179161 199.11016667175292 L 298.324461049047 0 L 335.61501868017785 199.11016667175292 L 372.9055763113088 199.11016667175292 L 410.19613394243964 199.11016667175292 L 447.4866915735705 199.11016667175292 L 484.7772492047014 199.11016667175292 L 522.0678068358322 199.11016667175292 L 559.3583644669632 199.11016667175292 L 596.648922098094 0 L 633.9394797292249 199.11016667175292 L 671.2300373603557 199.11016667175292 L 708.5205949914866 199.11016667175292 L 745.8111526226176 199.11016667175292 L 783.1017102537484 199.11016667175292 L 820.3922678848793 199.11016667175292 L 857.6828255160101 199.11016667175292 L 894.973383147141 199.11016667175292 L 932.263940778272 199.11016667175292 L 969.5544984094028 199.11016667175292 L 1006.8450560405337 199.11016667175292 L 1044.1356136716645 199.11016667175292 L 1081.4261713027954 199.11016667175292"
                                            pathFrom="M -1 199.11016667175292 L -1 199.11016667175292 L 37.29055763113087 199.11016667175292 L 74.58111526226175 199.11016667175292 L 111.87167289339263 199.11016667175292 L 149.1622305245235 199.11016667175292 L 186.4527881556544 199.11016667175292 L 223.74334578678526 199.11016667175292 L 261.0339034179161 199.11016667175292 L 298.324461049047 199.11016667175292 L 335.61501868017785 199.11016667175292 L 372.9055763113088 199.11016667175292 L 410.19613394243964 199.11016667175292 L 447.4866915735705 199.11016667175292 L 484.7772492047014 199.11016667175292 L 522.0678068358322 199.11016667175292 L 559.3583644669632 199.11016667175292 L 596.648922098094 199.11016667175292 L 633.9394797292249 199.11016667175292 L 671.2300373603557 199.11016667175292 L 708.5205949914866 199.11016667175292 L 745.8111526226176 199.11016667175292 L 783.1017102537484 199.11016667175292 L 820.3922678848793 199.11016667175292 L 857.6828255160101 199.11016667175292 L 894.973383147141 199.11016667175292 L 932.263940778272 199.11016667175292 L 969.5544984094028 199.11016667175292 L 1006.8450560405337 199.11016667175292 L 1044.1356136716645 199.11016667175292 L 1081.4261713027954 199.11016667175292"
                                            fill-rule="evenodd"></path>
                                        <g id="SvgjsG1917"
                                            class="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                            data:realIndex="0">
                                            <g class="apexcharts-series-markers">
                                                <circle id="SvgjsCircle2080" r="0" cx="1044.1356136716645"
                                                    cy="199.11016667175292"
                                                    class="apexcharts-marker wd61nmwu4 no-pointer-events"
                                                    stroke="#ffffff" fill="#008ffb" fill-opacity="1" stroke-width="2"
                                                    stroke-opacity="0.9" default-marker-size="0"></circle>
                                            </g>
                                        </g>
                                    </g>
                                    <g id="SvgjsG1918" class="apexcharts-datalabels" data:realIndex="0"></g>
                                </g>
                                <line id="SvgjsLine1962" x1="0" y1="0" x2="1081.4261713027954" y2="0" stroke="#b6b6b6"
                                    stroke-dasharray="0" stroke-width="1" stroke-linecap="butt"
                                    class="apexcharts-ycrosshairs"></line>
                                <line id="SvgjsLine1963" x1="0" y1="0" x2="1081.4261713027954" y2="0"
                                    stroke-dasharray="0" stroke-width="0" stroke-linecap="butt"
                                    class="apexcharts-ycrosshairs-hidden"></line>
                                <g id="SvgjsG1964" class="apexcharts-xaxis" transform="translate(0, 0)">
                                    <g id="SvgjsG1965" class="apexcharts-xaxis-texts-g" transform="translate(0, -10)">
                                        <text id="SvgjsText1967" font-family="Helvetica, Arial, sans-serif" x="0"
                                            y="222.11016667175292" text-anchor="end" dominant-baseline="auto"
                                            font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 1 216.71015644073486)">
                                            <tspan id="SvgjsTspan1968">17 Jul</tspan>
                                            <title>17 Jul</title>
                                        </text><text id="SvgjsText1970" font-family="Helvetica, Arial, sans-serif"
                                            x="37.29055763113088" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 38.29055976867676 216.71015644073486)">
                                            <tspan id="SvgjsTspan1971">18 Jul</tspan>
                                            <title>18 Jul</title>
                                        </text><text id="SvgjsText1973" font-family="Helvetica, Arial, sans-serif"
                                            x="74.58111526226176" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 75.58111572265625 216.71015644073486)">
                                            <tspan id="SvgjsTspan1974">19 Jul</tspan>
                                            <title>19 Jul</title>
                                        </text><text id="SvgjsText1976" font-family="Helvetica, Arial, sans-serif"
                                            x="111.87167289339263" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 112.87168502807617 216.71015644073486)">
                                            <tspan id="SvgjsTspan1977">20 Jul</tspan>
                                            <title>20 Jul</title>
                                        </text><text id="SvgjsText1979" font-family="Helvetica, Arial, sans-serif"
                                            x="149.1622305245235" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 150.16223526000977 216.71015644073486)">
                                            <tspan id="SvgjsTspan1980">21 Jul</tspan>
                                            <title>21 Jul</title>
                                        </text><text id="SvgjsText1982" font-family="Helvetica, Arial, sans-serif"
                                            x="186.45278815565436" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 187.4527931213379 216.71015644073486)">
                                            <tspan id="SvgjsTspan1983">22 Jul</tspan>
                                            <title>22 Jul</title>
                                        </text><text id="SvgjsText1985" font-family="Helvetica, Arial, sans-serif"
                                            x="223.74334578678523" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 224.74336624145508 216.71015644073486)">
                                            <tspan id="SvgjsTspan1986">23 Jul</tspan>
                                            <title>23 Jul</title>
                                        </text><text id="SvgjsText1988" font-family="Helvetica, Arial, sans-serif"
                                            x="261.03390341791606" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 262.03390884399414 216.71015644073486)">
                                            <tspan id="SvgjsTspan1989">24 Jul</tspan>
                                            <title>24 Jul</title>
                                        </text><text id="SvgjsText1991" font-family="Helvetica, Arial, sans-serif"
                                            x="298.32446104904693" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 299.3244819641113 216.71015644073486)">
                                            <tspan id="SvgjsTspan1992">25 Jul</tspan>
                                            <title>25 Jul</title>
                                        </text><text id="SvgjsText1994" font-family="Helvetica, Arial, sans-serif"
                                            x="335.6150186801778" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 336.6150093078613 216.71015644073486)">
                                            <tspan id="SvgjsTspan1995">26 Jul</tspan>
                                            <title>26 Jul</title>
                                        </text><text id="SvgjsText1997" font-family="Helvetica, Arial, sans-serif"
                                            x="372.90557631130866" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 373.90556716918945 216.71015644073486)">
                                            <tspan id="SvgjsTspan1998">27 Jul</tspan>
                                            <title>27 Jul</title>
                                        </text><text id="SvgjsText2000" font-family="Helvetica, Arial, sans-serif"
                                            x="410.19613394243953" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 411.1961555480957 216.71015644073486)">
                                            <tspan id="SvgjsTspan2001">28 Jul</tspan>
                                            <title>28 Jul</title>
                                        </text><text id="SvgjsText2003" font-family="Helvetica, Arial, sans-serif"
                                            x="447.4866915735704" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 448.4867134094238 216.71015644073486)">
                                            <tspan id="SvgjsTspan2004">29 Jul</tspan>
                                            <title>29 Jul</title>
                                        </text><text id="SvgjsText2006" font-family="Helvetica, Arial, sans-serif"
                                            x="484.77724920470126" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 485.7772407531738 216.71015644073486)">
                                            <tspan id="SvgjsTspan2007">30 Jul</tspan>
                                            <title>30 Jul</title>
                                        </text><text id="SvgjsText2009" font-family="Helvetica, Arial, sans-serif"
                                            x="522.0678068358321" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 523.0678291320801 216.71015644073486)">
                                            <tspan id="SvgjsTspan2010">31 Jul</tspan>
                                            <title>31 Jul</title>
                                        </text><text id="SvgjsText2012" font-family="Helvetica, Arial, sans-serif"
                                            x="559.358364466963" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 560.358362197876 216.71015644073486)">
                                            <tspan id="SvgjsTspan2013">01 Aug</tspan>
                                            <title>01 Aug</title>
                                        </text><text id="SvgjsText2015" font-family="Helvetica, Arial, sans-serif"
                                            x="596.648922098094" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 597.6489505767822 216.71015644073486)">
                                            <tspan id="SvgjsTspan2016">02 Aug</tspan>
                                            <title>02 Aug</title>
                                        </text><text id="SvgjsText2018" font-family="Helvetica, Arial, sans-serif"
                                            x="633.9394797292249" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 634.9394779205322 216.71015644073486)">
                                            <tspan id="SvgjsTspan2019">03 Aug</tspan>
                                            <title>03 Aug</title>
                                        </text><text id="SvgjsText2021" font-family="Helvetica, Arial, sans-serif"
                                            x="671.2300373603558" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 672.2300662994385 216.71015644073486)">
                                            <tspan id="SvgjsTspan2022">04 Aug</tspan>
                                            <title>04 Aug</title>
                                        </text><text id="SvgjsText2024" font-family="Helvetica, Arial, sans-serif"
                                            x="708.5205949914867" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 709.5205936431885 216.71015644073486)">
                                            <tspan id="SvgjsTspan2025">05 Aug</tspan>
                                            <title>05 Aug</title>
                                        </text><text id="SvgjsText2027" font-family="Helvetica, Arial, sans-serif"
                                            x="745.8111526226177" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 746.8111209869385 216.71015644073486)">
                                            <tspan id="SvgjsTspan2028">06 Aug</tspan>
                                            <title>06 Aug</title>
                                        </text><text id="SvgjsText2030" font-family="Helvetica, Arial, sans-serif"
                                            x="783.1017102537486" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 784.1016483306885 216.71015644073486)">
                                            <tspan id="SvgjsTspan2031">07 Aug</tspan>
                                            <title>07 Aug</title>
                                        </text><text id="SvgjsText2033" font-family="Helvetica, Arial, sans-serif"
                                            x="820.3922678848795" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 821.392297744751 216.71015644073486)">
                                            <tspan id="SvgjsTspan2034">08 Aug</tspan>
                                            <title>08 Aug</title>
                                        </text><text id="SvgjsText2036" font-family="Helvetica, Arial, sans-serif"
                                            x="857.6828255160104" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 858.682825088501 216.71015644073486)">
                                            <tspan id="SvgjsTspan2037">09 Aug</tspan>
                                            <title>09 Aug</title>
                                        </text><text id="SvgjsText2039" font-family="Helvetica, Arial, sans-serif"
                                            x="894.9733831471414" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 895.9734745025635 216.71015644073486)">
                                            <tspan id="SvgjsTspan2040">10 Aug</tspan>
                                            <title>10 Aug</title>
                                        </text><text id="SvgjsText2042" font-family="Helvetica, Arial, sans-serif"
                                            x="932.2639407782723" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 933.2638549804688 216.71015644073486)">
                                            <tspan id="SvgjsTspan2043">11 Aug</tspan>
                                            <title>11 Aug</title>
                                        </text><text id="SvgjsText2045" font-family="Helvetica, Arial, sans-serif"
                                            x="969.5544984094032" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 970.5545291900635 216.71015644073486)">
                                            <tspan id="SvgjsTspan2046">12 Aug</tspan>
                                            <title>12 Aug</title>
                                        </text><text id="SvgjsText2048" font-family="Helvetica, Arial, sans-serif"
                                            x="1006.845056040534" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 1007.8450565338135 216.71015644073486)">
                                            <tspan id="SvgjsTspan2049">13 Aug</tspan>
                                            <title>13 Aug</title>
                                        </text><text id="SvgjsText2051" font-family="Helvetica, Arial, sans-serif"
                                            x="1044.135613671665" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 1045.1356449127197 216.71015644073486)">
                                            <tspan id="SvgjsTspan2052">14 Aug</tspan>
                                            <title>14 Aug</title>
                                        </text><text id="SvgjsText2054" font-family="Helvetica, Arial, sans-serif"
                                            x="1081.4261713027959" y="222.11016667175292" text-anchor="end"
                                            dominant-baseline="auto" font-size="12px" font-weight="400" fill="#373d3f"
                                            class="apexcharts-text apexcharts-xaxis-label "
                                            style="font-family: Helvetica, Arial, sans-serif;"
                                            transform="rotate(-45 1082.4261722564697 216.71015644073486)">
                                            <tspan id="SvgjsTspan2055">15 Aug</tspan>
                                            <title>15 Aug</title>
                                        </text></g>
                                </g>
                                <g id="SvgjsG2077" class="apexcharts-yaxis-annotations"></g>
                                <g id="SvgjsG2078" class="apexcharts-xaxis-annotations"></g>
                                <g id="SvgjsG2079" class="apexcharts-point-annotations"></g>
                                <rect id="SvgjsRect2081" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1"
                                    stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"
                                    class="apexcharts-zoom-rect"></rect>
                                <rect id="SvgjsRect2082" width="0" height="0" x="0" y="0" rx="0" ry="0" opacity="1"
                                    stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fefefe"
                                    class="apexcharts-selection-rect"></rect>
                            </g>
                        </svg>
                        <div class="apexcharts-tooltip apexcharts-theme-light" style="left: 939.722px; top: 159.71px;">
                            <div class="apexcharts-tooltip-title"
                                style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">14 Aug</div>
                            <div class="apexcharts-tooltip-series-group apexcharts-active"
                                style="order: 1; display: flex;"><span class="apexcharts-tooltip-marker"
                                    style="background-color: rgb(0, 143, 251);"></span>
                                <div class="apexcharts-tooltip-text"
                                    style="font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
                                    <div class="apexcharts-tooltip-y-group"><span
                                            class="apexcharts-tooltip-text-y-label">Registrations: </span><span
                                            class="apexcharts-tooltip-text-y-value">0.0</span></div>
                                    <div class="apexcharts-tooltip-goals-group"><span
                                            class="apexcharts-tooltip-text-goals-label"></span><span
                                            class="apexcharts-tooltip-text-goals-value"></span></div>
                                    <div class="apexcharts-tooltip-z-group"><span
                                            class="apexcharts-tooltip-text-z-label"></span><span
                                            class="apexcharts-tooltip-text-z-value"></span></div>
                                </div>
                            </div>
                        </div>
                        <div class="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light"
                            style="left: 1056.72px; top: 231.11px;">
                            <div class="apexcharts-xaxistooltip-text"
                                style="font-family: Helvetica, Arial, sans-serif; font-size: 12px; min-width: 34.5445px;">
                                14 Aug</div>
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

        <AdminUserTable @open-modal="openModal"></AdminUserTable>

        <!-- Admin User Create Modal Component -->
        <!-- Header with "Create New" Button -->
        <div class="flex justify-between mb-3">
            <h2 class="font-bold text-lg">All Users</h2>
            <!-- <button @click="showModal = true"
                class="bg-blue-700 text-white font-medium rounded-lg px-4 py-2 hover:bg-blue-800">
                Show Modal 
               
            </button> -->
        </div>
        <!-- Admin User Create Modal Component -->
        <AdminUserCreateModal @open-modal="openModal" :isVisible="showModal" @close="showModal = false"  :action="selectedAction" :userId="selectedUserId"/>    


    </div>



</template>

<style scoped>
.container {
    max-width: 600px;
}
</style>


<script setup>
import { ref } from 'vue';
import AdminUserTable from '~/components/tables/AdminUserTable.vue';
import AdminUserCreateModal from '~/components/admin/user/adminUserCreateModal.vue';


const showModal = ref(false);
// Reference to the modal component
const modalRef = ref(null);
const selectedAction = ref(''); 
const selectedUserId = ref(null); 


const openCreateUserModal = ({ action, userId }) => {
  selectedAction.value = action;
  selectedUserId.value = userId; // Clear userId if necessary
  showModal.value = true;
};

// Function to open the modal
const openModal = ({ action, userId }) => {
  selectedAction.value = action; // Extract and assign action
  selectedUserId.value = userId; // Extract and assign userId
  showModal.value = true;        // Show the modal
};


</script>
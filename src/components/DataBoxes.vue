<template>

    <div class="grid md:grid-cols-2 gap-5 font-myfont mx-2">
        <!-- Box 1 -->
        <div class="shadow-md bg-gray-200 p-10 text-center rounded">
            <h3 class="text-3xl text-gray-700 font-bold mb-4">
                Cases
            </h3>
            <div class="text-2xl mb-4 text-gray-800">
                <span class="font-bold text-gray-600">New: </span>
                {{numberWithCommas(stats.NewConfirmed)}}
            </div>
            <div class="text-2xl mb-4 text-gray-800">
                <span class="font-bold text-gray-600">Total: </span>
                {{numberWithCommas(stats.TotalConfirmed)}}
            </div>
        </div>
    

    <!-- Box 2 -->
        <div class="shadow-md bg-gray-200 p-10 text-center rounded">
            <h3 class="text-3xl text-gray-700 font-bold mb-4">
                Deaths
            </h3>
            <div class="text-2xl mb-4 text-gray-800">
                <span class="font-bold text-gray-600">New: </span>
                {{numberWithCommas(stats.NewDeaths)}}
            </div>
            <div class="text-2xl mb-4 text-gray-800">
                <span class="font-bold text-gray-600">Total: </span>
                {{numberWithCommas(stats.TotalDeaths)}}
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'DataBoxes',
    props: ['stats'],
    methods: {
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}
</script>
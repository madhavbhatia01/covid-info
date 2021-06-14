<template>
    <div class="text-center font-myfont ">
        <h2 class="text-3xl font-bold text-gray-700">{{text}}</h2>
        <div class="text-2xl mt-4 mb-10 text-gray-600">{{timestamp}}</div>
    </div>
</template> 

<script>
import moment from 'moment'

export default {
    name: 'DataTitle',
    props:['text' , 'dataDate'],
    computed: {
        timestamp: function(){
            return moment(this.dataDate).format("MMMM Do YYYY, h:mm a");
        }
    }
}
</script>
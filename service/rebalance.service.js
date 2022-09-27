var rebalance=function(dollar){
    let input = dollar;
    let s1 = input / 2,s2 = input / 2;
    //console.log(s1,s2)

    function getPercent(s){
        return Math.floor((s / input) * 100)
    }
    
    function getRandomStreamValues(){
        return Math.floor((Math.random() * input/10) + 1);
    }
    let final={
        values:[],
        persentage :[],
        Message:""
    }
    function recfn(s1, s2) {
        let s1percent = getPercent(s1)
        let s2percent = getPercent(s2)
         // If both have a balance of 0% or less, exit the program
         if ((s1percent <= 0) && (s2percent <= 0)) {
           return 'No budget remained';
         } else if (
           (((s1percent < 5 )&& (s2percent > 5))) ||
           (((s1percent > 5) && (s2percent < 5)))
         ) {
           s1 = s2 = (s1 + s2) / 2
         }
         final.values.push({
            "Stream1 Value":s1,
            "Stream2 Value":s2
         })
         final.persentage.push({
            "Stream1 Percentage":s1percent,
            "Stream2 Percentage":s2percent
         })
         s1-= getRandomStreamValues();
         s2-= getRandomStreamValues();
         return recfn(s1,s2); // input to stream we can change the stream and based on the stream input the load balanicng will help on the logic
    }

    let res = recfn(s1, s2)
    final.Message=res
    // console.log(final)
    return final;
}



module.exports={
    rebalance:rebalance
}
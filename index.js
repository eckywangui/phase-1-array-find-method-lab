// code your solution here


function superbowlWin(record){
    for(const year of record){
        if(year.result === "W"){
            return year.year;
        }
    }
}
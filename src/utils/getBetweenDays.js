// eslint-disable-next-line no-undef
export  const  getBetweenDays =  (startDate,endDate)=>{
    const [startYear,startMonth,startDay] = startDate.split('-').map(v=>parseInt(v));
    const [endYear,endMonth,endDay] = endDate.split('-').map(v=>parseInt(v));
    let sum = 0;
    for(let year=startYear, month=startMonth; year <= endYear && (year==endYear?month<endMonth:1); month++){
        sum += getDaysInMonth(year,month);
        if(month > 11){
            year ++ ;
            month = 0;
        }
    }
    sum -= startDay;
    sum += endDay;
    return sum;
}

const getDaysInMonth = (year,month)=>{
    if([1,3,5,7,8,10,12].includes(month)){
        return 31;
    }
    if([4,6,9,11].includes(month)) {
        return 30;
    }
    return isLeapYear(year) ? 29 : 28;
}

const isLeapYear = year=>{
    if (year % 400 == 0)
		return true;
	else if (year % 100 == 0)
		return false;
	else if (year % 4 == 0)
		return true;
	else 
		return false;
}

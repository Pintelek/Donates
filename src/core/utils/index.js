import moment from "moment";
import 'moment-precise-range-plugin'


export function calculateSumOfNumbers (arr){
  return arr.reduce((acum, item) => acum +  item);
}

export function getFormattedTime(date){
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}


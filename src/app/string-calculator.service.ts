import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StringCalculatorService {

  constructor() { }

  add(numbers: string): Observable<string | BigInt> {
    if (!numbers) {
      return of('0');
    }

    numbers = numbers.replace(/\\n/g, "\n");

    let delimiters = [',','\n'];

    // Custom Delimeter
    if (numbers.startsWith('//')) {

      if(!(numbers.includes("\n"))){
        return throwError (()=>new Error(`Use Correct Custom Delimiter's Format`));
      }

      // check for other symbols used for delimiter
      const regex = /[\n,-.\d]+/;
      
      const parts = numbers.split(regex);
      const customDelimiter = parts[0].substring(2,parts[0].length);
      if(!(customDelimiter) || customDelimiter.charCodeAt(0) == 45){
        return throwError(()=> new Error(`Use Custom Delimiter other than "," ,"-", "Numbers" and "\n".`));
      }

      delimiters.push(customDelimiter);

      // check custom delemeter format
      const nonDelimiter = parts.filter((val,idx)=>{
        return ((idx !=0 )&& (val?true:false) && (val?.charCodeAt(0)?val?.charCodeAt(0) != 45 :false)  && (val.trim() != customDelimiter))})
      if(nonDelimiter.length){
        return throwError(()=> new Error(`Delimiters "${customDelimiter}" not used correctly`));
        }

      const parts2 = numbers.split('\n');
      numbers = parts2.slice(1).join('\n');
    }

    let negativeValues = this.checkNegativeNum(numbers,delimiters);
    if(negativeValues){
      return throwError(()=> new Error(`negative numbers not allowed: ${negativeValues}`));
    }
    const total = this.NumberHandler(numbers,delimiters)
    return of(total);
    
  }

  NumberHandler(numbers: string,delimiters:string[]):string{

        let nums = numbers.split(new RegExp(`[${delimiters.join('')}]`));
        const total = this.sumDecimalsAndNumbers(nums);
        return total
  }

  isDecimal(number:string|number|BigInt):boolean{
      return (number).toString().includes('.');
  }

  sumDecimalsAndNumbers(numbers:string[]):string{
    let decimals = numbers.filter((val)=>this.isDecimal(val));
    let integertotal = numbers.filter((val)=>!(this.isDecimal(val))).reduce((sum, num) =>BigInt(sum) + BigInt(num), BigInt(0));

    let total = '0';

    if(decimals.length){
     let decimaltotal = decimals.reduce((sum, num) => sum + (num?parseFloat(num):0),0).toString().split('.');
      total = (integertotal + BigInt(decimaltotal[0])).toString() + '.'+ decimaltotal[1]
    }else{
      total = (integertotal).toString();
    }

    return total;
  }

  checkNegativeNum(str:string,delimiters:string[]):string {
    let negativeValues:string = "";

      let nums = str.split(new RegExp(`[${delimiters.join('')}]`)).map((num)=> {
        if(num.includes('-')){
          let newValues = num.split('-')
                      .map((val,idx)=>(idx == 0 && val != '')? '': (val?"-"+val:''))
                      .filter((val)=> Number(val) < 0)
                      .join(", ");
          negativeValues = negativeValues?negativeValues + ', '+newValues : newValues;          
        }
        return 0;
      });

    return negativeValues
  }

}

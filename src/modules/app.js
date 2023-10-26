
import DonateForm from "./donate-form";
import DonateList from "./donate-list";
import { calculateSumOfNumbers, getFormattedTime } from "../core/utils";

export default class App {

  static state = {
    donates : [
      { amount: 4, date: getFormattedTime(new Date()) },
      { amount: 20, date:getFormattedTime(new Date()) },
      { amount: 3, date: getFormattedTime(new Date()) },
      { amount: 1, date: getFormattedTime(new Date()) },
    ],
    DonateList: [],
    totalAmount: 0
  }
  constructor(){
    this.form = new DonateForm(calculateSumOfNumbers(App.state.donates.map(item => item.amount)));
    this.donateList = new DonateList(App.state.donates);
  }

  #sumTotalAmount(){
    return App.state.donates.reduce((accum, item) =>  accum + item.amount, 0);
  }

  update(amount){
    let newDonate = {
      amount: amount,
      date: getFormattedTime(new Date())
    };
    console.log(newDonate)
    App.state.donates.push(newDonate);
    App.state.totalAmount = this.#sumTotalAmount()
    this.form.updateTotalAmount(this.#sumTotalAmount());
    this.donateList.updateDonates(App.state.donates)
  }

  run(){
    const formHtml = this.form.render();
    
    document.body.append(formHtml, this.donateList.render());
    formHtml.addEventListener('submit',(e) => {
      e.preventDefault()
      this.update(+e.target.amount.value);
      e.target.amount.value = '';
    })
  }
}

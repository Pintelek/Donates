
import {Settings as setting} from "../core/constants/Settings"
export default class DonateForm{
  #formContainer
  #formTitle 
  #formLabel 
  #formButton 
  #formInput
  #totalAmount
constructor(totalAmount){

  this.#totalAmount = totalAmount;
  this.#formContainer = document.createElement('form');
  this.#formTitle = document.createElement('h1');
  this.#formLabel = document.createElement('label');
  this.#formInput = document.createElement('input');
  this.#formButton = document.createElement('button');
}

updateTotalAmount(newAmount){
  console.log(newAmount);
  this.#formTitle.textContent = newAmount + setting.currency;
  this.#totalAmount = newAmount;
}

render(){
  this.#formContainer.className = 'donate-form';

  this.#formTitle.id = 'total-amount';
  this.#formTitle.textContent = this.#totalAmount + "$";

  this.#formLabel.className = 'donate-form__input-label';
  this.#formLabel.textContent = 'Введите сумму в $';

  this.#formInput.name = 'amount';
  this.#formInput.className = 'donate-form__donate-input';
  this.#formInput.type = 'number';
  this.#formInput.max = '100';
  this.#formInput.min = '1';
  this.#formInput.required = 'true';

  this.#formLabel.append(this.#formInput);

  this.#formButton.className = 'donate-form__submit-button';
  this.#formButton.type = 'submit';
  this.#formButton.textContent = 'Задонатить';

  this.#formContainer.append(this.#formTitle, this.#formLabel, this.#formButton);

  return this.#formContainer;
}

}


export default class DonateList{
  #donates
  #donatesContainer
  #donatesTitle
  #donatesList
  constructor(donates){
    this.#donates = donates;
    this.#donatesContainer = document.createElement('div');
    this.#donatesTitle = document.createElement('h2');
    this.#donatesList = document.createElement('div');
  }

  #createItem(arr){
    arr.forEach(item => {
      const elem = document.createElement('div');
      elem.className = 'donate-item';
      elem.innerHTML = `${item.date} - <b>${item.amount} $</b>`;
      this.#donatesList.append(elem);
    })
    
  }

  updateDonates(newDonates){
    this.#donatesList.innerHTML = '';
    this.#createItem(newDonates);
  }

  
  render(){
    this.#donatesContainer.className = 'donate-container';
    this.#donatesTitle.className = 'donates-container__title';
    this.#donatesList.className = 'donates-container__donates'
    this.#donatesContainer.append(this.#donatesTitle, this.#donatesList);
    this.#donatesList.innerHTML = '';
    this.#createItem(this.#donates)
    return this.#donatesContainer;
  }
}
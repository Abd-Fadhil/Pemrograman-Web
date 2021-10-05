//Selectors
const inputItem = document.getElementById('input-item')
const btnAdd = document.getElementById('btn-add-item')
const list = document.getElementById('list')

const clickListener = (e) => {
  const li = list.getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
      text = li[i].innerText;
      lastSpace = text.lastIndexOf(" ");
      value = text.substring(0, lastSpace);
      if (value === inputItem.value) {
        alert("Item Telah Ada");
        inputItem.value = document.getElementById('none').value;
        return;
      }
    }
  if (inputItem.value === '') {
    alert('Command Is Not Found');
  }
    else {
      const item = document.createElement('li');
      const button = document.createElement('button')
      item.textContent = (inputItem.value); 
      item.classList.add('pt-3')
      button.textContent = 'delete';
      button.classList.add('btn', 'btn-danger')
      list.appendChild(item);
      item.append(" ", button);
      
      const buttonClickListener = (e) => {
        // e.preventDefault();
        list.removeChild(item);
      }
      
      button.addEventListener('click', buttonClickListener);
    }
    inputItem.value = '';
  };
  
  
  btnAdd.addEventListener('click', clickListener);

import makePlanList  from "./makePlanList.js";

const $modal_background = document.querySelector('#modal_background');

function buttonClickAndOpenModal(button, modal, modalInput) {
  button.addEventListener('click', () => {
    $modal_background.style.display = 'flex';
    modal.style.display = 'flex';
    modalInput.focus();
  })
}

function inputAndCloseModal(button, modalInput, plan, modal) {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (!modalInput.value.trim()) {
      alert('할 일을 입력하세요!');
    } else {
      const object = {
        content: modalInput.value,
        completed: false
      }
      $modal_background.style.display = 'none';
      makePlanList(plan, object);
      modalInput.value = '';
      modal.style.display = 'none';
    }
  })
}

export { buttonClickAndOpenModal, inputAndCloseModal }
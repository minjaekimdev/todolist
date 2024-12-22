import { localStorageUpdate } from "./storage.js";
import sgClick from "./planListClick.js";

function makePlanList(plan, obj) {
  plan.number++;

  const unCompleted = plan.querySelector('.uncompleted'); // 선택된 계획(todo/weekly/daily/...) 의 uncompleted리스트를 선택
  const completed = plan.querySelector('.completed');
  const localPlanName = plan.querySelector('.title > span');

  const planList = document.createElement('li');
  const planContainer = document.createElement('div');
  const planCheckbox = document.createElement('button');
  const planName = document.createElement('span');

  planList.className = 'plan_list';
  planContainer.className = 'plan_container';
  planCheckbox.className = 'plan_checkbox';
  planName.className = 'plan_name';
  planName.textContent = obj.content;

  planList.appendChild(planContainer);
  planContainer.appendChild(planCheckbox);
  planContainer.appendChild(planName);

  planList._id = plan.number;
  planList.clickNum = 0;

  let timerId;

  planList.addEventListener('click', (e) => {
    const tg = e.currentTarget;
    tg.clickNum++;

    if (tg.clickNum === 1) {
      timerId = setTimeout(() => { sgClick(tg, completed, unCompleted, obj, localPlanName) }, 200);
    }
    else {
      clearTimeout(timerId);
      tg.remove();
      localStorageUpdate(localPlanName, obj, 'delete');
    }

  });

  if (obj.completed === false) {
    unCompleted.append(planList);
  } else {
    completed.append(planList);
    planList.classList.add('complete');
  }

  const savedItems = JSON.parse(localStorage.getItem(localPlanName.textContent));
  // uncompleted와 completed의 개수를 합친 것이 localStorage의 개수와 같다면 처음에 받아오기만 한 것, Update X.  
  // saveItems가 null이라면 빈칸인 상태이고, savedItems의 길이보다 unCompleted와 completed의 자식 li 요소 개수의 합이 더 크다면 새롭게 추가된 것이므로 create.    
  if (savedItems === null || savedItems.length < unCompleted.childElementCount + completed.childElementCount) {
    localStorageUpdate(localPlanName, obj, 'create');
  }
}

export default makePlanList;
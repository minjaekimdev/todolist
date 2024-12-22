import makePlanList from './makePlanList.js';

function localStorageUpdate(localPlanName, item, mode) {
  const savedItems = JSON.parse(localStorage.getItem(localPlanName.textContent));

  if (mode === 'create') {
    if (savedItems === null) {
      localStorage.setItem(localPlanName.textContent, JSON.stringify([item]));
    } else {
      savedItems.push(item);
      localStorage.setItem(localPlanName.textContent, JSON.stringify(savedItems));
    }
  }
  else if (mode === 'update') {
    for (let i = 0; i < savedItems.length; i++) {
      if (savedItems[i].content === item.content) {
        if (savedItems[i].completed === false) {
          savedItems[i].completed = true;
        }
        else {
          savedItems[i].completed = false;
        }
      }
    }
    localStorage.setItem(localPlanName.textContent, JSON.stringify(savedItems));
  }
  else if (mode === 'delete') {
    for (let i = 0; i < savedItems.length; i++) {
      if (savedItems[i].content === item.content) {
        savedItems.splice(i, 1);
      }
    }
    localStorage.setItem(localPlanName.textContent, JSON.stringify(savedItems));
  }
}

function localStorageRead() {
  const localTodos = JSON.parse(localStorage.getItem('To-dos'));
  const localWeekly = JSON.parse(localStorage.getItem('Weekly plans'));
  const localMonthly = JSON.parse(localStorage.getItem('Monthly plans'));
  const localYearly = JSON.parse(localStorage.getItem('Yearly plans'));
  const localHabits = JSON.parse(localStorage.getItem('Habits'));

  const $todos = document.querySelector('#to_dos');
  const $weekly_plans = document.querySelector('#weekly_plans');
  const $monthly_plans = document.querySelector('#monthly_plans');
  const $yearly_plans = document.querySelector('#yearly_plans');
  const $habits = document.querySelector('#habits');

  if (localTodos !== null) {
    for (let p of localTodos) {
      makePlanList($todos, p);
    }
  }
  if (localWeekly !== null) {
    for (let p of localWeekly) {
      makePlanList($weekly_plans, p);
    }
  }
  if (localMonthly !== null) {
    for (let p of localMonthly) {
      makePlanList($monthly_plans, p);
    }
  }
  if (localYearly !== null) {
    for (let p of localYearly) {
      makePlanList($yearly_plans, p);
    }
  }
  if (localHabits !== null) {
    for (let p of localHabits) {
      makePlanList($habits, p);
    }
  }
}

export { localStorageUpdate, localStorageRead }
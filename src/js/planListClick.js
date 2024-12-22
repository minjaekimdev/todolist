import { localStorageUpdate } from "./storage.js";

function sgClick(tg, completed, unCompleted, obj, localPlanName) {
  // plan_list 완료 표시

  tg.classList.toggle('complete');
  if (tg.classList.contains('complete')) { // 미완료 -> 완료
    completed.append(tg);
  } else {
    let before;

    for (let idx = 0; idx < unCompleted.childElementCount; idx++) { // 현재까지 생성된 계획의 수를 id로 하여 미완료 계획의 배치 우선순위 배정
      if (unCompleted.children[idx]._id < tg._id) {
        before = unCompleted.children[idx];
      }
    }

    if (before === undefined) { // 클릭한 요소가 현재 존재하는 목록들 중 가장 먼저 등록된 목록이었다면
      unCompleted.prepend(tg);
    } else {
      before.after(tg);
    }
  }
  localStorageUpdate(localPlanName, obj, 'update');
  tg.clickNum = 0;
}

export default sgClick;
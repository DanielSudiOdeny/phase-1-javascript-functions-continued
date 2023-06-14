function saturdayFun(activity1, activity2 = "roller-skate!") {
  if (!!activity1) {
    return `This Saturday, I want to ${activity1}!`;
  } else {
    return `This Saturday, I want to ${activity2}`;
  }
}

const mondayWork = function (activity1, activity2 = "go to the office") {
  if (!!activity1) {
    return `This Monday, I will ${activity1}.`;
  } else {
    return `This Monday, I will ${activity2}.`;
  }
};

const wrapAdjective = function (visualFlair = "*") {
  return function (adjective = "special") {
    return `You are ${visualFlair}${adjective}${visualFlair}!`;
  };
};

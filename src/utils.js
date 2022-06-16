const getUniqueDonutId = () => {
  return `donut-${Math.floor(Math.random() * 100000 + 1)}`;
};

const buildDonut = (type) => {
  return {
    flavor: type,
    sprinkles: false,
    filled: false,
    donutId: getUniqueDonutId(),
  };
};

export const addDonutToBox = (donutShelfData, userId, type) => {
  // This function should return a copy of donutShelfData where a new donut
  // is added to the selected donut box (find with the userId)
  // Use the helper function `buildDonut` to create a donut object
  const newShelfData = [...donutShelfData];
  for (let i = 0; i < newShelfData.length; i++) {
    if (newShelfData[i].userId === userId) {
      newShelfData[i].donuts.push(buildDonut(type));
      break;
    }
  }
  //console.log("added");
  return newShelfData;
};

export const alterSprinklesToDonut = (donutShelfData, userId, donutId) => {
  // Jeff really likes sprinkles. Due to his character flaw, `alterSprinklesToDonut` has been completed
  const newShelfData = [...donutShelfData];
  for (let i = 0; i < newShelfData.length; i++) {
    if (newShelfData[i].userId === userId) {
      for (let j = 0; j < newShelfData[i].donuts.length; j++) {
        if (newShelfData[i].donuts[j].donutId === donutId) {
          newShelfData[i].donuts[j].sprinkles =
            !newShelfData[i].donuts[j].sprinkles;
        }
      }
      break;
    }
  }
  return newShelfData;
};

export const alterFillingToDonut = (donutShelfData, userId, donutId) => {
  // This function should return a copy of donutShelfData where the filling
  // prop is toggled on the specific donutId
  const newShelfData = [...donutShelfData];
  for (let i = 0; i < newShelfData.length; i++) {
    if (newShelfData[i].userId === userId) {
      for (let j = 0; j < newShelfData[i].donuts.length; j++) {
        if (newShelfData[i].donuts[j].donutId === donutId) {
          newShelfData[i].donuts[j].filled = !newShelfData[i].donuts[j].filled;
        }
      }
      break;
    }
  }
  return newShelfData;
};

export const removeDonutFromBox = (donutShelfData, userId, donutId) => {
  // This function should return a copy of donutShelfData where the selected
  // donut is removed from the userId's array of donuts
  const newShelfData = [...donutShelfData];
  for (let i = 0; i < newShelfData.length; i++) {
    if (newShelfData[i].userId === userId) {
      for (let j = 0; j < newShelfData[i].donuts.length; j++) {
        if (newShelfData[i].donuts[j].donutId === donutId) {
          newShelfData[i].donuts.splice(j, 1);
        }
      }
      break;
    }
  }
  return newShelfData;
};

export const alterDonutFlavor = (
  donutShelfData,
  userId,
  donutId,
  selectedType
) => {
  // There is a bug in this function
  const newShelfData = [...donutShelfData];
  for (let i = 0; i < newShelfData.length; i++) {
    if (newShelfData[i].userId === userId) {
      for (let j = 0; j < newShelfData[i].donuts.length; j++) {
        if (newShelfData[i].donuts[j].donutId === donutId) {
          newShelfData[i].donuts[j].flavor = selectedType; //<- bug is: hard coded flavor? Should be selectedType
        }
      }
      break;
    }
  }
  return newShelfData;
};

// Code your solution in this file!

/* returns a distance in blocks
  returns a distance in blocks
  calculates distances below 42nd street */

function distanceFromHqInBlocks(passedNumber) {
  if (passedNumber > 42) {
    return passedNumber - 42;
  } else {
    return 42 - passedNumber;
  }
}

/*returns a distance in feet
  returns a distance in feet
  calculates distances below 42nd street */

function distanceFromHqInFeet(passedNumber) {
  return distanceFromHqInBlocks(passedNumber) * 264;
}

/*  returns the distance travelled in feet
    returns a distance in feet
    returns distance when destination is below distance */

function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    return (destination - start) * 264;
  } else {
    return (start - destination) * 264;
  }
}

/*  gives customers a free sample
    charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)
    charges 25 dollars for a distance over 2000 feet
    does not allow rides over 2500 feet */

function calculatesFarePrice(start, destination) {
  const dist = distanceTravelledInFeet(start, destination);

  if (dist <= 400) {
    return 0;
  } else if (dist > 400 && dist <= 2000) {
    return (2 / 100) * (dist - 400);
  } else if (dist > 2000 && dist < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

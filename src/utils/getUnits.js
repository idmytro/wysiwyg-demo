// https://stackoverflow.com/questions/31972761/how-to-convert-pixels-to-inch

const hyphenate = function (a, b, c) {
  return `${b}-${c.toLowerCase()}`;
};

// get computed style property
const getStyle = function (target, prop) {
  if (window.getComputedStyle) { // gecko and webkit
    prop = prop.replace(/([a-z])([A-Z])/, hyphenate); // requires hyphenated, not camel
    return window.getComputedStyle(target, null).getPropertyValue(prop);
  }
  if (target.currentStyle) {
    return target.currentStyle[prop];
  }
  return target.style[prop];
};

// get object with units
const getUnits = function (target, prop) {
  const baseline = 100; // any number serves
  let item; // generic iterator

  const map = { // list of all units and their identifying string
    pixel: 'px',
    percent: '%',
    inch: 'in',
    cm: 'cm',
    mm: 'mm',
    point: 'pt',
    pica: 'pc',
    em: 'em',
    ex: 'ex',
  };

  const factors = {}; // holds ratios
  const units = {}; // holds calculated values

  const value = getStyle(target, prop); // get the computed style value

  let numeric = value.match(/\d+/); // get the numeric component
  if (numeric === null) { // if match returns null, throw error...  use === so 0 values are accepted
    throw 'Invalid property value returned';
  }
  numeric = numeric[0]; // get the string

  let unit = value.match(/\D+$/); // get the existing unit
  unit = (unit == null) ? map.pixel : unit[0]; // if its not set, assume px - otherwise grab string

  let activeMap; // a reference to the map key for the existing unit
  for (item in map) {
    if (map[item] == unit) {
      activeMap = item;
      break;
    }
  }
  if (!activeMap) { // if existing unit isn't in the map, throw an error
    throw 'Unit not found in map';
  }

  const temp = document.createElement('div'); // create temporary element
  temp.style.overflow = 'hidden'; // in case baseline is set too low
  temp.style.visibility = 'hidden'; // no need to show it

  target.parentElement.appendChild(temp); // insert it into the parent for em and ex

  for (item in map) { // set the style for each unit, then calculate it's relative value against the baseline
    temp.style.width = baseline + map[item];
    factors[item] = baseline / temp.offsetWidth;
  }

  for (item in map) { // use the ratios figured in the above loop to determine converted values
    units[item] = numeric * (factors[item] * factors[activeMap]);
  }

  target.parentElement.removeChild(temp); // clean up

  return units; // returns the object with converted unit values...
};

export default getUnits;

/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */

 function calculatorModule () {
  var memory = 0;
  var total = 0;

  var calculator = {
    load : _load,
    getTotal : _getTotal,
    add : _add,
    subtract : _subtract,
    multiply : _multiply,
    divide : _divide,
    recallMemory : _recallMemory,
    saveMemory : _saveMemory,
    clearMemory : _clearMemory,
    validate : _validate

  };
  /**
   * sets the `total` to the number passed in
   * @param  { Number } x
   * @return { Number }    current total
   */
  function _load (newTotal) {
    total = newTotal;
    if (_validate(newTotal)) {
      return total;
    } else {
      return 'Error';
    }
  }

  /**
   * Return the value of `total`
   * @return { Number }
   */
  function _getTotal () {

    return total;
  }

  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  function _add (addTotal) {
    total = total + addTotal;
    if (_validate(addTotal)) {
      return total;
    } else {
      return 'Error';
    }

    return total;
  }

  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  function _subtract (subTotal) {
    total = total - subTotal;
    if (_validate(subTotal)) {
      return total;
    } else {
      return 'Error';
    }
    return total;
  }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  function _multiply (mulTotal) {
    total = total * mulTotal;
    if (_validate(mulTotal)) {
      return total;
    } else {
      return 'Error';
    }
    return total;
  }


  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  function _divide (divTotal) {
    total = total / divTotal;
    if (_validate(divTotal)) {
      return total;
    } else {
      return 'Error';
    }
    return total;
  }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  function _recallMemory (recall) {

    return memory;
  }

  /**
   * Stores the value of `total` to `memory`
   */
  function _saveMemory (save) {
    memory = total;

    return memory;
  }

  /**
   * Clear the value stored at `memory`
   */
  function _clearMemory (clear) {
    memory = 0;

    return memory;
  }
  /**
   * Validation
   */
  function _validate (x) {
    if (typeof (x) === 'number') {
      return true;
    } else {
      return false;
    }
  }

  return calculator;

}

export const formatArray = (arr: any) => {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        result += arr[i].join(' or ');
        result += ';'
      } else {
        result += arr[i];
      }

      if (i < arr.length - 1) {
        result += ' and ';
      }
    }

    return result === '' ? 'ไม่มี' : result;
  }
export const customSort = (arr: any) => {
    return arr.sort((a: any, b: any) => {
      if (Array.isArray(a) && !Array.isArray(b)) {
        return -1; // Nested arrays come before strings
      } else if (!Array.isArray(a) && Array.isArray(b)) {
        return 1; // Strings come after nested arrays
      } else {
        return 0; // Maintain the relative order of other elements
      }
    });
  }
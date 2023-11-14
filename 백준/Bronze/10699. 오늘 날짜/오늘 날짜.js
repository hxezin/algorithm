function getSeoulDate() {
  const SEOUL_OFFSET = 9 * 60 * 60 * 1000;
  const today = new Date(new Date().getTime() + SEOUL_OFFSET);

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

console.log(getSeoulDate());
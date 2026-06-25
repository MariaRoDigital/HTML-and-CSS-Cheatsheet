const rows = document.querySelectorAll('.wrapper.row');
let isOdd = false;

rows.forEach(row => {
  row.style.background = isOdd ? '#f5f5f5' : 'rgb(227 227 227)';
  isOdd = !isOdd;
});

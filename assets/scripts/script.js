const form = document.querySelector('form');

function generateTableRow(formProps) {
  let $tr = document.createElement('tr');

  Object.values(formProps).forEach(value => {
    let $td = document.createElement('td');
  
    $td.innerText = value;  
    $tr.append($td);
  });

  return $tr;
}; 

form.addEventListener('submit', e => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  form.reset();

  const $tr = generateTableRow(formProps);

  document.querySelector('tbody').prepend($tr);
});


